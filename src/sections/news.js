/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Grid, Heading, Text } from "theme-ui";

import Link from "next/link";

import TextFeature from "components/text-feature";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FaArrowRight } from "react-icons/fa";

let AnimatedBox = motion.custom(Box);

const animationProps = {
  initial: { opacity: 0, scale: 0.75 },
  transition: { ease: "easeOut", duration: 0.75 },
};

export default function News({ mainNew, news }) {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <section ref={ref} id="news" sx={styles.banner}>
      {" "}
      <Container>
        <AnimatedBox
          {...animationProps}
          sx={styles.contentBox}
          animate={{ opacity: 1, scale: 1 }}
          // animate={inView ? { opacity: 1, scale: 1 } : ""}
        >
          <TextFeature
            subTitle={"kido dynamics newsroom"}
            title={mainNew.title}
            description={mainNew.description}
            btnName={mainNew.buttonText}
            btnURL={mainNew.buttonURL}
            maxWidth
          />
        </AnimatedBox>

        <Grid sx={styles.grid}>
          {news
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((item) => (
              <a
                target="_blank"
                href={item.path}
                rel="noopener noreferrer"
                key={item.id}
                sx={{ textDecoration: 'none'}}
              >
                <Box sx={styles.reviewCard}>
                  <div sx={styles.img}>
                    <img
                      alt={"press logo"}
                      src={item.imageURL}
                      sx={{
                        width: "100%",
                        maxHeight: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <Text as="p" sx={styles.description}>
                    {item.date}
                  </Text>
                  <Heading as="h3" sx={styles.title}>
                    {item.title}
                  </Heading>
                  <Text as="p" sx={styles.link}>
                    Read more{" "}
                    <FaArrowRight
                      sx={{
                        m: "auto",
                        verticalAlign: "middle",
                        ml: 1,
                        width: "12px",
                      }}
                      className="arrow"
                    />
                  </Text>
                </Box>
              </a>
            ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    display: "grid",
    placeItems: "center center",
    overflow: "hidden",
    pt: ["140px", "145px", "155px", "170px", "80px", null, "60px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 2],
    position: "relative",
    zIndex: 2,
    background: "radial-gradient(circle,#d8e5ff,#fff)",
    // backgroundColor: '#d8e5ff'
  },

  contentBox: {
    mt: "15%",
    flexShrink: 0,
    px: [0, null, "30px", 0],
    width: ["100%", "80%", null, 340, 400, 700, null, 700],
    pb: ["50px", "60px", null, 0],
    mx: "auto",
    textAlign: "center",
    zIndex: 3,
  },

  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: ["35px 0", null, "40px 40px", 6, 6, 6, 6],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      "repeat(2,1fr)",
      "repeat(3,1fr)",
    ],
    my: 8,
  },

  reviewCard: {
    height: '90%',
    cursor: "pointer",
    boxShadow: "0px 0px 1px rgba(38, 78, 118, 0.35)",
    transition: "all 0.3s",
    borderRadius: "6px",
    p: [
      "30px 20px 35px",
      "30px 25px 35px",
      "30px 20px 35px",
      "35px 35px 40px 40px",
      "30px 30px 35px",
      "35px 35px 40px 40px",
    ],
    bg: "white",
    textAlign: "left",
    m: [
      "28px 5px 30px 5px",
      "28px 20px 30px 20px",
      "28px 15px 30px 15px",
      "28px 15px 30px 15px",
      "30px 20px 40px",
    ],
    "&:hover": {
      boxShadow: "0px 6px 30px rgba(38, 78, 118, 0.1)",
      ".arrow": {
        transition: "transform 0.2s linear",
        transform: "translateX(20px)",
      },
    },
  },
  title: {
    fontSize: [3, 4],
    fontWeight: 700,
    mb: [3, null, null, "22px"],
    color: "text",
    lineHeight: 1.6,
  },

  description: {
    fontSize: [1, null, null, 1],
    fontWeight: "normal",
    color: "text_secondary",
    lineHeight: [1.85, null, 2],
    mb: [3, null, null, "22px"],
  },
  img: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "150px",
    my: 1,
    borderRadius: "6px",
  },

  link: {
    fontSize: [1, null, null, 2],
    fontWeight: "bold",
    color: "primary",
    lineHeight: [1.85, null, 2],
  },
};
