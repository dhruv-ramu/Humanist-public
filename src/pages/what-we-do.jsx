import { useTheme } from "@aws-amplify/ui-react";
import { Heading } from "@aws-amplify/ui-react";
import { Text } from "@aws-amplify/ui-react";
import { Flex } from "@aws-amplify/ui-react";
import { View } from "@aws-amplify/ui-react";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from 'next/head'

export default function WhatWeDo() {
  const [viewNavbar, setViewNavbar] = useState(false);
  const { tokens } = useTheme();

  return (
    <>
      <View
        as="div"
        position="relative"
        backgroundColor={tokens.colors.background.secondary}
      >
        <Navbar
          homepage={false}
          viewNavbar={viewNavbar}
          setViewNavbar={setViewNavbar}
        />

        <Heading
          level={1}
          textAlign="center"
          color={tokens.colors.font.primary}
          fontWeight="bold"
          paddingTop="3rem"
        >
          Humanist Statistics
        </Heading>
        <Flex
          flex={1}
          alignItems="center"
          justifyContent={"center"}
          color={tokens.colors.font.primary}
          marginTop="relative.large"
        >
          <ul>
            <li>
              {" "}
              Supported more than 120+ cancer patients in the past four years
            </li>
            <li>
              {" "}
              Humanist has provided for more than 2.5 Crores INR out of 4.5
              Crores, facilitating 75+ surgeries, administration of 750+
              radiotherapy fractions, and 400+ chemotherapy cycles.{" "}
            </li>
          </ul>
        </Flex>
        <Heading
          level={1}
          textAlign="center"
          color={tokens.colors.font.primary}
          fontWeight="bold"
          paddingTop="3rem"
        >
          Humanist&apos;s Initiatives
        </Heading>

        <Flex
          flex={1}
          alignItems="center"
          justifyContent={"center"}
          color={tokens.colors.font.primary}
          marginTop="relative.large"
          marginBottom="3rem"
        >
          <ul>
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
        <Footer />
      </View>
    </>
  );
}
