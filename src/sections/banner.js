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

const CustomDot = ({ onMove, index, onClick, active }) => {
  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.
  return (
    <li onClick={() => onClick()} dataindex={index} key={index}>
      <button
        aria-label={`Go to slide ${index}`}
        sx={{
          display: "inline-block",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          opacity: 1,
          boxShadow: "none",
          transition: "background .5s",
          border: "1px solid #c2c4c590",
          padding: 0,
          margin: "0 6px 0 0",
          outline: 0,
          cursor: "pointer",
          background: active ? "#b9bbbd" : "inherit",
        }}
      ></button>
    </li>
  );
};

const Banner = ({ banners }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const sortedBanners = ["Tourism Banner", "Mobility Banner", "Retail Banner"];
  const sortBanners = (banners) => {
    return sortedBanners.map((labelBanner) => {
      const newBanner = banners.find((a) => a.altText === labelBanner);
      return { ...newBanner };
    });
  };
  const getBannerImage = (altText) => {
    switch (altText) {
      case "Tourism Banner":
        return "/assets/heroTourism.png";
      case "Mobility Banner":
        return "/assets/heroMobility.png";
      case "Retail Banner":
        return "/assets/heroRetail.png";
      default:
        return BannerTourism;
    }
  };
  const getBannerLink = (altText) => {
    switch (altText) {
      case "Tourism Banner":
        return "https://app.kido-es.kidodynamics.com/tourism";
      case "Mobility Banner":
        return "https://app.kido-es.kidodynamics.com/mobility";
      case "Retail Banner":
        return "https://app.kido-es.kidodynamics.com/retail";
      default:
        return BannerTourism;
    }
  };

  if (!banners) {
    return <div>error</div>;
  }

  return (
    <div ref={ref}>
      <Carousel
        ssr
        deviceType="desktop"
        responsive={responsive}
        dotListClass="custom-dot"
        showDots
        arrows={false}
        infinite
        autoPlay
        autoPlaySpeed={5000}
        minimumTouchDrag={80}
        customDot={<CustomDot />}
      >
        {sortBanners(banners).map((item, i) => (
          <section
            sx={{
              ...styles.banner,
              "&::before": {
                position: "absolute",
                content: '""',
                top: "-200%",
                left: "-100%",
                height: "300%",
                width: "200%",
                zIndex: -1,
                background: gradients[i],
              },
            }}
            id="home"
            key={item.id}
          >
            <Container sx={styles.banner.container} key={item.id}>
              <Box sx={styles.banner.contentBox}>
                <Heading as="h1" variant="heroPrimary">
                  {item.title}{" "}
                  <span sx={{ color: item.color }}>{item.heroPrimary}</span>
                </Heading>
                <Text as="p" variant="heroSecondary">
                  {item.heroSecondary}
                </Text>
                <Text as="p" variant="heroTerciary">
                  {item.heroTerciary}
                </Text>
                <a
                  target="_blank"
                  href={getBannerLink(item.altText)}
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="primary"
                    sx={{
                      bg: item.color,
                      boxShadow: shadows[i],
                      "&:hover": {
                        boxShadow: shadowsHover[i],
                      },
                    }}
                  >
                    Are you ready to see more stats?
                  </Button>
                </a>
              </Box>
              <AnimatedBox
                {...animationProps}
                sx={styles.banner.hero}
                animate={inView ? { opacity: 1, x: 0 } : ""}
              >
                {/* <Box sx={styles.banner.hero}> */}
                <img
                  src={getBannerImage(item.altText)}
                  alt={item.altText}
                  sx={{ maxWidth: "100%" }}
                />
              </AnimatedBox>
            </Container>
          </section>
        ))}
      </Carousel>
    </div>
  );
};

const styles = {
  banner: {
    // height: '90vh',
    overflow: "hidden",
    pt: ["140px", "145px", "155px", "170px", "80px", null, "60px", "215px"],
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
      pt: [0, 0, 0, 0, 8, null, 11],
      minHeight: "inherit",
      display: "flex",
      mr: -11,
      mt: [0, 0, 0, 0, -9, null, -11],
      maxWidth: "800px",
      // width: "100%",
      height: "100%",
    },
    contentBox: {
      pt: [0, 0, 0, 0, 9, null, 11],
      width: ["100%", "90%", "535px", null, "57%", "60%", "74%", "74%"],
      mx: "auto",
      textAlign: ["center", "center", "center", "center", "left", "left"],
      my: 3,
      mb: ["40px", null, null, null, null, 7],
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

export default Banner;
