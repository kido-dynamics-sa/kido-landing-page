import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";

import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "../sections/banner";
import KeyFeature from "../sections/key-feature";
import ServiceSection from "../sections/service-section";
import ServiceSectionVideo from "../sections/service-section-video";
import InternationalPresence from "../sections/international-presence";
import CoreFeature from "../sections/core-feature";
import WorkFlow from "../sections/workflow";
import TestimonialCard from "../sections/testimonial";
import MainNews from "../sections/mainNews";
import SubscribeUs from "../sections/subscribe-us";

import { fetchAPI } from "utils/api";
import Partners from "sections/partners";

export default function IndexPage({
  banners,
  sections,
  featureCardColumns,
  textFeatures,
  workFlowItems,
  testimonialItems,
  footer,
  subscribeUsData,
  news,
  pageContext,
}) {
  return (
    <ThemeProvider theme={theme}>
      <Layout pageContext={pageContext} footer={footer[0]}>
        <SEO
          title="Kido Dynamics - Understanding People's Mobility Behaviour"
          
        />
        <Banner banners={banners} />
        <Partners />
        <KeyFeature
          featureCardColumns={featureCardColumns}
          section={sections.find((a) => a.name === "FeatureCardsSection")}
        />
        <ServiceSectionVideo
          data={textFeatures.find((a) => a.name === "Tourism")}
        />
        <CoreFeature data={textFeatures.find((a) => a.name === "Mobility")} />
        <ServiceSection data={textFeatures.find((a) => a.name === "Retail")} />

        <MainNews
          news={news}
          // section={sections.find((a) => a.name === "MainNews")}
        />
        {/* <Feature /> */}
        <WorkFlow
          workFlowItems={workFlowItems}
          section={sections.find((a) => a.name === "WorkFlowSection")}
        />
        {/* <Package /> */}
        <InternationalPresence
          section={sections.find(
            (a) => a.name === "InternationalPresenceSection"
          )}
        />
        <TestimonialCard
          testimonialItems={testimonialItems}
          section={sections.find((a) => a.name === "TestimonialSection")}
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
  const { params, preview = null } = context;

  // const pageContext = {
    // locale,
    // locales,
    // defaultLocale,
  // };

  const [
    banners,
    featureCardColumns,
    sections,
    textFeatures,
    workFlowItems,
    testimonialItems,
    footer,
    subscribeUsData,
    news
  ] = await Promise.all([
    // fetchAPI(`/banners?_locale=${locale}`),
    fetchAPI(`/banners?_locale=en`),
    fetchAPI("/feature-card-columns"),
    fetchAPI("/sections"),
    fetchAPI("/text-features"),
    fetchAPI("/work-flow-items"),
    fetchAPI("/testimonial-items"),
    fetchAPI("/footers"),
    fetchAPI("/suscribe-us"),
    fetchAPI(`/news`)
    // fetchAPIBlog("/homepage", {
    //   populate: {
    //     hero: "*",
    //     seo: { populate: "*" },
    //   },
    // }),
  ]);

  return {
    props: {
      banners,
      featureCardColumns,
      sections,
      textFeatures,
      workFlowItems,
      testimonialItems,
      footer,
      subscribeUsData,
      news,
      // pageContext,
    },
    revalidate: 1,
  };
}
