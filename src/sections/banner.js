/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Image, Button } from "theme-ui";
// import BannerImg from "assets/banner-thumb.png";
import BannerImgMobile from "assets/heroBannerNoRotate.png";
import BannerTourism from "assets/heroTourism.png";
import BannerRetail from "assets/heroRetail.png";
import BannerMobility from "assets/heroMobility.png";
import tabsIcon from "assets/tabsIcon.svg";
// import tabsIconTourism from "assets/tabsIconTourism.svg";
// import tabsIconMobility from "assets/tabsIconMobility.svg";
// import tabsIconRetail from "assets/tabsIconRetail.svg";
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
        return BannerTourism;
      case "Mobility Banner":
        return BannerMobility;
      case "Retail Banner":
        return BannerRetail;
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
                Get Insights About Your{" "}
                <span sx={{ color: item.color }}>{item.heroPrimary}</span>
              </Heading>
              {/* <Box sx={styles.banner.tabsIcons}>
                <Image src={i === 0 ?  item.tabsIcon : tabsIcon} alt="tabs icon 1" />
                <Image src={i === 1 ?  item.tabsIcon : tabsIcon} alt="tabs icon 2" />
                <Image src={i === 2 ?  item.tabsIcon : tabsIcon} alt="tabs icon 3" />
              </Box> */}
              <Text as="p" variant="heroSecondary">
                {item.heroSecondary}
              </Text>
              <Text as="p" variant="heroTerciary">
                {item.heroTerciary}
              </Text>
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
            </Box>
            <AnimatedBox
              {...animationProps}
              sx={styles.banner.hero}
              animate={inView ? { opacity: 1,  x: 0 } : ""}
            >
              {/* <Box sx={styles.banner.hero}> */}
              <Image
                // src={getStrapiMedia(item.imgSrc.url)}
                src={getBannerImage(item.altText)}
                alt={item.altText}
                sx={{ objectFit: "contain" }}
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
