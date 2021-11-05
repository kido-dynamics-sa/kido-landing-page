import React, {useEffect} from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import {
  jsx,
  Container,
  Box,
} from "theme-ui";
import TextFeature from "components/text-feature";

import Image from "next/image";

import ServiceThumb from "../../public/assets/retailApp.png";
import shapePattern from "../../public/assets/shapeRetailPattern.png";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

let AnimatedBox = motion.custom(Box);

const animationProps = {
  initial: { opacity: 0, scale: 0.75 },
  transition: { ease: "easeOut", duration: .75 },
};

export default function ServiceSection({ data }) {

  const { ref, inView } = useInView({
    threshold: 0.25
  })
  
  return (
    <section ref={ref} sx={{ variant: "section.services" }}>
      <Container sx={styles.containerBox}>
        <AnimatedBox {...animationProps} sx={styles.thumbnail} animate={ inView ? { opacity: 1, scale: 1 } : ''}>
          <Image src={ServiceThumb} alt="Thumbnail" />
          <Box sx={styles.shapeBox}>
            <Image src={shapePattern} alt="Shape" />
          </Box>
        </AnimatedBox>

        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
            color="#00BA88"
            shadow="rgb(13 217 164 / 57%) 0px 9px 20px -5px"
            shadowHover="rgb(13 217 164 / 57%) 0px 9px 40px -5px"
          />

        </Box>
      </Container>
    </section>
  );
}

const styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: "relative",
  },
  containerBox: {
    display: "flex",
    alignItems: ["flex-start", null, null, "center"],
    justifyContent: ["flex-start", null, null, "space-between"],
    flexDirection: ["column", null, null, "row"],
    pb: [0, null, null, null, null, 7],
  },
  thumbnail: {
    mr: ["auto", null, null, 6, 60, 85],
    order: [2, null, null, 0],
    ml: ["auto", null, null, 0],
    display: "inline-flex",
    position: "relative",
    "> img": {
      position: "relative",
      zIndex: 1,
      height: [310, "auto"],
      borderRadius: "12px",
    },
  },
  shapeBox: {
    position: "absolute",
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ["none", null, null, null, null, "inline-block"],
  },
  contentBox: {
    width: ["100%", null, null, 315, 390, 450, null, 500],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ["center", null, null, "left"],
  },

};
