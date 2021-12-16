import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";

import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "../sections/banner";
import KeyFeature from "../sections/key-feature";
import ServiceSection from "../sections/service-section";
import ServiceSectionVideo from "../sections/service-section-video";
import Feature from "../sections/feature";
import InternationalPresence from "../sections/international-presence";
import CoreFeature from "../sections/core-feature";
import WorkFlow from "../sections/workflow";
import Package from "../sections/package";
import TeamSection from "../sections/team-section";
import TestimonialCard from "../sections/testimonial";
import SubscribeUs from "../sections/subscribe-us";

import {
  getBanners,
  getFeatureCardColumns,
  getSections,
  getTextFeatures,
  getWorkFlowItems,
  getTestimonialItems,
  getFooter,
  getSubscribeUs,
} from "utils/api";

export default function IndexPage({
  banners,
  sections,
  featureCardColumns,
  textFeatures,
  workFlowItems,
  testimonialItems,
  footer,
  subscribeUsData,
  pageContext,
}) {
  return (
    <ThemeProvider theme={theme}>
      <Layout pageContext={pageContext} footer={footer[0]}>
        <SEO title="Kido Dynamics Landing Page" />
        <Banner banners={banners} />
        <KeyFeature
          featureCardColumns={featureCardColumns}
          section={sections.find((a) => a.name === "FeatureCardsSection")}
        />
        <ServiceSectionVideo
          data={textFeatures.find((a) => a.name === "Tourism")}
        />
        <CoreFeature data={textFeatures.find((a) => a.name === "Mobility")} />
        <ServiceSection data={textFeatures.find((a) => a.name === "Retail")} />
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
        <TeamSection section={sections.find((a) => a.name === "TeamSection")} />
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
  const { params, locale, locales, defaultLocale, preview = null } = context;

  const pageContext = {
    locale,
    locales,
    defaultLocale,
  };

  const banners = await getBanners(locale);
  const featureCardColumns = await getFeatureCardColumns();
  const sections = await getSections();
  const textFeatures = await getTextFeatures();
  const workFlowItems = await getWorkFlowItems();
  const testimonialItems = await getTestimonialItems();
  const footer = await getFooter();
  const subscribeUsData = await getSubscribeUs();

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
      pageContext,
    },
    revalidate: 60,
  };
}
