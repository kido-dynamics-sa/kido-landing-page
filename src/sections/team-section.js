/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import TeamCard from "components/team-card";
import { FaLinkedin } from "react-icons/fa";

const data = [
  {
    id: 1,
    imgSrc: "/assets/team/member-1.png",
    altText: "Ignacio Barrios",
    title: "Ignacio Barrios",
    designation: "CEO & Co-Founder",
    socialProfile: [
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: "/assets/team/member-2.png",
    altText: "Dr. Alberto Hernando",
    title: "Dr. Alberto Hernando",
    designation: "CTO & Co-Founder",
    socialProfile: [
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: "/assets/team/member-3.png",
    altText: "Bilal Khan",
    title: "Bilal Khan",
    designation: "VP Business Development",
    socialProfile: [
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: "/assets/team/member-4.png",
    altText: "Juan C. Sánchez",
    title: "Juan C. Sánchez",
    designation: "Spain Country Manager",
    socialProfile: [
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    id: 5,
    imgSrc: "/assets/team/member-5.png",
    altText: "Luis Viotti",
    title: "Luis Viotti",
    designation: "Brazil Country Manager",
    socialProfile: [
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    id: 6,
    imgSrc: "/assets/team/member-6.png",
    altText: "Carlos Roldan",
    title: "Carlos Roldan",
    designation: "Business Development US & LATAM",
    socialProfile: [
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    id: 7,
    imgSrc: "/assets/team/member-1.png",
    altText: "Antonio Andrade",
    title: "Antonio Andrade",
    designation: "Mobility Analyst",
    socialProfile: [
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    id: 8,
    imgSrc: "/assets/team/member-2.png",
    altText: "Dr. David Mateo",
    title: "Dr. David Mateo",
    designation: "Head of Product",
    socialProfile: [
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    id: 9,
    imgSrc: "/assets/team/member-3.png",
    altText: "Agustín Marrone",
    title: "Agustín Marrone",
    designation: "Senior Software Developer",
    socialProfile: [
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    id: 10,
    imgSrc: "/assets/team/member-4.png",
    altText: "Raúl Vallespin",
    title: "Raúl Vallespin",
    designation: "Full Stack Engineer",
    socialProfile: [
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    id: 11,
    imgSrc: "/assets/team/member-5.png",
    altText: "Jordi Bayer",
    title: "Jordi Bayer",
    designation: "Data Scientist",
    socialProfile: [
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    id: 12,
    imgSrc: "/assets/team/member-6.png",
    altText: "Jordi Escrich",
    title: "Jordi Escrich",
    designation: "Data Guy",
    socialProfile: [
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    id: 13,
    imgSrc: "/assets/team/member-1.png",
    altText: "Sara Cela",
    title: "Sara Cela",
    designation: "Full Stack Engineer",
    socialProfile: [
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaLinkedin />,
      },
    ],
  },
];

export default function TeamSection({ section, teamMembers }) {
  console.log(teamMembers);
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
