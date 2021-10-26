import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import ServiceSection from '../sections/service-section';
import ServiceSectionVideo from '../sections/service-section-video';
import Feature from '../sections/feature';
import InternationalPresence from '../sections/international-presence';
import CoreFeature from '../sections/core-feature';
import WorkFlow from '../sections/workflow';
import Package from '../sections/package';
import TeamSection from '../sections/team-section';
import TestimonialCard from '../sections/testimonial';
import SubscribeUs from '../sections/subscribe-us';


export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="NextJS Landing Page" />
          <Banner />
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
