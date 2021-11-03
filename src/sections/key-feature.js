/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Tourism from "assets/key-feature/tourism.svg";
import Mobility from "assets/key-feature/mobility.svg";
import Retail from "assets/key-feature/retail.svg";
import Support from "assets/key-feature/support.svg";


export default function KeyFeature({featureCardColumns, section}) {
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
        return Tourism;
      case "Mobility General Feature":
        return Mobility;
      case "Retail General Feature":
        return Retail;
      default:
        return Tourism;
    }
  };

  return (
    <section id="feature" sx={{ variant: "section.keyFeature" }}>
      <Container>
        <SectionHeader
          // slogan="What you can get"
          // title="Meet the features of our product"
          slogan={section.slogan}
          title={section.title}
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
      </Container>
    </section>
  );
}

const styles = {
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
