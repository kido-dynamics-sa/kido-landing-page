/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Text, Flex } from "theme-ui";
import { Link } from "components/link";
import data from "./footer.data";
import { Heading } from "@theme-ui/components";

export default function Footer({ footer }) {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Box sx={styles.footer.footerBottomArea}>
          <Flex sx={{ flexDirection: "column" }}>
            <Link path="/">
              <img
                src={"/assets/logoWhite.svg"}
                alt="logo"
                sx={{
                  maxWidth: "100%",
                }}
              />
            </Link>
            <Text sx={styles.footer.description}>{footer.description}</Text>
            <Text sx={styles.footer.copyright}>
              © {new Date().getFullYear()} Kido Dynamics. All rights reserved
            </Text>
          </Flex>

          <Flex sx={{ flexDirection: "column" }}>
            <Heading sx={{ color: "white", letterSpacing: "0.5px" }}>
              Services
            </Heading>
            <Box sx={styles.footer.menus}>
              <nav>
                {data.menuItem.map((item, i) => (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.path}
                    sx={styles.footer.link}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </Box>
          </Flex>

          <Flex sx={{ flexDirection: "column" }}>
            <Heading sx={{ color: "white", letterSpacing: "0.5px" }}>
              Company
            </Heading>
            <Box sx={styles.footer.menus}>
              <nav>
                {data.company.map((item, i) =>
                  item.label === "Privacy Policy" || item.label === "Terms" ? (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.path}
                      sx={styles.footer.link}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      path={item.path}
                      key={i}
                      label={item.label}
                      sx={styles.footer.link}
                    />
                  )
                )}
              </nav>
            </Box>
          </Flex>

          <Flex sx={{ flexDirection: "column" }}>
            <Heading sx={{ color: "white", letterSpacing: "0.5px" }}>
              Social Media
            </Heading>
            <Box sx={styles.footer.social}>
              {data.social.map((socialItem, i) => (
                <Box as="span" key={i} sx={styles.footer.social.icon}>
                  <Link to={socialItem.path}>{socialItem.icon}</Link>
                </Box>
              ))}
            </Box>
          </Flex>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    background: "rgb(226,72,124)",
    background:
      "linear-gradient(111deg, rgba(75,0,130,1) 0%, #700066 61%, #820046 100%)",
    color: "white",
    footerBottomArea: {
      borderTop: "1px solid",
      borderTopColor: "border_color",
      display: "flex",
      pt: [7, null, 8],
      pb: ["40px", null, "100px"],
      textAlign: ["center", "center", "center", "left", "left", "left"],
      flexDirection: ["column", "column", "column", "row", "row", "row"],
      justifyContent: "space-between",
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        // justifyContent: "center",
        // flexWrap: "wrap",
      },
    },
    description: {
      maxWidth: "385px",
      mt: [3, 4],
      mb: 2,
      fontWeight: 100,
      mx: "auto",
    },

    link: {
      fontSize: [1, "15px"],
      color: "white",
      fontWeight: "400",
      mb: 2,
      cursor: "pointer",
      transition: "all 0.35s",
      display: "block",
      textDecoration: "none",
      lineHeight: [1.5, null, 1.8],
      // px: [2, null, 4],
      ":hover": {
        color: "text",
      },
    },
    copyright: {
      mt: [3, 4],
      mb: 2,
      fontSize: [1, "15px"],
      width: "100%",
    },

    menuFooter: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },

    social: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      mt: [3, 4],
      mb: 2,

      icon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        borderRadius: "50%",
        fontSize: 16,
        mr: "16px",
        transition: "all 0.25s",
        cursor: "pointer",
        ":last-child": {
          mr: "0",
        },
        "&:hover": {
          color: "text",
        },
      },
    },
  },
};
