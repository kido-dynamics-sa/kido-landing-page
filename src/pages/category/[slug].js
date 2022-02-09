import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import Articles from "components/articles";
import Layout from "components/layout";
import SEO from "components/seo";
import { fetchAPI, getFooter } from "utils/api";

const Category = ({ category, categories, footer, articles, pageContext }) => {

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
      <SEO
        title={`Kido Dynamics - ${category["Name"].charAt(0).toUpperCase() + category["Name"].slice(1)}`}
        description={`All ${category["Name"]} articles`}
      />
        <h1 style={{display: 'none'}}>{`Kido Dynamics - ${category["Name"].charAt(0).toUpperCase() + category["Name"].slice(1)}`}</h1>
        <div>
          <div>
            <Articles articles={articles} category={category}/>
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  );
};

export async function getStaticPaths(...args) {
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
  const { params, preview = null } = context;

  // const pageContext = {
  //   locale,
  //   locales,
  //   defaultLocale,
  // };

  const footer = await getFooter();
  const matchingCategories = await fetchAPI(`/categories?Slug=${params.slug}`);
  const allCategories = await fetchAPI("/categories");
  const articles = await fetchAPI("/articles");


  return {
    props: {
      category: matchingCategories[0],
      categories: allCategories,
      articles: articles.filter(ar => ar.category.id === matchingCategories[0].id),
      footer,
      // pageContext,
    },
    revalidate: 1,
  };
}

export default Category;
