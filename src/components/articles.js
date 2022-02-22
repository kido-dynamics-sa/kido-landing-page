/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Heading, Text, Grid, Flex } from "theme-ui";
import Card from "./card";
import Link from "next/link";

export default function Articles({ articles, ...rest }) {
  const heroArticle = articles[0];
  const category = rest.category ? rest.category : heroArticle.category;
  return (
    <div sx={styles.container}>
      <div sx={styles.articles}>
        <div sx={styles.articles.grid}>
          <div sx={styles.articles.hero}>
            <Link href={`/article/${heroArticle["Slug"]}`}>
              <div sx={styles.heroCard}>
                <a
                  sx={styles.heroCard.coverImage}
                  href={`/article/${heroArticle["Slug"]}`}
                >
                  <div sx={styles.heroCard.coverImage.image}>
                    <div
                      sx={{
                        pb: "52.1053%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={heroArticle["Media"]}
                        alt={`article ${heroArticle["Title"]} image`}
                        sx={{
                          width: "100%",
                          maxHeight: "100%",
                        }}
                      />
                    </div>
                  </div>
                  <svg
                    width="83"
                    height="62"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    sx={{
                      position: "absolute",
                      right: "-24px",
                      bottom: "-30px",
                      zIndex: -1,
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm8 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM19 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM25.5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM35 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM41.5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM51 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM57.5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM67 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM73.5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM83 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM1.5 7a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11 8.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM17.5 7a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM27 8.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM33.5 7a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM43 8.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM49.5 7a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM59 8.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM65.5 7a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM75 8.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM81.5 7a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM3 16.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM9.5 15a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.5 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm6.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.5 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm6.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.5 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm6.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.5 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm6.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.5 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM1.5 22a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.5 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm6.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.5 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm6.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.5 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm6.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.5 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm6.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.5 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm6.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM3 30.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM9.5 29a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.5 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm6.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.5 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm6.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.5 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm6.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.5 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm6.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.5 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM1.5 37a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.5 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm6.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.5 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm6.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.5 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm6.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.5 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm6.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.5 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm6.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM3 45.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM9.5 44a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.5 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm6.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.5 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm6.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.5 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm6.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.5 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm6.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.5 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM1.5 52a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.5 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm6.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.5 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm6.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.5 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm6.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.5 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm6.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.5 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm6.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM3 60.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM9.5 59a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.5 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm6.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.5 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm6.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.5 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm6.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.5 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm6.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9.5 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
                      fill="#3976EF"
                    ></path>
                  </svg>
                </a>
                <div sx={styles.heroCard.block}>
                  <div sx={{ ...styles.category, mb: 2 }}>
                    <Link
                      href={
                        category ? `/category/${category["Slug"]}` : "/blog"
                      }
                    >
                      <a
                        sx={{
                          "&:after": {
                            content: '"•"',
                            position: "absolute",
                            right: "10px",
                            transform: "translateX(50%)",
                          },
                          color: "secondary",
                        }}
                      >
                        {category && category["Name"]}
                      </a>
                    </Link>
                    <span sx={{ color: "#5e709d", fontWeight: "600" }}>
                      {heroArticle["Date"] || heroArticle.published_at.split("T")[0]}
                    </span>
                  </div>

                  <Link href={`/article/${heroArticle["Slug"]}`}>
                    <Heading sx={styles.title}>{heroArticle["Title"]}</Heading>
                  </Link>
                  <Text sx={styles.subTitle}>{heroArticle["Description"]}</Text>

                  <Flex
                    sx={{
                      ...styles.category,
                      textTransform: "none",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <div sx={styles.avatar}>
                      {heroArticle.author["Picture"] && (
                        <img
                          src={heroArticle.author["Picture"]}
                          alt={`heroArticle ${heroArticle["Title"]} image`}
                          sx={{
                            width: "100%",
                            maxHeight: "100%",
                          }}
                        />
                      )}
                    </div>
                    <Link
                      href={
                        category ? `/category/${category["Slug"]}` : "/blog"
                      }
                    >
                      <a
                        sx={{
                          position: "relative",
                          p: 0,
                          m: 0,
                          pr: "20px",
                          color: "secondary"
                        }}
                      >
                        {heroArticle.author["Name"] || "Kido Dynamics"}
                      </a>
                    </Link>
                  </Flex>
                </div>
              </div>
            </Link>
          </div>
          <Grid sx={styles.articles.others}>
            {articles
              .slice(1)
              .map((article, i) => {
                return (
                  <Card
                    article={article}
                    category={
                      article.category && article.category["Slug"]
                        ? article.category
                        : category
                    }
                    key={`article__${article["Slug"]}`}
                  />
                );
              })}
          </Grid>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    top: "67px",
    pt: 11,
    transform: "translateZ(0)",
    "&:before": {
      content: '""',
      top: "90px",
      left: 0,
      background: "linear-gradient(180deg,#002797,#fff 99.13%);",
      position: "absolute",
      width: "100%",
      height: "100%",
      maxHeight: "458px",
    },
  },
  articles: {
    position: "relative",
    width: "100%",
    maxWidth: "1440px",
    mx: "auto",
    grid: {
      position: "relative",
      mx: "auto",
      width: "83.3333333333%",
      maxWidth: "1200px",
      zIndex: 1,
    },
    hero: {
      position: "relative",
      mx: "auto",
      width: "81.6666666667%",
      maxWidth: "980px",
      mb: 10,
    },
    others: {
      width: ["100%", "80%", "100%"],
      mx: "auto",
      justifyContent: "center",
      gridGap: ["35px 0", null, "30px 30px", "20px", "20px", "20px", "20px"],
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
  },
  heroCard: {
    cursor: "pointer",
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    backfaceVisibility: "hidden",
    flexDirection: [
      "column-reverse",
      "column-reverse",
      "column-reverse",
      "row-reverse",
    ],
    boxShadow: "none",
    coverImage: {
      position: "relative",
      flexShrink: 1,
      flexGrow: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: ["100%", "100%", "100%", "38%"],
      image: {
        borderRadius: "8px",
        overflow: "hidden",
        width: "100%",
        transform: "scale(1.04, 1.04)",
        my: 5,
      },
    },
    block: {
      flex: "1 1",
      flexShrink: 0,
      mr: 4,
      pb: 2,
      width: "100%",
      a: {
        position: "relative",
        p: 0,
        m: 0,
        pr: "20px",
      },
    },
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
  title: {
    fontSize: [5, 5, 5, 7],
    color: "heading_primary",
    lineHeight: 1.4,
    fontWeight: 700,
    mb: [2, null, 3],
  },

  subTitle: {
    fontSize: [2, 2, 2, 3],
    fontWeight: 400,
    lineHeight: "1.9",
    mb: 4,
  },

  avatar: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    overflow: "hidden",
  },
};
