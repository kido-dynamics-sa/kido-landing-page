import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";

import SEO from "components/seo";
import Layout from "components/layout";
import KeyFeature from "../sections/careers/key-feature";


import { getFooter } from "utils/api"



export default function IndexPage({ footer, pageContext }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout pageContext={pageContext} footer={footer[0]} onlyLogo>
        <SEO title="Kido Dynamics Landing Page" />
        <KeyFeature />
      </Layout>
    </ThemeProvider>
  );
}

export async function getStaticProps(context) {
  const { params, locale, locales, defaultLocale, preview = null } = context;

  const footer = await getFooter();

  const pageContext = {
    locale,
    locales,
    defaultLocale,
  };

  return {
    props: { footer, pageContext },
    revalidate: 60,
  };
}
