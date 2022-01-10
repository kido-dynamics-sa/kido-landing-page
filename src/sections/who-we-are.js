/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box, Grid, Text, Heading } from "theme-ui";

import Image from "next/image";
import TextFeature from "components/text-feature";

import ServiceThumb from "../../public/assets/mobilityApp.png";
import shapePattern from "../../public/assets/shapeMobilityPattern.png";
import Smart from "../../public/assets/services/smart.svg";
import Secure from "../../public/assets/services/secure.svg";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

let AnimatedBox = motion.custom(Box);

const animationProps = {
  initial: { opacity: 0, scale: 0.75 },
  transition: { ease: "easeOut", duration: 0.75 },
};

const features = [
  {
    id: 1,
    imgSrc: Secure,
    altText: "Smart Decisions",
    title: "Smart Decisions",
    text: "Companies,   governments   and   public   institutions   can now   make   faster,   smarter   and   better-informed decisions.",
  },
  {
    id: 2,
    imgSrc: Smart,
    altText: "User-friendly Platform",
    title: "User-friendly Platform",
    text: "Our web-based SaaS and API are  World reference in advanced mobility analytics, offering a scalable and easy to use platform to meet the needs of each client segment",
  },
];

export default function WhoWeAre({ data }) {
  const { ref, inView } = useInView({
    threshold: 0.25,
  });

  return (
    <section ref={ref} sx={{ variant: "section.coreFeature", pt: 10 }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.featureSubtitle}
            title={data.featureTitle}
          />
          <Grid sx={styles.grid}>
              <Box sx={styles.card}>
                <div sx={styles.icon}>
                  <Image src={Secure} alt={data.subfield1Title} />
                </div>
                <Box sx={styles.wrapper}>
                  <Heading sx={styles.wrapper.title}>{data.subfield1Title}</Heading>
                  <Text sx={styles.wrapper.subTitle}>{data.subfield1Description}</Text>
                </Box>
              </Box>
              <Box sx={styles.card}>
                <div sx={styles.icon}>
                  <Image src={Smart} alt={data.subfield2Title} />
                </div>
                <Box sx={styles.wrapper}>
                  <Heading sx={styles.wrapper.title}>{data.subfield2Title}</Heading>
                  <Text sx={styles.wrapper.subTitle}>{data.subfield2Description}</Text>
                </Box>
              </Box>
          </Grid>
        </Box>{" "}
        <AnimatedBox
          {...animationProps}
          sx={styles.thumbnail}
          animate={inView ? { opacity: 1, scale: 1 } : ""}
        >
          <Image src={ServiceThumb} alt="Thumbnail" />
          <Box sx={styles.shapeBox}>
            <Image src={shapePattern} alt="Shape" />
          </Box>
        </AnimatedBox>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: ["wrap", null, null, "nowrap"],
    pb: [0, 3, 0, null, 3],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, "30px", 0],
    textAlign: ["center", null, null, "left"],
    width: ["100%", "80%", null, 340, 400, 430, null, 485],
    pb: ["50px", "60px", null, 0],
    mx: ["auto", null, null, 0],
    ".description": {
      pr: [0, null, 6, 7, 6],
    },
  },

  grid: {
    pr: [2, 0, null, null, 6, "70px"],
    pl: [2, 0],
    pt: [2, null, null, null, 3],
    mx: "auto",
    width: ["100%", 370, 420, "100%"],
    gridGap: ["35px 0", null, null, null, "50px 0"],
    gridTemplateColumns: ["repeat(1,1fr)"],
  },
  card: {
    display: "flex",
    alignItems: "flex-start",
    transition: "all 0.3s",
  },

  icon: {
    width: ["45px", null, null, null, "55px"],
    height: "auto",
    flexShrink: 0,
    mr: [3, null, null, null, 4],
  },

  thumbnail: {
    display: "inline-flex",
    position: "relative",
    mr: "auto",
    ml: ["auto", null, null, null, 7],
    "> img": {
      position: "relative",
      zIndex: 1,
      height: [310, "auto"],
    },
  },
  shapeBox: {
    position: "absolute",
    bottom: "-25%",
    right: 0,
    width: "500px",
    zIndex: -1,
    display: ["none", null, null, null, null, "inline-block"],
  },

  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    mt: "-5px",
    title: {
      fontSize: 3,
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3],
    },

    subTitle: {
      fontSize: [1, null, null, "14px", 1],
      fontWeight: 400,
      lineHeight: 1.9,
    },
  },
};
