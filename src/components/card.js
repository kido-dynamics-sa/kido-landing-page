/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Heading, Text, Box, Flex } from "theme-ui";
import Link from "next/link";

export default function Card({ article, category = null }) {
  return (
    <Link href={`/article/${article["Slug"]}`}>
      <Box sx={styles.reviewCard}>
        <div sx={styles.img}>
          <img
            alt={"press logo"}
            src={article["Media"]}
            sx={{
              width: "100%",
              maxHeight: "100%",
            }}
          />
        </div>

        <div sx={{ ...styles.category, mb: 2 }}>
          <Link href={"/blog"}>
            <a
              sx={{
                position: "relative",
                p: 0,
                m: 0,
                pr: "20px",
                "&:after": {
                  content: '"•"',
                  position: "absolute",
                  right: "10px",
                  transform: "translateX(50%)",
                  color: "#5e709d",
                },
              }}
            >
              {category && category["Name"]}
            </a>
          </Link>
          <span sx={{ color: "#5e709d", fontWeight: "600" }}>
            {article["Date"] || article.published_at.split("T")[0]}
          </span>
        </div>
        <Heading as="h3" sx={styles.title}>
          {article["Title"]}
        </Heading>
        <Text as="p" sx={styles.description}>
          {article["Description"]}
        </Text>
        <Flex
          sx={{
            ...styles.category,
            textTransform: "none",
            alignItems: "center",
            gap: 2,
          }}
        >
          <div sx={styles.avatar}>
            {article.author["Picture"] && (
              <img
                src={article.author["Picture"]}
                alt={`article ${article["Title"]} image`}
                sx={{
                  width: "100%",
                  maxHeight: "100%",
                }}
              />
            )}
          </div>
          <Link href={category ? `/category/${category["Slug"]}` : "/blog"}>
            <a
              sx={{
                position: "relative",
                p: 0,
                m: 0,
                pr: "20px",
              }}
            >
              {article.author["Name"]}
            </a>
          </Link>
        </Flex>
      </Box>
    </Link>
  );
}

const styles = {
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
    mb: 2,
    color: "text",
    lineHeight: 1.6,
  },

  category: {
    color: "primary",
    whiteSpace: "nowrap",
    textDecoration: "none",
    transition: "color .15s linear",
    textTransform: "uppercase",
    fontSize: 0,
    letterSpacing: "1px",
    fontWeight: "600",
    cursor: "pointer",
    lineHeight: "1.5",
    transition: "all 0.15s",
  },

  description: {
    fontSize: [1, null, null, 1],
    fontWeight: "normal",
    color: "text_secondary",
    lineHeight: [1.85, null, 2],
    mb: 3,
  },
  img: {
    borderRadius: "8px",
    overflow: "hidden",
    mx: "auto",
    ml: "auto",
    mb: 2,
    // width: ['80px', null, null, '90px', null, 'auto'],
  },
  avatar: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    overflow: "hidden",
  },

  link: {
    fontSize: [1, null, null, 2],
    fontWeight: "bold",
    color: "primary",
    lineHeight: [1.85, null, 2],
  },
};
