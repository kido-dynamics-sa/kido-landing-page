/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx } from "theme-ui";
import { Container, Box, Grid } from "theme-ui";

import TextFeature from "components/text-feature";
import FeatureCardColumn from "components/feature-card-column.js";
import SectionHeader from "../components/section-header";
import { motion } from "framer-motion";
import Package from "../sections/package";

let AnimatedBox = motion.custom(Box);

const animationProps = {
  initial: { opacity: 0, scale: 0.75 },
  transition: { ease: "easeOut", duration: 0.75 },
};

export default function DigitalKit({ featureCardColumns }) {
  const sortedFeatures = [
    "Tourism General Feature",
    "Mobility General Feature",
    "Retail General Feature",
  ];

  const sortFeatures = (features) => {
    return sortedFeatures.map((labelBanner) => {
      const newBanner = features.find((a) => a.altText === labelBanner);
      return { ...newBanner };
    });
  };

  const getFeatureImage = (altText) => {
    switch (altText) {
      case "Tourism General Feature":
        return "/assets/key-feature/tourism.svg";
      case "Mobility General Feature":
        return "/assets/key-feature/mobility.svg";
      case "Retail General Feature":
        return "/assets/key-feature/retail.svg";
      default:
        return "/assets/key-feature/tourism.svg";
    }
  };

  return (
    <section id="careers" sx={styles.banner}>
      <Container
        sx={{
          width: "100%",
        }}
      >
        <AnimatedBox
          {...animationProps}
          sx={styles.contentBox}
          animate={{ opacity: 1, scale: 1 }}
        >
          <TextFeature
            subTitle={"Digital Kit"}
            title={"Business Intelligence and Analytics"}
            description={"Category 5"}
            maxWidth
          />
        </AnimatedBox>
        <Box
          sx={{
            maxWidth: "100%",
            mb: 10,
          }}
        >
          <img
            src="https://res.cloudinary.com/kido-dynamics/image/upload/v1646060573/Logo-digitalizadores_hl2wcq.png"
            alt={"Logos Digital Kit"}
            sx={{
              maxWidth: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box
          sx={{
            mt: 10,
            pt: 8,
            mb: 8,
          }}
        >
          <SectionHeader
            slogan="Intelligence Digital Platform"
            title="Kido Dynamics Platform making your business smarter"
          />

          <Grid sx={styles.grid}>
            {sortFeatures(featureCardColumns).map((item) => (
              <FeatureCardColumn
                key={item.id}
                src={getFeatureImage(item.altText)}
                alt={item.altText}
                title={item.title}
                text={item.text}
              />
            ))}
          </Grid>
        </Box>
        <Package />
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
    mb: 6,
  },

  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
  },
};
