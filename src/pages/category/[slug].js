import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import Articles from "components/articles";
import Layout from "components/layout";
import SEO from "components/seo";
import { fetchAPI, getFooter } from "utils/api";

const Category = ({ category, categories, footer, pageContext }) => {
  // const seo = {
  //   metaTitle: category.attributes.name,
  //   metaDescription: `All ${category.attributes.name} articles`,
  // }

  return (
    <ThemeProvider theme={theme}>
      <Layout
        pageContext={pageContext}
        footer={footer[0]}
        categories={categories}
        category={category}
        onlyLogo
        isBlog
      >
        {/* <Seo seo={homepage.attributes.seo} /> */}
        <SEO title="Kido Dynamics Blog" />
        <div>
          <div>
            {/* <h1>{homepage.attributes.hero.title}</h1> */}
            <Articles articles={category.articles} category={category}/>
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  );
};

export async function getStaticPaths() {
  const categories = await fetchAPI("/categories");

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category["Slug"],
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params, locale, locales, defaultLocale, preview = null } = context;

  const pageContext = {
    locale,
    locales,
    defaultLocale,
  };

  const footer = await getFooter();
  const matchingCategories = await fetchAPI(`/categories?Slug=${params.slug}`);
  const allCategories = await fetchAPI("/categories");

  return {
    props: {
      category: matchingCategories[0],
      categories: allCategories,
      footer,
      pageContext,
    },
    revalidate: 1,
  };
}

export default Category;
