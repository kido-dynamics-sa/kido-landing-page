/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Text } from "theme-ui";
import TextFeature from "components/text-feature";
import Map from "../../../public/assets/team_countries.png";
import Image from "next/image";
import SectionHeader from "components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Check from "../../../public/assets/check.svg";
import Link from "next/link";
import Mobility from "../../../public/assets/key-feature/mobility.svg";
import Retail from "../../../public/assets/key-feature/retail.svg";
import Support from "../../../public/assets/key-feature/support.svg";

export default function KeyFeature({ section }) {
  return (
    <section id="feature" sx={styles.banner}>
      <Container>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={"careers"}
            title={"Come to work with us at Kido Dynamics"}
            description={
              "Kido Dynamics is dedicated to generating deep knowledge about the mobility behaviour of millions of people."
            }
            btnName={"See open positions"}
            btnURL={"#open-positions"}
            maxWidth
          />
        </Box>
        <Box sx={{ mx: 6, my: 8 }}>
          <Image src={Map} alt="worlwilde presence map" />
        </Box>
        <Box sx={{ position: "relative", mx: "auto", maxWidth: "1200px" }}>
          <Container
            sx={{
              mt: 10,
              mb: 10,
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              p: 7,
              gap: 6,
              backgroundColor: "#f6fafe",
              border: "1px solid #eaf2fa",
              borderRadius: "10px",
              width: "100%",
            }}
          >
            <Box>
              <Text
                as="p"
                sx={{ ...styles.wrapper.subTitle, color: "primary" }}
              >
                Our culture
              </Text>
              <Text as="p" className="description" sx={styles.description}>
                We are building a technology made to stay for years, defining
                future standards and solving challenging problems. Please note
                that what we do is not easy! We are goal-based, ambitious, and
                open to creative solutions.
              </Text>
            </Box>
            <Box>
              <Text
                as="p"
                sx={{ ...styles.wrapper.subTitle, color: "primary" }}
              >
                Our values
              </Text>
              <Box
                sx={{
                  textAlign: "left",
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 4,
                }}
              >
                <li sx={{ display: "flex", alignItems: "center" }}>
                  <Image src={Check} alt={"check_value"} />
                  <Text as="p" sx={{ ml: 3 }}>
                    Genuine Humility 👂
                  </Text>
                </li>
                <li sx={{ display: "flex", alignItems: "center" }}>
                  <Image src={Check} alt={"check_value"} />
                  <Text as="p" sx={{ ml: 3 }}>
                    Active Care 👐
                  </Text>
                </li>
                <li sx={{ display: "flex", alignItems: "center" }}>
                  <Image src={Check} alt={"check_value"} />
                  <Text as="p" sx={{ ml: 3 }}>
                    Rational Transparency 👁
                  </Text>
                </li>
                <li sx={{ display: "flex", alignItems: "center" }}>
                  <Image src={Check} alt={"check_value"} />
                  <Text as="p" sx={{ ml: 3 }}>
                    Proactive Responsability 🤝
                  </Text>
                </li>
                <li sx={{ display: "flex", alignItems: "center" }}>
                  <Image src={Check} alt={"check_value"} />
                  <Text as="p" sx={{ ml: 3 }}>
                    Controlled Ambition 🚀
                  </Text>
                </li>
              </Box>
            </Box>
          </Container>
        </Box>
        <Box sx={{ position: "relative" }}>
          <div
            sx={{
              background: "radial-gradient(circle,#f2f4ff,#fff)",
              height: "100%",
              width: "120%",
              position: "absolute",
              top: '10%',
              left: "-10%",
              zIndex: -1,
            }}
          ></div>
          <div sx={{ pt: 4 }} id="open-positions">
            <Box sx={styles.contentBox}>
              <TextFeature
                subTitle={"join the team"}
                title={"Our open positions"}
                description={
                  "If you work remotely, are tired of repetitive tasks, love intellectual challenges and out-of-the-box approaches, combine individual with team work, want to contribute to the future and grow together with the company, this is your place."
                }
                maxWidth
              />
            </Box>
            <Box
              sx={{
                my: 6,
                px: 5,
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                gap: 2,
                maxWidth: "1080px",
              }}
            >
              <li
                key={"data-scientist-1"}
                sx={{
                  opacity: 1,
                  visibility: "inherit",
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <div
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    backgroundColor: "#fff",
                    maxWidth: "500px",
                    width: "100%",
                    cursor: "pointer",
                    "&:hover": {
                      div: {
                        background: "#ED2E7E",
                      },
                      p: {
                        color: "#fff",
                      },
                    },
                  }}
                >
                  <div sx={styles.itemBackground}></div>

                  <Link href="/open-positions/data-scientist-1">
                    <a sx={styles.itemText}>
                      <p sx={{ fontWeight: 600, fontSize: 3 }}>
                        Senior Data Scientist/Engineer
                      </p>
                      <p>
                        <span>Full-time</span>{" "}
                        <span>📍 Remote | Spain, Portugal or LATAM</span>
                      </p>
                    </a>
                  </Link>
                </div>
              </li>
            </Box>
          </div>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    display: "grid",
    placeItems: "center center",
    overflow: "hidden",
    pt: ["140px", "145px", "155px", "170px", "80px", null, "60px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 2],
    position: "relative",
    zIndex: 2,
  },

  contentBox: {
    mt: "15%",
    flexShrink: 0,
    px: [0, null, "30px", 0],
    width: ["100%", "80%", null, 340, 400, 430, null, 500],
    pb: ["50px", "60px", null, 0],
    mx: "auto",
    textAlign: "center",
    zIndex: 3,
  },

  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: -1,
    subTitle: {
      fontSize: [0, null, 1],
      color: "#ED2E7E",
      textTransform: "uppercase",
      fontWeight: "700",
      mb: [2, 3],
      lineHeight: 1.5,
      letterSpacing: ["1.5px", null, "2px"],
    },
    title: {
      fontSize: ["24px", null, "28px", "30px", "36px", "42px", null, "48px"],
      color: "heading_secondary",
      lineHeight: [1.3, null, null, null, 1.2],
      fontWeight: "700",
      letterSpacing: "-.5px",
      mb: 5,
    },
  },
  description: {
    fontSize: ["15px", 2, null, null, null, "17px", null, 3],
    fontWeight: 400,
    // lineHeight: [1.85, null, null, 2, null, 2],
    color: "text_secondary",
    mb: "30px",
  },
  itemBackground: {
    borderRadius: 3,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    boxShadow: "0 1px 4px rgba(26,26,67,.1)",
    border: "1px solid transparent",
    transition: "border .2s ease",
    boxSizing: "border-box",
    transition: "all .1s ease-in-out",
  },
  itemText: {
    color: "#5e709d",
    position: "relative",
    background: "transparent",
    cursor: "pointer",
    display: "inline-block",
    padding: "24px",
    border: "none",
    textDecoration: "none",
    outline: "none",
    width: "100%",
    boxsizing: "border-box",
    transform: "translateZ(1000px)",
    transition: "all .1s ease-in-out",
  },
};
