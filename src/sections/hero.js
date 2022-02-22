/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Button } from "theme-ui";
import Carousel from "react-multi-carousel";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

let AnimatedBox = motion.custom(Box);

const animationProps = {
  initial: { opacity: 0, x: 100 },
  transition: { ease: "easeOut", duration: 0.75 },
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 1,
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 870 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 870, min: 0 },
    items: 1,
  },
};

const gradients = [
  "radial-gradient(circle, rgba(233, 30, 99, 0.5) 20%, rgba(255,255,255,1) 35%)",
  "radial-gradient(circle, rgba(28, 200, 238, 0.5) 20%, rgba(255,255,255,1) 35%)",
  "radial-gradient(circle, rgba(13, 217, 164, 0.5) 20%, rgba(255,255,255,1) 35%)",
];

const shadows = [
  "rgb(233 76 84 / 57%) 0px 9px 20px -5px",
  "rgb(28 200 238 / 57%) 0px 9px 20px -5px",
  "rgb(13 217 164 / 57%) 0px 9px 20px -5px",
];

const shadowsHover = [
  "rgb(233 76 84 / 57%) 0px 9px 40px -5px",
  "rgb(28 200 238 / 57%) 0px 9px 40px -5px",
  "rgb(13 217 164 / 57%) 0px 9px 40px -5px",
];

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div ref={ref}>
      <section
        sx={{
          ...styles.banner,
          "&::before": {
            position: "absolute",
            content: '""',
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            opacity: 0.4,
            backgroundColor: "#260142",
          },
          backgroundImage:
            'url("https://images.pexels.com/photos/41949/earth-earth-at-night-night-lights-41949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")',
          backgroundColor: "#260142",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        id="home"
      >
        <Container sx={styles.banner.container}>
          <Box sx={styles.banner.contentBox}>
            <Heading as="h1" variant="heroPrimary" sx={{ color: "white" }}>
              Get the <i sx={{}}>wisdom of data</i> in a click
            </Heading>
            {/* <Text as="p" variant="heroSecondary" sx={{ color: "white" }}>
              Deeply understand people's mobility
              patterns and make faster, better and more informed decision
            </Text> */}
            <Text as="p" variant="heroTerciary" sx={{ color: "white", px: [5, 5, 5, 8, 8, 8, 8] }}>
              Deeply understand people's mobility patterns and make faster,
              better and more informed decision
            </Text>
            <a
              target="_blank"
              href={"https://app.kido-es.kidodynamics.com/"}
              rel="noopener noreferrer"
            >
              <Button
                variant="hero"
                aria-label="Discover our product"
              >
                Discover our product
              </Button>
            </a>
          </Box>
          {/* <AnimatedBox
            {...animationProps}
            sx={styles.banner.hero}
            animate={inView ? { opacity: 1, x: 0 } : ""}
          >
            <img
              src={
                "https://images.unsplash.com/photo-1517953377824-516f2dca803b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3889&q=80"
              }
              alt={"hero image"}
              sx={{ maxWidth: "100%" }}
            />
          </AnimatedBox> */}
        </Container>
      </section>
    </div>
  );
};

const styles = {
  banner: {
    height: ["70vh", "70vh", "70vh", "70vh", "70vh", "80vh", "90vh"],
    overflow: "hidden",
    pt: ["140px", "145px", "155px", "170px", "80px", null, "60px", "170px"],
    pb: [2, null, 0, null, 2, 0, null, 2],
    position: "relative",
    zIndex: 2,
    ".custom-dot > li > button": {
      border: "none",
      margin: "10px",
      outline: "none",
    },
    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: ["column", "column", "column", "column", "row", "row"],
      justifyContent: [
        "center",
        "center",
        "center",
        "center",
        "space-between",
        "space-between",
      ],
      // overflow: 'hidden'
    },
    hero: {
      pt: [0, 0, 0, 0, 8, 11, 11],
      minHeight: "inherit",
      display: "flex",
      mr: -11,
      mt: [0, 0, 0, 0, -9, null, -11],
      maxWidth: "800px",
      // width: "100%",
      height: "100%",
    },
    contentBox: {
      pt: [3, 3, 3, 3, 10, 10, 11, 10],
      width: ["100%", "90%", "535px", null, "57%", "60%", "60%", "60%"],
      mx: "auto",
      // textAlign: ["center", "center", "center", "center", "left", "left"],
      textAlign: ["center", "center", "center", "center", "center", "center"],
      // my: 3,
      mb: ["40px", null, null, null, null, 4],
    },
    imageBox: {
      justifyContent: "center",
      textAlign: "center",
      display: "inline-flex",
      mb: [0, null, -6, null, null, "-40px", null, -3],
      img: {
        position: "relative",
        height: [245, "auto"],
      },
    },
    tabsIcons: {
      display: "flex",
      justifyContent: [
        "center",
        "center",
        "center",
        "center",
        "flex-start",
        "flex-start",
      ],
      gap: "54px",
      my: 5,
      img: {
        cursor: "pointer",
      },
    },
  },
};

export default Hero;
