import { Grid, Image, useTheme } from "@aws-amplify/ui-react";

export default function HeroBackground({ mobileNavbar }) {
  const { tokens } = useTheme();

  return (
    <Grid
      templateColumns="1fr 1fr 1fr"
      height={`calc(100vh + ${mobileNavbar ? "12.75rem" : "0px"})`}
      maxHeight={`calc(100vh + ${mobileNavbar ? "12.75rem" : "0px"})`}
      paddingTop={mobileNavbar && "12.75rem"}
    >
      <Image
        src="/images/1.jpeg"
        alt=""
        objectFit="cover"
        objectPosition="center"
        height="100%"
        maxHeight={`calc(100vh + ${mobileNavbar ? "12.75rem" : "0px"})`}
        width="100%"
      />
      <Image
        src="/images/2.jpeg"
        alt=""
        objectFit="cover"
        objectPosition="center"
        height="100%"
        maxHeight={`calc(100vh + ${mobileNavbar ? "12.75rem" : "0px"})`}
        width="100%"
      />
      <Image
        src="/images/3.jpeg"
        alt=""
        objectFit="cover"
        objectPosition="center"
        height="100%"
        maxHeight={`calc(100vh + ${mobileNavbar ? "12.75rem" : "0px"})`}
        width="100%"
      />
      <div
        style={{
          backgroundColor: tokens.colors.background.secondary,
          width: "100%",
          height: "100vh",
          position: "absolute",
          zIndex: 10,
          opacity: 0.7,
        }}
      />
    </Grid>
  );
}
