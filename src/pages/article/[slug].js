/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import Layout from "../../components/layout";
import { ThemeProvider } from "theme-ui";
import { fetchAPI, getFooter } from "utils/api";
import theme from "theme";
import SEO from "components/seo";
import Link from "next/link";

export default function Article({ article, pageContext, footer, categories }) {
  // const seo = {
  //   metaTitle: article.attributes.title,
  //   metaDescription: article.attributes.description,
  //   shareImage: article.attributes.image,
  //   article: true,
  // }

  return (
    <ThemeProvider theme={theme}>
      <Layout
        pageContext={pageContext}
        footer={footer[0]}
        categories={categories}
        onlyLogo
        isBlog
      >
        <SEO
          title={`Kido Dynamics - ${article["Title"].charAt(0).toUpperCase() + article["Title"].slice(1)}`}
          description={article["Description"]}
          image={article["Media"]}
        />
        <div sx={styles.wrapper}>
          <div sx={styles.header}>
            <ul sx={styles.header.metadata}>
              <li
                sx={{
                  color: "primary",
                }}
              >
                {article.category["Name"]}
              </li>
              <li>•</li>
              <li>
                Last Updated:{" "}
                <Moment format="MMM Do YYYY">{article.updated_at}</Moment>
              </li>

              <li>•</li>
              <li>5 minutes read</li>
            </ul>
            <h1 sx={styles.header.title}>{article["Title"]}</h1>
            <div
              sx={{
                ...styles.header.author,
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <div sx={styles.avatar}>
                {" "}
                <img
                  alt={"press logo"}
                  src={article.author["Picture"]}
                  sx={{
                    width: "100%",
                    maxHeight: "100%",
                  }}
                />
              </div>
              <div sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
                <p
                  sx={{
                    position: "relative",
                    p: 0,
                    m: 0,
                    pr: "20px",
                  }}
                >
                  {article.author["Name"]}
                </p>
                <p sx={{ color: "gray", m: 0 }}>
                  <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                </p>
              </div>
            </div>

            <div
              sx={{
                mt: 6,
                width: "100%",
                position: "relative",
                boxSizing: "border-box",
                height: "1px",
                backgroundColor: "#e7edf1",
              }}
            ></div>
          </div>
          <div sx={styles.img}>
            {" "}
            <img
              alt={"press logo"}
              src={article["Media"]}
              sx={{
                width: "100%",
                maxHeight: "100%",
              }}
            />
          </div>
          <div sx={{ width: "100%", mb: 10 }}>
            <ReactMarkdown children={article["Content"]} />
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles");

  return {
    paths: articlesRes.map((article) => ({
      params: {
        slug: article["Slug"],
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params, preview = null } = context;

  // const pageContext = {
  //   locale,
  //   locales,
  //   defaultLocale,
  // };

  const footer = await getFooter();
  const articlesRes = await fetchAPI(`/articles?Slug=${params.slug}`);
  const categories = await fetchAPI("/categories");

  return {
    props: {
      article: articlesRes[0],
      categories,
      footer,
      // pageContext
    },
    revalidate: 1,
  };
}

const styles = {
  wrapper: {
    position: "relative",
    top: "67px",
    pt: 11,
    position: "relative",
    maxWidth: "820px",
    mx: "auto",
    boxSizing: "border-box",
    px: [4, 4, 4, 4, 2, 2, 2, 2],
  },
  header: {
    mb: 8,
    textAlign: "left",
    title: {
      fontSize: [5, 5, 5, 11],
      color: "heading_primary",
      lineHeight: 1.4,
      fontWeight: "bolder",
      mb: [2, null, 3],
    },
    metadata: {
      textTransform: "capitalize",
      fontSize: 2,
      listStyle: "none",
      display: "flex",
      gap: 3,
      m: 0,
      p: 0,
    },

    author: {
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
  },

  avatar: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    overflow: "hidden",
  },

  img: {
    borderRadius: "8px",
    overflow: "hidden",
    mx: "auto",
    ml: "auto",
    mb: 7,
    // width: ['80px', null, null, '90px', null, 'auto'],
  },
};
