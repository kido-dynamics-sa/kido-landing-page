import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";

import SEO from "components/seo";
import Layout from "components/layout";
import Careers from "../sections/careers";
import SubscribeUs from "../sections/subscribe-us";

import { getFooter, fetchAPI } from "utils/api";

export default function IndexPage({
  companyCulture,
  subscribeUsData,
  sections,
  footer,
  pageContext,
}) {
  return (
    <ThemeProvider theme={theme}>
      <Layout pageContext={pageContext} footer={footer[0]} onlyLogo>
        <SEO title="Kido Dynamics - Careers" />
        <h1 style={{ display: "none" }}>Kido Dynamics - Careers</h1>
        <Careers companyCulture={companyCulture}/>
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
  const sections = await fetchAPI("/sections");
  const subscribeUsData = await fetchAPI("/suscribe-us");
  const companyCulture = await fetchAPI("/company-culture");

  // const pageContext = {
  //   locale,
  //   locales,
  //   defaultLocale,
  // };

  return {
    props: {
      companyCulture,
      subscribeUsData,
      sections,
      footer,
      // pageContext
    },
    revalidate: 1,
  };
}
