import {
  Grid,
  View,
  Text,
  Button,
  Flex,
  useTheme,
} from "@aws-amplify/ui-react";
import Link from "next/link";
import HeroBackground from "../components/Home/HeroBackground";
import Contact from "../components/Home/Contact";
import Team from "../components/Home/Team";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import DonateForm from "../components/Form";
import { Swal } from "../utils/sweetalert2";
import useRazorpay from "react-razorpay";
import { useForm } from "react-hook-form";
import { encode } from "../utils/helpers";
import { useRouter } from "next/router";
import { Card } from "@aws-amplify/ui-react";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 9999,
  },
};

export default function Home() {
  const { tokens } = useTheme();
  const [viewNavbar, setViewNavbar] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const Razorpay = useRazorpay();
  const showInput = parseInt(watch("amount")) > 5000 ? true : false;

  async function initiateTransaction(data) {
    const response = await fetch("/api/order", {
      method: "POST",
      body: JSON.stringify({ ...data }),
      headers: {
        "content-type": "application/json",
      },
    }).catch((d) => null);
    if (!response)
      return Swal.fire({
        title: "Error",
        html: `Error while initiating transaction.`,
      });
    const { orderId } = response.json();
    const rzp = new Razorpay({
      amount: parseInt(data.amount) * 100,
      currency: "INR",
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      name: "Humanist",
      order_id: orderId,
      prefill: {
        contact: data.phoneNumber,
        email: data.email,
        name: `${data.firstName} ${data.lastName}`,
      },
      notes: { ...data },
      handler: () => {
        setModalOpened(false);
        Swal.fire({
          title: "Success",
          html: "Thanks For Donation.",
        }).then(() => {
          setModalOpened(false);
          fetch("/", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: encode({
              "form-name": "Donation",
              ...data,
            }),
          }).catch(() => {});
        });
      },
    });
    rzp.on("payment.failed", (response) => {
      Swal.fire({
        title: "Error",
        html: response.error.description,
      });
    });

    rzp.open();
  }
  const { asPath } = useRouter();
  const [showContents, setShowContents] = useState(
    asPath.includes("#our-team")
      ? true
      : asPath.includes("#what-we-do")
      ? true
      : false
  );

  useEffect(() => {
    if (showContents == false) {
      setTimeout(() => setShowContents(true), 1000);
    }
  }, []);
  useEffect(() => {
    if (!showContents) return;
    ReactModal.setAppElement("#modal");
  }, [showContents]);

  return !showContents ? (
    <Flex
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      backgroundColor={tokens.colors.background.secondary}
    >
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        xmlns="http://www.w3.org/2000/svg"
        stroke={tokens.colors.font.primary}
      >
        <g fill="none" fillRule="evenodd" strokeWidth="2">
          <circle cx="22" cy="22" r="1">
            <animate
              attributeName="r"
              begin="0s"
              dur="1.8s"
              values="1; 20"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.165, 0.84, 0.44, 1"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              begin="0s"
              dur="1.8s"
              values="1; 0"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.3, 0.61, 0.355, 1"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="22" cy="22" r="1">
            <animate
              attributeName="r"
              begin="-0.9s"
              dur="1.8s"
              values="1; 20"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.165, 0.84, 0.44, 1"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              begin="-0.9s"
              dur="1.8s"
              values="1; 0"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.3, 0.61, 0.355, 1"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </Flex>
  ) : (
    <>
      <View as="div" position="relative">
        <Navbar
          homepage
          viewNavbar={viewNavbar}
          setViewNavbar={setViewNavbar}
        />
        <HeroBackground mobileNavbar={viewNavbar} />
        <Flex
          direction={{ base: "column" }}
          gap="0"
          alignItems="center"
          style={{ position: "absolute", zIndex: 15 }}
          top={{ base: "calc(55% - 112px)", large: "calc(60% - 112px)" }}
        >
          <Text
            as="h1"
            fontWeight="bold"
            color={tokens.colors.font.primary}
            textAlign="center"
            width="100%"
            letterSpacing="0.5rem"
            fontSize="3rem"
          >
            HUMANIST
          </Text>
          <Text
            fontWeight="medium"
            color={tokens.colors.font.secondary}
            textAlign="center"
            width="75%"
            fontSize="1rem"
          >
            Humanist aims to bridge the funding gap for those cancer patients
            who cannot fully afford treatment. It is a not for profit company
            and donations are eligible for tax exemption under section 80G.
            Every donation makes a difference in the lives of people who need
            support.
          </Text>
          <Button
            fontWeight="medium"
            color={tokens.colors.font.primary}
            textAlign="center"
            width={{ base: "50%", large: "25%" }}
            marginTop="1rem"
            variation="primary"
            style={{
              flexDirection: "column",
            }}
            onClick={() => setModalOpened((o) => !o)}
          >
            DONATE NOW
            <span className="small-text"> (With Indian Tax benefits)</span>
          </Button>
        </Flex>
      </View>
      <div id="modal">
        <ReactModal
          isOpen={modalOpened}
          onRequestClose={() => setModalOpened((o) => !o)}
          style={{
            ...customStyles,
            overlay: {
              backgroundColor: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(10px)",
              zIndex: 10000,
            },
          }}
          contentLabel="Payment Modal"
          shouldCloseOnEsc
        >
          <DonateForm
            handleSubmit={handleSubmit((d) => {
              if (!window.Razorpay)
                Swal.fire({
                  title: "Error",
                  html: `An error occured while initiating this transaction. <br/> Please try again later.`,
                });
              initiateTransaction(d);
            })}
            register={register}
            amountPlaceholder={"****"}
            errors={errors}
            showOtherInputs={showInput}
          />
        </ReactModal>
      </div>
      <Team />
      <Flex
        direction={"column"}
        alignItems="center"
        padding="4rem 0"
        backgroundColor={tokens.colors.background.primary}
        id="what-we-do"
      >
        <Text
          as="h2"
          fontWeight="bold"
          fontSize="2rem"
          textAlign="center"
          color={tokens.colors.font.primary}
        >
          What We Do
        </Text>
        <Text
          as="p"
          // fontWeight="bold"
          // fontSize="2rem"
          textAlign="center"
          maxWidth={{ large: "75%", base: "95%" }}
          color={tokens.colors.font.primary}
        >
          Today, 75% of households of India have a household income lower than
          the baseline cost of treatment in most cancers. Due to high
          out-of-pocket expenditures, it can hurt a family emotionally and
          financially; as a result, 556,400 deaths happen every year due to a
          lack of affordability, access, and awareness.
        </Text>
        <ul
          style={{
            color: tokens.colors.font.primary,
          }}
        >
          <li> We bridge funding gaps for patients seeking cancer therapy. </li>
          <li> We support cancer awareness and patient education.</li>
          <li>
            {" "}
            We ensure patients get the right diagnosis and treatment at a
            subsidised cost.
          </li>
          <li>
            {" "}
            We keep overheads to a minimum to ensure donor funds go directly to
            patients who need them the most.
          </li>
        </ul>
        <Flex
          direction={"row"}
          alignItems="center"
          padding="4rem 0"
          wrap={{
            base: "wrap",
          }}
          justifyContent={{
            base: "center",
          }}
        >
          <Card
          backgroundColor={tokens.colors.background.secondary}
            color={tokens.colors.font.primary}
            boxShadow={tokens.shadows.large}
            maxWidth={"430px"}
            minHeight={"90px"}
            display="flex"
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
            className="card"
            textAlign="center"
            borderRadius={tokens.radii.medium}
          >
            Supported more than 120+ cancer patients in the past four years
          </Card>
          <Card
          backgroundColor={tokens.colors.background.secondary}
            color={tokens.colors.font.primary}
            boxShadow={tokens.shadows.large}
            maxWidth={"430px"}
            minHeight={"90px"}
            display="flex"
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
            className="card"
            textAlign="center"
            borderRadius={tokens.radii.medium}
          >
            Facilitating 75+ surgeries
          </Card>
          <Card
          backgroundColor={tokens.colors.background.secondary}
            color={tokens.colors.font.primary}
            boxShadow={tokens.shadows.large}
            maxWidth={"430px"}
            minHeight={"90px"}
            display="flex"
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
            className="card"
            textAlign="center"
            borderRadius={tokens.radii.medium}
          >
            Administration of 750+ Radiotherapy fractions
          </Card>
          <Card
          backgroundColor={tokens.colors.background.secondary}
            color={tokens.colors.font.primary}
            boxShadow={tokens.shadows.large}
            maxWidth={"430px"}
            minHeight={"90px"}
            display="flex"
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
            className="card"
            textAlign="center"
            borderRadius={tokens.radii.medium}
          >
            Administration of 400+ Chemotherapy Cycles
          </Card>
        </Flex>
      </Flex>
      <Flex
        direction={"column"}
        alignItems="center"
        padding="4rem 0"
        backgroundColor={tokens.colors.background.tertiary}
      >
        <Text
          as="h2"
          textAlign="center"
          color={tokens.colors.font.primary}
          fontWeight="bold"
          fontSize={"2rem"}
          maxWidth={{ large: "75%", base: "95%" }}
        >
          Humanist&apos;s Initiatives
        </Text>
        <Flex
          direction={"column"}
          alignItems="center"
          padding="4rem 0"
          maxWidth={{ large: "75%", base: "95%" }}
          backgroundColor={tokens.colors.background.tertiary}
        >
          <ul style={{ color: tokens.colors.font.primary }}>
            <li>
              Worked with Vidyashilp Academy to create the VSA Cancer Care Fund,
              created by high school students
            </li>
            <li>
              Humanist conducts various cancer awareness talks in schools and
              colleges, as well as facilitating internships in Cytecare Cancer
              Hospitals
            </li>
            <li>
              Hosted blood donation camps in schools, as well as held awareness
              sessions relating to blood donation challenges
            </li>
            <li>
              During the COVID-19 crisis, Humanist raised over 5 Crores from
              donors, as well as building a 120 bedded unit at Canadian
              International School that supported more than 80+ patients.{" "}
            </li>
            <li>
              In the Mandya district of Karnataka, training and screening
              initiative was launched in January 2022 as part of the
              &rsquo;Mandya Beats Cancer&rsquo; programme.{" "}
            </li>
            <li>
              Humanist is currently working on the early detection of breast
              cancer in semi-urban areas around Bangalore.{" "}
            </li>
          </ul>
        </Flex>
      </Flex>
      <Flex
        direction={"column"}
        alignItems="center"
        padding="4rem 0"
        backgroundColor={tokens.colors.background.secondary}
      >
        <Text
          as="h2"
          textAlign="center"
          color={tokens.colors.font.primary}
          fontWeight="bold"
          fontSize={"2rem"}
          maxWidth={{ large: "75%", base: "95%" }}
        >
          Process by which cases are selected
        </Text>
        <Flex
          flex={1}
          alignItems="center"
          justifyContent={"center"}
          color={tokens.colors.font.primary}
          marginTop="relative.large"
          maxWidth={{ large: "75%", base: "95%" }}
        >
          <ul>
            <li>Patient is evaluated by a cancer specialist</li>
            <li>The treatment plan is suggested by the specialist</li>
            <li>
              A financial estimation is provided to the patient/family for the
              full treatment life-cycle
            </li>
            <li>
              If the family requires financial aid, the case is transferred to a
              medical social worker (MSW)
            </li>
            <li>
              The MSW evaluates the financial status, family background, funding
              status, and also explores possible avenues to support the patient
            </li>
            <li>
              The case is then referred to the Humanist Board for approval,
              after which the treatment is initiated{" "}
            </li>
            <li>
              Clinical updates of the patient are provided to Humanist on a
              quarterly basis
            </li>
            <li>
              The hospital bills generated are cleared by Humanist upon
              submission.
            </li>
          </ul>
        </Flex>
      </Flex>
      <Flex
        direction="column"
        alignItems="center"
        padding="4rem 0"
        backgroundColor={tokens.colors.background.tertiary}
      >
        <Text
          as="h2"
          fontWeight="bold"
          fontSize="2rem"
          textAlign="center"
          color={tokens.colors.font.primary}
        >
          Stories that Inspire
        </Text>

        <Grid
          templateColumns={{ base: "1fr", large: "1fr 1fr" }}
          gap="1rem"
          padding="0 2rem"
          marginTop="2rem"
          marginBottom="1rem"
          marginLeft="auto"
          marginRight="auto"
          maxWidth={"80vw"}
          style={{
            placeItems: "center",
          }}
        >
          <video
            src="/videos/Rohan.MP4"
            controls
            style={{ aspectRatio: 16 / 9, borderRadius: "1rem" }}
            width="100%"
          />
          <video
            src="/videos/Master%20Subash%20MRN%206078.mp4"
            controls
            style={{ aspectRatio: 16 / 9, borderRadius: "1rem" }}
            width="100%"
          />
        </Grid>

        <Link href="/testimonials">
          <Button variation="link">View More</Button>
        </Link>
      </Flex>
      <Contact />
      <Footer />
    </>
  );
}
