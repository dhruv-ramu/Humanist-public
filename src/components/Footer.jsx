import {
  Flex,
  Image,
  Text,
  Link as StyledLink,
  useTheme,
} from "@aws-amplify/ui-react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "../providers/Theme";

export default function Footer() {
  const router = useRouter();
  const { colorMode } = useContext(ThemeContext);
  const { tokens } = useTheme();

  return (
    <>
      <Flex
        as="footer"
        direction="column"
        alignItems="center"
        padding="2rem 4rem"
        gap="2rem"
        backgroundColor={tokens.colors.background.tertiary}
      >
        {colorMode === "dark" ? (
          <Image
            src="/logo-white.png"
            alt="Humanist"
            width="12rem"
            height="5rem"
            style={{ filter: "drop-shadow(0px 0px 0px #fff)" }}
          />
        ) : (
          <Image
            src="/logo.png"
            alt="Humanist"
            width="12rem"
            height="5rem"
            style={{ filter: "drop-shadow(0px 0px 0px #fff)" }}
          />
        )}
        <Flex
          direction="row"
          flex={2}
          gap="1rem"
          wrap={"wrap"}
          justifyContent="center"
          alignItems={"center"}
        >
          <Link href={`${router.pathname === "/" ? "" : "/"}#our-team`}>
            <StyledLink fontSize="medium" color={tokens.colors.font.secondary}>
              Our Team
            </StyledLink>
          </Link>
          <Link href={`${router.pathname === "/" ? "" : "/"}#contact`}>
            <StyledLink fontSize="medium" color={tokens.colors.font.secondary}>
              Contact
            </StyledLink>
          </Link>
          <Link href="/patients">
            <StyledLink fontSize="medium" color={tokens.colors.font.secondary}>
              Funding Requests
            </StyledLink>
          </Link>
          <Link href={router.pathname==="/"?"#what-we-do":"/#what-we-do"}>
            <StyledLink fontSize="medium" color={tokens.colors.font.secondary}>
              What We Do
            </StyledLink>
          </Link>
          {/* <Link href="/documents/Humanist_Form_MGT_7_2022.pdf">
            <StyledLink fontSize="medium" color={tokens.colors.font.secondary}>
              Company Declaration
            </StyledLink>
          </Link> */}
        </Flex>
        <Text color={tokens.colors.font.tertiary} textAlign="center">
          &copy; {new Date().getFullYear()} All Rights Reserved. Humanist
        </Text>
      </Flex>
    </>
  );
}
