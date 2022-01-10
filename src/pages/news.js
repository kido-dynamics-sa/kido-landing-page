import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";

import SEO from "components/seo";
import Layout from "components/layout";

import News from "../sections/news";

import { getFooter, fetchAPI } from "utils/api"


export default function IndexPage({ mainNew, news, footer, pageContext }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout pageContext={pageContext} footer={footer[0]} onlyLogo>
        <SEO title="Kido Dynamics Landing Page" />
        <News mainNew={mainNew} news={news} />
      </Layout>
    </ThemeProvider>
  );
}

export async function getStaticProps(context) {
    const { params, locale, locales, defaultLocale, preview = null } = context;
  
    const footer = await getFooter();
    const news = await fetchAPI(`/news`);
    const mainNew = await fetchAPI(`/main-new`);
  
    const pageContext = {
      locale,
      locales,
      defaultLocale,
    };
  
    return {
      props: { mainNew, news, footer, pageContext },
      revalidate: 60,
    };
  }
  