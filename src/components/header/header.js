/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Flex, Button } from "theme-ui";
import { keyframes } from "@emotion/react";
import Logo from "components/logo";
import MobileDrawer from "./mobile-drawer";
import menuItems from "./header.data";
// import LocaleSwitch from "./locale-switch";
import { Fragment } from "react";
import { Link } from "components/link";
import ScrollLink from "./ScrollLink";

export default function Header({ className, onlyLogo }) {
  return (
    <header sx={styles.header} className={className} id="header">
      <Container sx={styles.container}>
        {/* <Logo src={"/assets/logo.svg"} /> */}
        <Link path="/">
              <img
                src={"/assets/logoWhite.svg"}
                alt="logo"
                sx={{
                  maxWidth: "100%",
                }}
              />
            </Link>

        <Fragment>
          <Flex as="nav" sx={styles.nav}>
            {menuItems.map((menuItem, i) =>
              menuItem.path === "contact" ? (
                <ScrollLink
                  key={i}
                  path={menuItem.path}
                  label={menuItem.label}
                  i={i}
                />
              ) : (
                <Link
                  path={menuItem.path}
                  key={i}
                  label={menuItem.label}
                  variant={"footer"}
                />
              )
            )}
          </Flex>

          {/* Locale Switch Desktop */}
          {/* {pageContext.locales && (
              <div>
                <LocaleSwitch pageContext={pageContext} />
              </div>
            )} */}

          <a
            target="_blank"
            href={"https://app.kido-es.kidodynamics.com"}
            rel="noopener noreferrer"
          >
            {/* <Button
              className="donate__btn"
              variant="secondary"
              aria-label="Get started"
            >
              Get Started
            </Button> */}
            <Button variant="secondaryWhite">Get Started</Button>
          </a>
          <MobileDrawer />
        </Fragment>
      </Container>
    </header>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: "text",
    fontWeight: "body",
    py: 4,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.4s ease",
    animation: `${positionAnim} 0.4s ease`,
    ".donate__btn": {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0],
    },
    "&.sticky": {
      position: "fixed",
      backgroundColor: "background",
      color: "#000000",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      py: 3,
      "nev > a": {
        color: "text",
      },
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nav: {
    mx: "auto",
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block",
    },
    a: {
      color: 'white',
      fontSize: 2,
      fontWeight: "body",
      px: 5,
      cursor: "pointer",
      lineHeight: "1.2",
      transition: "all 0.15s",
      "&:hover": {
        color: "#96a5b2",
      },
      "&.active": {
        color: "#96a5b2",
      },
    },
  },
};
