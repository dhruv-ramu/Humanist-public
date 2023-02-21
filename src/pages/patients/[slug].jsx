import {
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  Button,
  View,
  useTheme,
  Badge,
} from "@aws-amplify/ui-react";
import Footer from "../../components/Footer";
import DonateForm from "../../components/Form";
import Navbar from "../../components/Navbar";
import { markdownToHtml } from "../../utils/helpers";
import { Swal } from "../../utils/sweetalert2";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { useEffect, useMemo, useState } from "react";
import useRazorpay from "react-razorpay";
import { encode } from "../../utils/encode";
import { client } from "../../lib/sanity";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex:"1000000"
  },
};

export default function PatientInfo({ patient }) {
  const { tokens } = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [modalIsOpen, setIsOpen] = useState(false);

  const showInput = parseInt(watch("amount")) > 5000 ? true : false;
  const Razorpay = useRazorpay();

  async function initiateTransaction(data) {
    const response = await fetch("/api/order", {
      method: "POST",
      body: JSON.stringify({ ...data, patientName: patient.name }),
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
      notes: { ...data, patient: patient.name },
      handler: () => {
        Swal.fire({
          title: "Success",
          html: "Thanks For Donation.",
        }).then(() => {
          setIsOpen(false);
          fetch("/", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: encode({
              "form-name": "Donation",
              ...data,
              patient: patient.name,
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

  useEffect(() => {
    Modal.setAppElement("#modal");
  }, []);
  return (
    <>
      <View backgroundColor={tokens.colors.background.secondary}>
        <Navbar />
        <Heading
          level={1}
          textAlign="left"
          marginLeft={{ base: "2rem", large: "6rem" }}
          paddingTop="10rem"
          fontWeight="semibold"
        >
          {patient.name}{" "}
          {patient.priority ? <Badge variation="error">Priority</Badge> : null}
          {patient.treatmentComplete ? (
            <Badge variation="success">Treatment Complete</Badge>
          ) : null}
        </Heading>
        <Text
          as="span"
          opacity={0.9}
          fontSize="0.9rem"
          fontWeight="medium"
          marginLeft={{ base: "2rem", large: "6rem" }}
        >
          Amount Required: ₹{patient.amountRequired}
        </Text>

        <Grid
          templateColumns={{ base: "1fr", large: "1fr 1fr" }}
          padding={{ base: "0 2rem 2rem 2rem", large: "0 4rem 2rem 6rem" }}
          gap="2rem"
        >
          <Flex direction="column" alignItems="flex-start">
            <Text
              as="p"
              dangerouslySetInnerHTML={{ __html: patient.content }}
            />
            <Text as="p">
              UPI : Humanist@kotak
              <br />
              Account: Humanist Centre for Medicine,
              <br />
              Kotak Bank A/c: 3511834850 <br />
              Branch: Lavelle Road, Bangalore 560001 <br />
              IFSC code: KKBK0000422
            </Text>
          </Flex>
          <Flex direction="column" alignItems="center">
            <Image
              src={patient.image}
              borderRadius="1rem"
              alt={patient.name}
              width={{ base: "100%", large: "50%" }}
              style={{ aspectRatio: 1 }}
              objectFit="cover"
            />
            <Flex direction="column" width={{ base: "95%", large: "45%" }}>
              <Button variation="primary" onClick={() => setIsOpen(true)}>
                Donate
              </Button>
              <Button
                onClick={() =>
                  Swal.fire({
                    title: "Contact",
                    html: `Contact Humanist for more information at:
                  <br/>
                  <br />
                  <a href="mailto:info@humanist.org.in">enquiry@humanist.org.in</a>`,
                    confirmButtonColor: tokens.colors.font.primary,
                  })
                }
              >
                Contact
              </Button>
            </Flex>
          </Flex>
        </Grid>
        <Footer />
      </View>
      <div id="modal">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setIsOpen((o) => !o)}
          style={{
            ...customStyles,
            overlay: {
              backgroundColor: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(10px)",zIndex:"100000"
            },
          }}
          contentLabel="Payment Modal"
          shouldCloseOnEsc
        >
          <DonateForm
            chosenPatient={patient.name}
            handleSubmit={handleSubmit((d) => {
              if (!window.Razorpay)
                Swal.fire({
                  title: "Error",
                  html: `An error occured while initiating this transaction. <br/> Please try again later.`,
                });
              initiateTransaction(d);
            })}
            register={register}
            amountPlaceholder={patient.amountRequired}
            errors={errors}
            showOtherInputs={showInput}
          />
        </Modal>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  // const patient = getPatientBySlug(params.slug, [
  //   "name",
  //   "image",
  //   "date",
  //   "slug",
  //   "description",
  //   "content",
  //   "priority",
  //   "treatmentComplete",
  //   "amountRequired",
  //   "donationInfo",
  // ]);
  const patient =
    await client.fetch(`*[_type=="patients" && slug.current == "${params.slug}"]{
    name,
    "image":image.asset->url,
    date,
    "slug":slug.current,
    description,
    content,
    information,
    priority,
    treatmentComplete,
    amountRequired,
    donationInfo
  }`);
  const content = await markdownToHtml(patient[0].information || "");

  return {
    props: {
      patient: {
        ...patient[0],
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const patients = await client.fetch(
    `*[_type=="patients"]{"slug":slug.current}`
  );

  return {
    paths: patients.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
