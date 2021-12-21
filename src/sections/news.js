/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Grid, Heading, Text } from "theme-ui";

import Image from "next/image";
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

const news = [
  {
    title:
      "Kido Dynamics data reveals how three big cities are recovering from the pandemic.",
    path: "https://chainstoreage.com/placerai-data-reveals-how-three-big-cities-are-recovering-pandemic",
    date: "29 de Diciembre de 2021",
    logoURL: "https://www.placer.ai/wp-content/uploads/2020/06/CSAlogo-1.png",
    id: 1,
  },

  {
    title:
      "Kido Dynamics data reveals how three big cities are recovering from the pandemic.",
    path: "https://chainstoreage.com/placerai-data-reveals-how-three-big-cities-are-recovering-pandemic",
    date: "29 de Diciembre de 2021",
    logoURL: "https://www.placer.ai/wp-content/uploads/2020/06/CSAlogo-1.png",
    id: 2,
  },
  {
    title:
      "Kido Dynamics data reveals how three big cities are recovering from the pandemic.",
    path: "https://chainstoreage.com/placerai-data-reveals-how-three-big-cities-are-recovering-pandemic",
    date: "29 de Diciembre de 2021",
    logoURL: "https://www.placer.ai/wp-content/uploads/2020/06/CSAlogo-1.png",
    id: 3,
  },
  {
    title:
      "Kido Dynamics data reveals how three big cities are recovering from the pandemic.",
    path: "https://chainstoreage.com/placerai-data-reveals-how-three-big-cities-are-recovering-pandemic",
    date: "29 de Diciembre de 2021",
    logoURL: "https://www.placer.ai/wp-content/uploads/2020/06/CSAlogo-1.png",
    id: 4,
  },
  {
    title:
      "Kido Dynamics data reveals how three big cities are recovering from the pandemic.",
    path: "https://chainstoreage.com/placerai-data-reveals-how-three-big-cities-are-recovering-pandemic",
    date: "29 de Diciembre de 2021",
    logoURL: "https://www.placer.ai/wp-content/uploads/2020/06/CSAlogo-1.png",
    id: 5,
  },
  {
    title:
      "Kido Dynamics data reveals how three big cities are recovering from the pandemic.",
    path: "https://chainstoreage.com/placerai-data-reveals-how-three-big-cities-are-recovering-pandemic",
    date: "29 de Diciembre de 2021",
    logoURL: "https://www.placer.ai/wp-content/uploads/2020/06/CSAlogo-1.png",
    id: 6,
  },
];

export default function Careers({ section }) {
  const { ref, inView } = useInView({
    threshold: 0.25,
  });
  return (
    <section ref={ref} id="news" sx={styles.banner}>
      {" "}
      <Container>
        <AnimatedBox
          {...animationProps}
          sx={styles.contentBox}
          animate={inView ? { opacity: 1, scale: 1 } : ""}
        >
          <TextFeature
            subTitle={"kido dynamics newsroom"}
            title={
              "Seven years after last venture investment, Kido Dynamics scores $200M Series C"
            }
            description={
              "Seven years after last venture investment, Kido Dynamics scores $200M Series C"
            }
            btnName="Read Story"
            btnURL="https://techcrunch.com/2021/11/15/seven-years-after-last-venture-investment-mixpanel-scores-200m-series-c/?tpcc=tcplustwitter"
            
          />
        </AnimatedBox>

        <Grid sx={styles.grid}>
          {news.map((item) => (
            <Link href={item.path} id={item.id}>
              <Box sx={styles.reviewCard}>
                <div sx={styles.img}>
                  <Image
                    src={item.logoURL}
                    alt={"press logo"}
                    width="300px"
                    height="176px"
                    layout="responsive"
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
            </Link>
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
    gridGap: ["35px 0", null, "40px 40px", "30px", "30px", "30px", "30px"],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
    mb: 8,
    mt: 8,
  },

  reviewCard: {
    cursor: "pointer",
    boxShadow: "0px 0px 1px rgba(38, 78, 118, 0.35)",
    transition: "all 0.3s",
    borderRadius: "6px",
    p: [
      "30px 20px 35px",
      "30px 25px 35px",
      "30px 20px 35px",
      "35px 30px 40px 40px",
      "30px 30px 35px",
      "35px 30px 40px 40px",
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
    mx: "auto",
    ml: "auto",
    // width: ['80px', null, null, '90px', null, 'auto'],
  },

  link: {
    fontSize: [1, null, null, 2],
    fontWeight: "bold",
    color: "primary",
    lineHeight: [1.85, null, 2],
  },
};
