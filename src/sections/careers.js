/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Text } from "theme-ui";

import TextFeature from "components/text-feature";

import Link from "next/link";

import { motion } from "framer-motion";

import CompanyCulture from "./company-culture";

let AnimatedBox = motion.custom(Box);

const animationProps = {
  initial: { opacity: 0, scale: 0.75 },
  transition: { ease: "easeOut", duration: 0.75 },
};

export default function Careers({ companyCulture }) {
  return (
    <section id="careers" sx={styles.banner}>
      <Container>
        <AnimatedBox
          {...animationProps}
          sx={styles.contentBox}
          animate={{ opacity: 1, scale: 1 }}
        >
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
        </AnimatedBox>
        <AnimatedBox
          {...animationProps}
          sx={{ mx: 6, my: 8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <img src={"/assets/team_countries.png"} alt="worlwilde presence map" sx={{maxWidth: '100%'}}/>
        </AnimatedBox>

        <CompanyCulture data={companyCulture} />
        <Box sx={{ position: "relative" }}>
          <div
            sx={{
              background: "linear-gradient(180deg,#f2f4ff,#fff)",
              height: "100%",
              width: "120%",
              position: "absolute",
              top: 0,
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
                mt: 6,
                mb: 10,
                px: 5,
                display: "grid",
                gridTemplateColumns: [
                  "repeat(1, 1fr)",
                  "repeat(1, 1fr)",
                  "repeat(1, 1fr)",
                  "repeat(2, 1fr)",
                ],
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
      color: "primary",
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
