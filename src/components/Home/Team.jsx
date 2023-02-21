import { Grid, Text, useTheme, View } from "@aws-amplify/ui-react";
import TeamMember from "../TeamMember";

export default function Team() {
  const { tokens } = useTheme();

  return (
    <View
      as="div"
      paddingTop="3rem"
      paddingBottom="3rem"
      id="team"
      backgroundColor={tokens.colors.background.secondary}
    >
      <Text
        as="h2"
        fontWeight="bold"
        id="our-team"
        fontSize="2rem"
        textAlign="center"
      >
        Meet Our Team
      </Text>

      <Grid
        templateColumns={{ base: "1fr", large: "1fr 1fr 1fr" }}
        gap="1rem 2rem"
        padding="0 2rem"
        marginTop="2rem"
        marginBottom="1rem"
        marginLeft="auto"
        marginRight="auto"
        maxWidth={"80vw"}
      >
        <TeamMember
          name={"Dr. Jogin Desai"}
          position="Founder and CEO, Eyestem Research"
          about="Dr. Desai brings more than 15 years of experience in growing and nurturing businesses to his newest venture. Prior to Eyestem, he was part of the global leadership team at Quintiles and he also was the CEO of Cenduit."
          picture="/images/team/jogin-desai.png"
          linkedin="https://www.linkedin.com/in/jogin-desai/"
        />
        <TeamMember
          name={"Anand Anandkumar PhD"}
          position="Co-founder and CEO, Bugworks Research"
          about="Anand is the Co-founder and CEO of Bugworks, a global biotech startup, working on tackling the massive problem posed by superbugs."
          picture="/images/team/anand-anandkumar.png"
          linkedin="https://www.linkedin.com/in/anand-anandkumar-031825/"
        />
        <TeamMember
          name={"Ms Shalini Sethi"}
          position="Chairperson, Sethi Foundation"
          about="Shalini Sethi is the Chairperson of the Sethi Foundation which is focused on the theme of Technology Enabled Philanthropy. Enabling active independent lives by enabling technology and infrastructure for the urban poor is her passion."
          picture="/images/team/shalini-sethi.png"
          linkedin="https://www.linkedin.com/in/shalini-sethi-3b27644/"
        />
      </Grid>
    </View>
  );
}
