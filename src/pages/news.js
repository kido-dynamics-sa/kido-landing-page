import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";

import SEO from "components/seo";
import Layout from "components/layout";
import SubscribeUs from "../sections/subscribe-us";

import News from "../sections/news";

import { getFooter, fetchAPI } from "utils/api";

export default function IndexPage({
  sections,
  subscribeUsData,
  mainNew,
  news,
  footer,
  pageContext,
}) {
  return (
    <ThemeProvider theme={theme}>
      <Layout pageContext={pageContext} footer={footer[0]} onlyLogo>
        <SEO title="Kido Dynamics - News"/>
        <h1 style={{display: 'none'}}>Kido Dynamics - News</h1>
        <News mainNew={mainNew} news={news} />
        <SubscribeUs
          subscribeUsData={subscribeUsData}
          section={sections.find((a) => a.name === "SubscribeUsSection")}
        />
      </Layout>
    </ThemeProvider>
  );
}

export async function getStaticProps(context) {
  // const { params, locale, locales, defaultLocale, preview = null } = context;
  const pageContext = context;

  const footer = await getFooter();
  const news = await fetchAPI(`/news`);
  const mainNew = await fetchAPI(`/main-new`);
  const subscribeUsData = await fetchAPI("/suscribe-us");
  const sections = await fetchAPI(`/sections`);

  // const pageContext = {
  //   locale,
  //   locales,
  //   defaultLocale,
  // };

  return {
    props: {
      sections,
      subscribeUsData,
      mainNew,
      news,
      footer,
      // pageContext
    },
    revalidate: 1,
  };
}
