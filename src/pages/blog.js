import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import Articles from "components/articles";
import Layout from "components/layout";
import SEO from "components/seo";
import { fetchAPI, getFooter } from "utils/api";

const Home = ({ articles, categories, footer, pageContext }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout pageContext={pageContext} footer={footer[0]} categories={categories} onlyLogo isBlog>
        {/* <Seo seo={homepage.attributes.seo} /> */}
        <SEO title="Kido Dynamics Blog" />
        <div>
          <div>
            {/* <h1>{homepage.attributes.hero.title}</h1> */}
            <Articles articles={articles} />
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  );
};

export async function getStaticProps(context) {
  const { params, locale, locales, defaultLocale, preview = null } = context;

  const pageContext = {
    locale,
    locales,
    defaultLocale,
  };

  const footer = await getFooter();
  // Run API calls in parallel
  const [articles, categories] = await Promise.all([
    fetchAPI("/articles", { populate: "*" }),
    fetchAPI("/categories", { populate: "*" }),
    // fetchAPIBlog("/homepage", {
    //   populate: {
    //     hero: "*",
    //     seo: { populate: "*" },
    //   },
    // }),
  ]);

  return {
    props: {
      footer,
      pageContext,
      articles,
      categories,
    },
    revalidate: 1,
  };
}

export default Home;
