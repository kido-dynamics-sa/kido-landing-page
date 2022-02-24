/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import TeamCard from "components/team-card";
import { FaLinkedin } from "react-icons/fa";

export default function TeamSection({ section, teamMembers }) {
  return (
    <section sx={{ my: 8 }}>
      <Container>
        <SectionHeader slogan={section.slogan} title={section.title} />
        <Grid sx={styles.grid}>
          {teamMembers
            .sort(function (a, b) {
              if (parseInt(a.id) > parseInt(b.id)) {
                return 1;
              }
              if (parseInt(a.id) < parseInt(b.id)) {
                return -1;
              }
              return 0;
            })
            .map((item) => (
              <TeamCard
                key={item.id}
                src={item.imgSrc}
                altText={item.altText}
                title={item.title}
                designation={item.designation}
                social={item.socialProfile}
              />
            ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ["35px 0px", null, 0, null, null, "35px 24px"],
    gridTemplateColumns: [
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
      null,
      "repeat(5,1fr)",
    ],
  },
};
