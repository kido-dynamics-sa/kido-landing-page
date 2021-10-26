/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Image } from "theme-ui";
import SectionHeader from "components/section-header";
import Map from "assets/map.png";


export default function InternationalPresence() {
  return (
    <section sx={{ variant: "section.feature" }}>
      <Container sx={styles.container}>
        <SectionHeader
          slogan="where to find us"
          title="We have support for more than 10 countries ​​around the world"
        />
        <Box>
          <Image src={Map} alt="worlwilde presence map"/>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  container: {
    mt: 8
  },
};
