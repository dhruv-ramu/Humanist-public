import {
  Badge,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useTheme,
  View,
} from "@aws-amplify/ui-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { client } from "../../lib/sanity";
import { paginate } from "../../utils/helpers";

// import { getAllPatients } from "../../utils/patients";

export default function Patients({ patients:allPatients }) {
  const { tokens } = useTheme();
  const patients = paginate(allPatients, 6);
  const [currentPage, setCurrentPage] = useState(0);
  const [viewedPatients, setViewedPatients] = useState([]);

  useEffect(() => {
    setViewedPatients(patients[0]);
  }, []);

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
        Patients That Need Your Help
      </Heading>

      <Grid
        templateColumns={{
          base: "1fr",
          medium: "1fr 1fr",
          large: "1fr 1fr 1fr",
        }}
        padding="2rem 4rem"
        gap="2rem"
        marginLeft="auto"
        marginRight="auto"
        style={{ justifyItems: "center" }}
        maxWidth={{ base: "100vw", large: "80vw" }}
      >
        {viewedPatients.map((patient) => (
          <Link href={`/patients/${patient.slug}`} key={patient.slug}>
            <Card
              variation="elevated"
              padding="1.5rem 1.5rem"
              borderRadius={"1rem"}
              style={{ cursor: "pointer" }}
              maxWidth="22.5rem"
            >
              <Flex direction="column" alignItems="flex-start">
                <Image
                  src={patient.image}
                  borderRadius="1rem"
                  alt={patient.name}
                  height="100%"
                  width="100%"
                  style={{ aspectRatio: 1 }}
                  objectFit="cover"
                />
                <Flex
                  direction="column"
                  gap={"0.5rem"}
                  alignItems="center"
                  textAlign="center"
                >
                  <Flex
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    width="100%"
                  >
                    <Text as="span" fontSize="1.2rem" fontWeight="semibold">
                      {patient.name}
                    </Text>
                    {patient.priority ? (
                      <Badge variation="error">Priority</Badge>
                    ) : null}
                    {patient.treatmentComplete ? (
                      <Badge variation="success">Treatment Complete</Badge>
                    ) : null}
                  </Flex>
                  <Text
                    as="span"
                    opacity={0.9}
                    fontSize="0.9rem"
                    fontWeight="medium"
                  >
                    Amount Required: ₹{patient.amountRequired}
                  </Text>
                  <Text
                    as="span"
                    opacity={0.9}
                    fontSize="0.9rem"
                    fontWeight="medium"
                  >
                    {patient.description}
                  </Text>
                </Flex>
              </Flex>
            </Card>
          </Link>
        ))}
      </Grid>

      {currentPage === patients.length - 1 ? null : (
        <Flex
          alignItems="center"
          justifyContent="center"
          width="100%"
          marginBottom="2rem"
        >
          <Button
            variation="link"
            onClick={() => {
              setCurrentPage((prev) => {
                setViewedPatients((prevP) => [...prevP, ...patients[prev + 1]]);
                return prev + 1;
              });
            }}
          >
            View More
          </Button>
        </Flex>
      )}

      <Footer />
    </View>
  );
}

export async function getStaticProps() {
  const patients = await client.fetch(`*[_type=="patients"] | order(priority asc) | order(treatmentComplete desc) {
    name,
    "image": image.asset->url,
    date,
    "slug":slug.current,
    description,
    amountRequired,
    priority,
    treatmentComplete
  }`)
  // const allPatients = getAllPatients([
  //   "name",
  //   "image",
  //   "date",
  //   "slug",
  //   "description",
  //   "amountRequired",
  //   "priority",
  //   "treatmentComplete",
  // ]);

  return {
    props: {
      patients,
    },
  };
}
