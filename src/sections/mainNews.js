/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Heading, Text, Box } from "theme-ui";

import Link from "next/link";
import SectionHeader from "components/section-header";
import ButtonGroup from "components/button-group";
import Carousel from "react-multi-carousel";
import { FaArrowRight } from "react-icons/fa";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPlaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: <ButtonGroup />,
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1,
};

export default function MainNews({ news, section }) {
  return (
    <section id="testimonial" sx={{ variant: "section.testimonial" }}>
      <Container css={{ textAlign: "center" }}>
        {/* <SectionHeader slogan={section.slogan} title={section.title} /> */}
        <SectionHeader slogan={"news"} title={"Kido Dynamics in the news"} />
      </Container>
      <Box sx={styles.carouselWrapper}>
        <Carousel {...carouselParams}>
          {news
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 6)
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
                        objectFit: 'cover',
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
        </Carousel>
      </Box>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    alignItems: "flex-end",
    mt: "-30px",
    px: "15px",
    ".carousel-container": {
      width: "100%",
      // maxWidth: [
      //   "100%",
      //   null,
      //   null,
      //   "750px",
      //   "1000px",
      //   "1180px",
      //   null,
      //   "1180px",
      //   // "calc(50% + 865px)",
      // ],
      mr: ["auto", null, null, null, null, null, null, null],
      ml: "auto",
      ".react-multi-carousel-item": {
        transition: "all 0.25s",
      },
      ".react-multi-carousel-item--active:nth-of-type(4n)": {
        // opacity: 0.5,
        "@media screen and (max-width: 1619px)": {
          opacity: 1,
        },
      },
    },
  },
  reviewCard: {
    height: '90%',
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
    },
    ".rating": {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: "none",
        mb: 0,
        display: "flex",
      },
      svg: {
        marginRight: "2px",
        "&:last-of-type": {
          marginRight: 0,
        },
      },
      ".star": {
        color: "primary",
        mr: "1px",
      },
      ".star-o": {
        color: "#ddd",
        mr: "1px",
      },
    },
    ".card-footer": {
      display: "flex",
      alignItems: "center",
      marginTop: [5, null, null, "33px"],
      ".image": {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: "flex",
        img: {
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          objectFit: "cover",
        },
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
    height: "200px",
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
