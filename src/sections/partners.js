/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Text } from "theme-ui";
import { Container, Grid } from "theme-ui";

export default function Partners() {
  return (
    <section id="partners" sx={{ mt: 4, mb: 8 }}>
      <Container>
        <Text as="p" sx={{ ...styles.subTitle, color: 'primary' }}>
        Trusted by Innovative companies
        </Text>
        <Grid sx={styles.grid}>
          <p sx={{ mx: 'auto' }}>CLARO BRASIL</p>
          <p sx={{ mx: 'auto' }}>CLARO CHILE</p>
          <p sx={{ mx: 'auto' }}>ALTICE</p>
          <p sx={{ mx: 'auto' }}>OOREDOO</p>
          <p sx={{ mx: 'auto' }}>ORANGE</p>
          <p sx={{ mx: 'auto' }}>DIGI</p>
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

  subTitle: {
    fontSize: [0, null, 1],
    color: "primary",
    textTransform: "uppercase",
    fontWeight: "700",
    mb: [2, 3],
    lineHeight: 1.5,
    letterSpacing: ["1.5px", null, "2px"],
    textAlign: 'center'
  },
};
