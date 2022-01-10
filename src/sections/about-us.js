/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Text } from "theme-ui";

import TextFeature from "components/text-feature";
import TeamSection from "./team-section";
import CompanyCulture from "./company-culture";
import Partners from "./partners";
import WhoWeAre from "./who-we-are";
// import Hiring from "../../../public/assets/hiring.png";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

let AnimatedBox = motion.custom(Box);

const animationProps = {
  initial: { opacity: 0, scale: 0.75 },
  transition: { ease: "easeOut", duration: 0.75 },
};

export default function AboutUs({ aboutUs, companyCulture, teamSection }) {
  const { ref, inView } = useInView({
    threshold: 0.25,
  });
  return (
    <section ref={ref} id="careers" sx={styles.banner}>
      <Container>
        <AnimatedBox
          {...animationProps}
          sx={styles.contentBox}
          animate={inView ? { opacity: 1, scale: 1 } : ""}
        >
          <TextFeature
            subTitle={aboutUs.headerSubtitle}
            title={aboutUs.headerTitle}
            description={aboutUs.headerDescription}
            btnName={aboutUs.headerButtonText}
            btnURL={aboutUs.headerButtonURL}
            maxWidth
          />
        </AnimatedBox>

        <WhoWeAre data={aboutUs} />

        <CompanyCulture data={companyCulture} />
        
        <TeamSection section={teamSection} />

        <Partners />

      </Container>
    </section>
  );
}

const styles = {
  banner: {
    display: "grid",
    placeItems: "center center",
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
