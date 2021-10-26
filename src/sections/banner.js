/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Image, Button } from "theme-ui";
// import BannerImg from "assets/banner-thumb.png";
import BannerImgMobile from "assets/heroBannerNoRotate.png";
import BannerImg from "assets/heroBanner.png";
import tabsIcon from "assets/tabsIcon.svg";
import tabsIconTourism from "assets/tabsIconTourism.svg";

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Get Insights About Your <span sx={{color: 'primary'}}>Municipality</span>
          </Heading>
          <Box sx={styles.banner.tabsIcons}>
            <Image src={tabsIconTourism} alt="tabs icon active" />
            <Image src={tabsIcon} alt="tabs icon" />
            <Image src={tabsIcon} alt="tabs icon" />
          </Box>
          <Text as="p" variant="heroSecondary">
            "Who is visiting my location?"
          </Text>
          <Text as="p" variant="heroTerciary">
            Visitation Trends provide accurate foot-traffic and dwell-time
            reports by seasonality and customer segments.
          </Text>
          <Button variant="primary">Are you ready to see more stats?</Button>
        </Box>
        <Box sx={styles.banner.hero}>
          {/* <Image
            src={BannerImg}
            alt="banner"
          /> */}
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    height: "90vh",
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,
    "&::before": {
      position: "absolute",
      content: '""',
      top: "-150%",
      left: "-100%",
      height: "250%",
      width: "200%",
      zIndex: -1,
      background:
        "radial-gradient(circle, rgba(233,30,99,0.5) 0%, rgba(255,255,255,1) 50%)",
    },
    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: ["column", "column", "column", "row", "row", "row"],
      justifyContent: [
        "center",
        "center",
        "center",
        "space-between",
        "space-between",
        "space-between",
      ],
    },
    hero: {
      minHeight: "inherit",
      display: "flex",
      width: ["auto", "auto", "auto", "800px", "800px", "800px"],
      "&::before": {
        position: "absolute",
        content: '""',
        top: ["-40%", "-20%", "-5%", "-50%", "-40%", "-18%"],
        right: 0,
        height: "150%",
        width: "100%",
        zIndex: -1,
        backgroundImage: [
          `url(${BannerImgMobile})`,
          `url(${BannerImgMobile})`,
          `url(${BannerImgMobile})`,
          `url(${BannerImg})`,
          `url(${BannerImg})`,
          `url(${BannerImg})`,
        ],
        backgroundRepeat: `no-repeat`,
        backgroundPosition: ["bottom", "bottom", "bottom", "bottom right","bottom right","bottom right"],
        backgroundSize: ["85%", "85%", "85%", "55%", "55%", "55%"],
      },
    },
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "74%", "74%"],
      mx: "auto",
      textAlign: ["center", "center", "center", "left", "left", "left"],
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
      justifyContent:[ "center", "center", "center", "flex-start", "flex-start", "flex-start"],
      gap: "54px",
      my: 5,
      img: {
        cursor: "pointer",
      },
    },
  },
};
