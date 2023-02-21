import {
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useTheme,
  View,
} from "@aws-amplify/ui-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Testimonial from "../components/Testimonial";
import Head from 'next/head'

export default function Testimonials() {
  const { tokens } = useTheme();

  return (
    <View backgroundColor={tokens.colors.background.secondary}>
      <Navbar />
      <Heading
        level={1}
        textAlign="center"
        color={tokens.colors.font.primary}
        fontWeight="bold"
        paddingTop="10rem"
      >
        Success Stories
      </Heading>
      <Grid
        templateColumns={{ base: "1fr", large: "1fr 1fr" }}
        gap="1rem"
        padding={{ base: "2rem 0rem", large: "2rem 4rem" }}
        color={tokens.colors.font.primary}
        marginBottom="1rem"
        marginLeft="auto"
        marginRight="auto"
      >
        {/* SECTION: ONE */}
        <Flex
          direction="column"
          padding="1.5rem 2rem"
          borderRadius={"1rem"}
          flex={1}
          style={{
            placeContent: "center",
          }}
        >
          <Text>
            Here is a photo of Prathap, a young boy that was treated for a skull
            tumour that was encroaching on the maxilla. Through Humanist&apos;s
            support and support from Cytecare Cancer Hospitals. He was treated
            successfully.
          </Text>
        </Flex>

        <Flex
          direction="column"
          padding="1.5rem 2rem"
          borderRadius={"1rem"}
          justifyContent="start"
          alignItems="center"
          flex={1}
        >
          <Image
            src="/images/1616473487059.jpg"
            alt=""
            // style={{ aspectRatio: 16 / 9 }}
            objectFit="cover"
            width="80%"
            height="80%"
            borderRadius={"1rem"}
          />
        </Flex>

        {/* SECTION: TWO */}

        <Flex
          direction="column"
          padding="1.5rem 2rem"
          borderRadius={"1rem"}
          justifyContent="center"
          alignItems="center"
          flex={1}
        >
          <embed
            src="/documents/Deccan%20Herald%20-%20Tejashree.pdf#zoom=100&scrollbar=0&toolbar=0&navpanes=0"
            type="application/pdf"
            width="100%"
            height="100%"
            style={{ borderRadius: "1rem" }}
          />
        </Flex>

        <Flex
          direction="column"
          padding="1.5rem 2rem"
          borderRadius={"1rem"}
          flex={1}
        >
          <Text>
            Report by Deccan Herald Regarding treatment of Tejashree, a five
            year old suffering from T cell Acute Lymphoblastic Leukaemia, an
            aggressive form of blood cancer. Her father was a pani puri vendor;
            she required Humanist&apos;s help. Humanist partnered with
            Vidyashilp Academy and Canadian International School and achieved
            the required amount through crowdfunding.
          </Text>
          <Image
            src="/images/Teja%201.jpg"
            alt=""
            objectFit="cover"
            width="100%"
            borderRadius={"1rem"}
          />
          <Image
            src="/images/Teja%202.jpg"
            alt=""
            objectFit="cover"
            width="100%"
            borderRadius={"1rem"}
          />
        </Flex>

        {/* SECTION: THREE */}
        <Flex
          direction="column"
          padding="1.5rem 2rem"
          borderRadius={"1rem"}
          flex={1}
        >
          <video
            src="/videos/Rohan.MP4"
            controls
            style={{ aspectRatio: 16 / 9, borderRadius: "1rem" }}
            width="100%"
          />
        </Flex>

        <Flex
          direction="column"
          padding="1.5rem 2rem"
          borderRadius={"1rem"}
          flex={1}
          style={{
            placeContent: "center",
          }}
        >
          <Text>
            Rohan, at the age of two, was diagnosed with B acute Lymphoblastic
            Leukemia. His family could not afford the expensive and long
            treatment (6 months of intensive phase and 2 years of maintenance
            therapy) suggested by Dr. Anand KC, who specializes in Paediatric
            Oncology. Despite a funding requirement of ~5 Lakh INR, the amount
            was raised through crowdfunding, and Rohan was saved.
          </Text>
        </Flex>

        <Flex
          direction="column"
          padding="1.5rem 2rem"
          borderRadius={"1rem"}
          flex={1}
          style={{
            placeContent: "center",
          }}
        >
          <Text>
            Subash, at the age of six, was found to have a spinal tumour after
            sufferring with back pain. He had an aggressive tumour of bone
            tissue: Non-Metastatic Ewing&apos;s Sarcoma that required treatment
            including both chemotherapy and radiotherapy lasting for ~10 months.
            The cost of the funding was 6 lakh rupees, his father (working in
            the army) could not afford the entirety of the cost. However,
            through Humanist&apos;s help, he is leading a normal life at the age
            of nine.
          </Text>
        </Flex>
        <Flex
          direction="column"
          padding="1.5rem 2rem"
          borderRadius={"1rem"}
          justifyContent="center"
          alignItems="center"
          flex={1}
        >
          <video
            src="/videos/Master%20Subash%20MRN%206078.mp4"
            controls
            style={{ aspectRatio: 16 / 9, borderRadius: "1rem" }}
            width="100%"
          />
        </Flex>
      </Grid>
      <Footer />
    </View>
  );
}
