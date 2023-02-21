import {
  Button,
  Flex,
  Image,
  Link as StyledLink,
  SwitchField,
  useTheme,
} from "@aws-amplify/ui-react";
import Link from "next/link";
import Head from "next/head";
import { useContext, useState } from "react";
import { ThemeContext } from "../providers/Theme";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import dynamic from "next/dynamic";

const ToolTip = dynamic(() => import("react-tooltip"), {
  ssr: false,
});

export default function Navbar({ homepage, viewNavbar, setViewNavbar }) {
  const { colorMode, setColorMode } = useContext(ThemeContext);
  const [newViewNavbar, setNewViewNavbar] = useState(false);
  viewNavbar = viewNavbar ?? newViewNavbar;
  setViewNavbar = setViewNavbar ?? setNewViewNavbar;

  const { tokens } = useTheme();

  return (
    <>
      <Head>
  {/* Primary Meta Tags */}
  <title>Humanist Centre for Medicine</title>
  <meta name="title" content="Humanist Centre for Medicine" />
  <meta
    name="description"
    content="Humanist aims to bridge the funding gap for cancer patients who cannot fully afford treatment. It is a not-for-profit company. Every donation makes a difference in the lives of people who need support."
  />
  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://humanist.org.in" />
  <meta property="og:title" content="Humanist Centre for Medicine" />
  <meta
    property="og:description"
    content="Humanist aims to bridge the funding gap for cancer patients who cannot fully afford treatment. It is a not-for-profit company. Every donation makes a difference in the lives of people who need support."
  />
  <meta property="og:image" content="/logo.png" />
  {/* Twitter */}
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://humanist.org.in" />
  <meta property="twitter:title" content="Humanist Centre for Medicine" />
  <meta
    property="twitter:description"
    content="Humanist aims to bridge the funding gap for cancer patients who cannot fully afford treatment. It is a not-for-profit company. Every donation makes a difference in the lives of people who need support."
  />
  <meta property="twitter:image" content="/logo.png" />
</Head>
      <Flex
        direction={{ base: "column", large: "row" }}
        justifyContent="space-between"
        alignItems="center"
        padding={{ base: "1rem 2rem", large: "1rem 4rem" }}
        width="100%"
        position={"fixed"}
        style={{
          zIndex: 9999,
          backgroundColor: tokens.colors.background.secondary,
        }}
      >
        <div
          style={{
            marginRight: "auto",
          }}
          className="content-container"
        >
          <Link href="/">
            {colorMode === "dark" ? (
              <Image
                src="/logo-white.png"
                height="5rem"
                alt="Humanist logo"
                style={{ cursor: "pointer" }}
              />
            ) : (
              <Image
                src="/logo.png"
                height="5rem"
                alt="Humanist logo"
                style={{ cursor: "pointer" }}
              />
            )}
          </Link>

          <Button
            variation="none"
            display={{ base: "inline-flex", large: "none" }}
            onClick={() => setViewNavbar((prev) => !prev)}
          >
            <FaBars style={{ color: tokens.colors.font.primary }} />
          </Button>
        </div>

        <Flex
          direction={{ base: "row" }}
          display={{ base: "none", large: "flex" }}
          gap="1rem"
          width="100%"
          alignItems="center"
          justifyContent="center"
          flex={1}
        >
          {homepage ? (
            <a href="#our-team" style={{ textDecoration: "unset" }}>
              <StyledLink fontSize="large" fontWeight="medium">
                Our Team
              </StyledLink>
            </a>
          ) : (
            <Link href="/#our-team">
              <StyledLink fontSize="large" fontWeight="medium">
                Our Team
              </StyledLink>
            </Link>
          )}
                    {homepage ? (
            <a
              href="#what-we-do"
              style={{
                textDecoration: "unset",
              }}
            >
              <StyledLink fontSize="large" fontWeight="medium">
                What We Do
              </StyledLink>
            </a>
          ) : (
            <Link href="/#what-we-do">
              <StyledLink fontSize="large" fontWeight="medium">
                What We Do
              </StyledLink>
            </Link>
          )}
          <Link href="/testimonials">
            <StyledLink fontSize="large" fontWeight="medium">
              Success Stories
            </StyledLink>
          </Link>
          <Link href="/patients">
            <StyledLink fontSize="large" fontWeight="medium">
              Funding Requests
            </StyledLink>
          </Link>

        </Flex>

        <Flex
          direction="row"
          display={{ base: "none", large: "flex" }}
          alignItems="center"
          justifyContent="end"
          gap={"0.5rem"}
          color={tokens.colors.font.primary}
          // flex={1}
        >
          <ToolTip />
          <a
            href="tel:+91 97393 83877"
            style={{
              decoration: "none",
              display: "flex",
              placeContent: "center",
            }}
            data-tip="+91 97393 83877"
          >
            <IoMdCall
              style={{ marginRight: "0.5rem" }}
              color={tokens.colors.font.primary}
            />
          </a>
          <FaSun />
          <SwitchField
            isDisabled={false}
            isChecked={colorMode === "dark"}
            onChange={(e) => setColorMode(e.target.checked ? "dark" : "light")}
            isLabelHidden={true}
            style={{ display: "flex" }}
          />
          <FaMoon />
        </Flex>
        {viewNavbar ? (
          <Flex
            direction="column"
            display={{ base: "flex", large: "none" }}
            width="100%"
          >
            {homepage ? (
              <a href="#our-team" style={{ textDecoration: "unset" }}>
                <StyledLink fontSize="large" fontWeight="medium">
                  Our Team
                </StyledLink>
              </a>
            ) : (
              <Link href="/#our-team">
                <StyledLink fontSize="large" fontWeight="medium">
                  Our Team
                </StyledLink>
              </Link>
            )}
            <Link href="/patients">
              <StyledLink fontSize="large" fontWeight="medium">
                Funding Requests
              </StyledLink>
            </Link>
            <Link href="/testimonials">
              <StyledLink fontSize="large" fontWeight="medium">
                Success Stories
              </StyledLink>
            </Link>
            <Link href="/what-we-do">
              <StyledLink fontSize="large" fontWeight="medium">
                What We Do
              </StyledLink>
            </Link>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "auto",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                color: tokens.colors.font.primary,
              }}
            >
              <a
                href="tel:+91 xxx"
                style={{
                  decoration: "none",
                  display: "flex",
                  placeContent: "center",
                }}
              >
                <IoMdCall
                  style={{ marginRight: "0.5rem" }}
                  color={tokens.colors.font.primary}
                />
              </a>
              <FaSun />
              <SwitchField
                isDisabled={false}
                isChecked={colorMode === "dark"}
                onChange={(e) =>
                  setColorMode(e.target.checked ? "dark" : "light")
                }
                isLabelHidden={true}
                style={{ display: "flex" }}
              />
              <FaMoon />
            </div>
          </Flex>
        ) : null}
      </Flex>
    </>
  );
}
