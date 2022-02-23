/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Button } from "theme-ui";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = ({ hero }) => {
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
            <Heading as="h1" variant="heroPrimary" sx={{ color: "white", lineHeight: 1.5 }}>
              {/* Get the <i sx={{}}>wisdom of data</i> in a click */}
              {hero.title} {' '}
              {/* <br /> */}
              <i sx={{ bg: '#ffffff95', color: 'primary', px: 1 }}>Simple</i>
            </Heading>
            {/* <Text as="p" variant="heroSecondary" sx={{ color: "white" }}>
              Deeply understand people's mobility
              patterns and make faster, better and more informed decision
            </Text> */}
            <Text
              as="p"
              variant="heroTerciary"
              sx={{ color: "white", px: [5, 5, 5, 8, 8, 8, 8] }}
            >
              {/* Deeply understand people's mobility patterns and make faster,
              better and more informed decision */}
              {hero.description}
            </Text>
            <a target="_blank" href={hero.buttonURL} rel="noopener noreferrer">
              <Button variant="hero" aria-label="Discover our product">
                {/* Discover our product */}
                {hero.buttonText}
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
    height: ["80vh", "70vh", "70vh", "70vh", "70vh", "80vh", "85vh"],
    overflow: "hidden",
    // pt: ["140px", "145px", "155px", "170px", "80px", null, "60px", "170px"],
    pt: '90px',
    pb: [2, null, 0, null, 2, 0, null, 2],
    position: "relative",
    zIndex: 2,
    container: {
      minHeight: "inherit",
      // display: "flex",
      // flexDirection: 'column',
      // justifyContent: [
      //   "center",
      //   "center",
      //   "center",
      //   "center",
      //   "center",
      //   "center",
      //   "center",
      // ],
      // overflow: 'hidden'
      height: '100%', 
      display: 'grid',
      placeItems: 'center'
    },
    contentBox: {
      width: ['80%','80%','80%','70%','70%','70%','70%'],
      mx: "auto",
      // textAlign: ["center", "center", "center", "center", "left", "left"],
      textAlign: ["center", "center", "center", "center", "center", "center", "center"],
      // my: 3,
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
