import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";

import SEO from "components/seo";
import Layout from "components/layout";
import AboutUs from "../sections/about-us";


import { getFooter, fetchAPI } from "utils/api"



export default function IndexPage({ aboutUs, companyCulture, footer, sections, pageContext }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout pageContext={pageContext} footer={footer[0]} onlyLogo>
        <SEO title="Kido Dynamics Landing Page" />
        <AboutUs
          aboutUs={aboutUs}
          companyCulture={companyCulture}
          teamSection={sections.find((a) => a.name === "TeamSection")} />
      </Layout>
    </ThemeProvider>
  );
}

export async function getStaticProps(context) {
  const { params, locale, locales, defaultLocale, preview = null } = context;

  const footer = await getFooter();
  const sections = await fetchAPI("/sections")
  const aboutUs = await fetchAPI("/about-us")
  const companyCulture = await fetchAPI("/company-culture")

  const pageContext = {
    locale,
    locales,
    defaultLocale,
  };

  return {
    props: { sections, aboutUs, companyCulture, footer, pageContext },
    revalidate: 60,
  };
}
