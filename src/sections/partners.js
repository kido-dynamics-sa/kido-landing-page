/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Text } from "theme-ui";
import { Container, Grid } from "theme-ui";

export default function Partners() {
  return (
    <section id="partners" sx={{ mt: 7, mb: 8 }}>
      <Container>
        <Text as="p" sx={{ ...styles.subTitle, color: "primary" }}>
          Trusted by Innovative companies
        </Text>
        <Grid sx={styles.grid}>
          <div sx={{ ...styles.imageWrapper, px: 7 }}>
            <img
              alt={"ORANGE LOGO"}
              src={"/assets/partners/orange.svg"}
              sx={{ maxWidth: "100%" }}
            />
          </div>
          <div sx={{ ...styles.imageWrapper, px: "44px" }}>
            <img
              alt={"ALTICE LOGO"}
              src={"/assets/partners/altice.svg"}
              sx={{ maxWidth: "100%" }}
            />
          </div>
          <div sx={styles.imageWrapper}>
            <img
              alt={"claro LOGO"}
              src={"/assets/partners/claro.svg"}
              sx={{ maxWidth: "100%" }}
            />
          </div>
          <div sx={{...styles.imageWrapper, px: "28px"}}>
            <img
              alt={"OOREDOO LOGO"}
              src={"/assets/partners/ooredoo.svg"}
              sx={{ maxWidth: "100%" }}
            />
          </div>
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
      "repeat(4,1fr)",
    ],
  },
  imageWrapper: {
    position: "relative",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "200px",
    height: ["150px", "150px", "150px", "250px", "250px"],
    justifyContent: "center",
    my: [1, 1, 1, 1, 2],
    // padding: "20px 15px",
    mx: "auto",
  },

  subTitle: {
    fontSize: [0, null, 1],
    color: "primary",
    textTransform: "uppercase",
    fontWeight: "700",
    mb: [2, 3],
    lineHeight: 1.5,
    letterSpacing: ["1.5px", null, "2px"],
    textAlign: "center",
  },
};
