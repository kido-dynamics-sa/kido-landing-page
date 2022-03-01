import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";

import SEO from "components/seo";
import Layout from "components/layout";
import DigitalKit from "../sections/digital-kit";
import SubscribeUs from "../sections/subscribe-us";

import { getFooter, fetchAPI } from "utils/api";

const sectionSubscribeUs = {
  slogan: "¿Quieres saber más?",
  title: "Solicita tu bono Digital"
}

export default function IndexPage({
  // subscribeUsData,
  footer,
  featureCardColumns,
  pageContext
}) {
  return (
    <ThemeProvider theme={theme}>
      <Layout pageContext={pageContext} footer={footer[0]} onlyLogo>
        <SEO title="Kido Dynamics - Digital Kit"/>
        <h1 style={{display: 'none'}}>Kido Dynamics - Digital Kit</h1>
        <DigitalKit 
          featureCardColumns={featureCardColumns}/>

        <SubscribeUs
          subscribeUsData={{button: 'Contáctanos'}}
          section={sectionSubscribeUs}
        />
      </Layout>
    </ThemeProvider>
  );
}

export async function getStaticProps(context) {
  // const { params, locale, locales, defaultLocale, preview = null } = context;
  const pageContext = context;

  const footer = await getFooter();
  // const sections = await fetchAPI("/sections");
  // const subscribeUsData = await fetchAPI("/suscribe-us");
  const featureCardColumns = await fetchAPI("/feature-card-columns?_locale=es");

  // const pageContext = {
  //   locale,
  //   locales,
  //   defaultLocale,
  // };

  return {
    props: {
      // subscribeUsData,
      // sections,
      footer,
      featureCardColumns,
      // pageContext
    },
    revalidate: 1,
  };
}
