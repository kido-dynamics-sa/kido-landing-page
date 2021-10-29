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

import { getBanners } from "utils/api"

export default function IndexPage({ banners }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="NextJS Landing Page" />
        <Banner banners={banners} />
        <KeyFeature />
        <ServiceSectionVideo />
        <CoreFeature />
        <ServiceSection />
        {/* <Feature /> */}
        <WorkFlow />
        {/* <Package /> */}
        <InternationalPresence />
        <TeamSection />
        <TestimonialCard />
        <SubscribeUs />
      </Layout>
    </ThemeProvider>
  );
}

export async function getStaticProps() {
  const banners = await getBanners();
  return {
    props: { banners },
    revalidate: 60
  };
}
