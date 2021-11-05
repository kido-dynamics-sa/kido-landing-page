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
    imgSrc: Smart,
    altText: "Smart Decisions",
    title: "Smart Decisions",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque duis pulvinar vel odio tortor id vestibulum ac sodales.",
  },
  {
    id: 2,
    imgSrc: Secure,
    altText: "Smart Destinations",
    title: "Secure Destinations",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque duis pulvinar vel odio tortor id vestibulum ac sodales.",
  },
];

export default function CoreFeature({ data }) {
  const { ref, inView } = useInView({
    threshold: 0.25,
  });

  return (
    <section ref={ref} sx={{ variant: "section.coreFeature" }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            // description={data.description}
            // btnName={data.btnName}
            //   btnURL={data.btnURL}
            color="#1CC8EE"
            shadow="rgb(28 200 238 / 57%) 0px 9px 20px -5px"
            shadowHover="rgb(28 200 238 / 57%) 0px 9px 40px -5px"
          />
          <Grid sx={styles.grid}>
            {features.map((feature) => (
              <Box sx={styles.card} key={feature.id}>
                <div sx={styles.icon}>
                  <Image src={feature.imgSrc} alt={feature.altText} />
                </div>
                <Box sx={styles.wrapper}>
                  <Heading sx={styles.wrapper.title}>{feature.title}</Heading>
                  <Text sx={styles.wrapper.subTitle}>{feature.text}</Text>
                </Box>
              </Box>
            ))}
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
    pb: [0, 7, 0, null, 7],
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
    bottom: "-45%",
    width: "800px",
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
