import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";

import SEO from "components/seo";
import Layout from "components/layout";
import AboutUs from "../sections/about-us";
import SubscribeUs from "../sections/subscribe-us";

import { getFooter, fetchAPI } from "utils/api";

export default function IndexPage({
  subscribeUsData,
  sections,
  aboutUs,
  companyCulture,
  footer,
  teamMembers,
  pageContext
}) {
  return (
    <ThemeProvider theme={theme}>
      <Layout pageContext={pageContext} footer={footer[0]} onlyLogo>
        <SEO title="Kido Dynamics - About Us"/>
        <h1 style={{display: 'none'}}>Kido Dynamics - About Us</h1>
        <AboutUs
          aboutUs={aboutUs}
          companyCulture={companyCulture}
          teamSection={sections.find((a) => a.name === "TeamSection")}
          teamMembers={teamMembers}
        />

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
  const aboutUs = await fetchAPI("/about-us");
  const companyCulture = await fetchAPI("/company-culture");
  const subscribeUsData = await fetchAPI("/suscribe-us");
  const teamMembers = await fetchAPI("/team-members");

  // const pageContext = {
  //   locale,
  //   locales,
  //   defaultLocale,
  // };

  return {
    props: {
      subscribeUsData,
      sections,
      aboutUs,
      companyCulture,
      footer,
      teamMembers
      // pageContext
    },
    revalidate: 1,
  };
}
