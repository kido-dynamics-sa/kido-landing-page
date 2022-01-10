/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box, Text } from "theme-ui";

import Image from "next/image";
import Check from "../../public/assets/check.svg";

export default function CompanyCulture({ data }) {

  return (
    <section sx={{ position: "relative", mx: "auto", maxWidth: "1200px" }}>
          <Container
            sx={{
              mt: 6,
              mb: 10,
              display: "grid",
              gridTemplateColumns: [
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
              ],
              p: 7,
              gap: 6,
              backgroundColor: "#f6fafe",
              border: "1px solid #eaf2fa",
              borderRadius: "10px",
              width: "100%",
            }}
          >
            <Box>
              <Text
                as="p"
                sx={{ ...styles.wrapper.subTitle, color: "primary" }}
              >
                Our culture
              </Text>
              <Text as="p" className="description" sx={styles.description}>
                {data.description}
              </Text>
            </Box>
            <Box>
              <Text
                as="p"
                sx={{ ...styles.wrapper.subTitle, color: "primary" }}
              >
                Our values
              </Text>
              <Box
                sx={{
                  textAlign: "left",
                  display: "grid",
                  gridTemplateColumns: [
                    "repeat(1, 1fr)",
                    "repeat(1, 1fr)",
                    "repeat(1, 1fr)",
                    "repeat(2, 1fr)",
                  ],
                  gap: 4,
                }}
              >
                <li sx={{ display: "flex", alignItems: "center" }}>
                  <Image src={Check} alt={"check_value"} />
                  <Text as="p" sx={{ ml: 3 }}>
                    {data.value1}
                  </Text>
                </li>
                <li sx={{ display: "flex", alignItems: "center" }}>
                  <Image src={Check} alt={"check_value"} />
                  <Text as="p" sx={{ ml: 3 }}>
                    {data.value2}
                  </Text>
                </li>
                <li sx={{ display: "flex", alignItems: "center" }}>
                  <Image src={Check} alt={"check_value"} />
                  <Text as="p" sx={{ ml: 3 }}>
                    {data.value3}
                  </Text>
                </li>
                <li sx={{ display: "flex", alignItems: "center" }}>
                  <Image src={Check} alt={"check_value"} />
                  <Text as="p" sx={{ ml: 3 }}>
                    {data.value4}
                  </Text>
                </li>
                <li sx={{ display: "flex", alignItems: "center" }}>
                  <Image src={Check} alt={"check_value"} />
                  <Text as="p" sx={{ ml: 3 }}>
                    {data.value5}
                  </Text>
                </li>
              </Box>
            </Box>
          </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: ["wrap", null, null, "nowrap"],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, "30px", 0],
    textAlign: ["center", null, null, "left"],
    width: ["100%", "80%", null, 340, 400, 430, null, 485],
    pb: ["50px", "60px", null, 0],
    mx: ["auto", null, null, 0],
    ".description": {
      pr: [0, null, 6, 7, 6],
    },
  },

  grid: {
    pr: [2, 0, null, null, 6, "70px"],
    pl: [2, 0],
    pt: [2, null, null, null, 3],
    mx: "auto",
    width: ["100%", 370, 420, "100%"],
    gridGap: ["35px 0", null, null, null, "50px 0"],
    gridTemplateColumns: ["repeat(1,1fr)"],
  },
  card: {
    display: "flex",
    alignItems: "flex-start",
    transition: "all 0.3s",
  },

  icon: {
    width: ["45px", null, null, null, "55px"],
    height: "auto",
    flexShrink: 0,
    mr: [3, null, null, null, 4],
  },

  thumbnail: {
    display: "inline-flex",
    position: "relative",
    mr: "auto",
    ml: ["auto", null, null, null, 7],
    "> img": {
      position: "relative",
      zIndex: 1,
      height: [310, "auto"],
    },
  },
  shapeBox: {
    position: "absolute",
    bottom: "-45%",
    width: "800px",
    zIndex: -1,
    display: ["none", null, null, null, null, "inline-block"],
  },

  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: -1,
    subTitle: {
      fontSize: [0, null, 1],
      color: "primary",
      textTransform: "uppercase",
      fontWeight: "700",
      mb: [2, 3],
      lineHeight: 1.5,
      letterSpacing: ["1.5px", null, "2px"],
    },
    title: {
      fontSize: ["24px", null, "28px", "30px", "36px", "42px", null, "48px"],
      color: "heading_secondary",
      lineHeight: [1.3, null, null, null, 1.2],
      fontWeight: "700",
      letterSpacing: "-.5px",
      mb: 5,
    },
  },
};
