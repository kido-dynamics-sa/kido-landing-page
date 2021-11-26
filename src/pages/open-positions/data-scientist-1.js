/** @jsxRuntime classic */
/** @jsx jsx */
import {
  jsx,
  Box,
  Heading,
  Text,
  Button,
  Link,
  ThemeProvider,
  Container,
} from "theme-ui";
import React, { useState } from "react";
import theme from "theme";
import Sticky from "react-stickynode";

import Header from "components/header/header";

export default function OpenPosition({ pageContext }) {
  const [isSticky, setIsSticky] = useState(false);

  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
          <Header
            className={`${isSticky ? "sticky" : "unSticky"}`}
            pageContext={pageContext}
            onlyLogo
          />
        </Sticky>
        <main
          id="open-position"
          sx={{
            variant: "layout.main",
            pt: 10,
            mx: "auto",
            maxWidth: "760px",
          }}
        >
          <Container>
            <div
              sx={{
                background: "linear-gradient(180deg,#f2f4ff,#fff)",
                height: "100%",
                width: "120%",
                position: "absolute",
                top: "30%",
                left: "-10%",
                zIndex: -1,
              }}
            ></div>
            <Heading as="h2" sx={styles.title}>
              Senior Data Scientist / Engineer
            </Heading>
            <Heading as="h3" sx={styles.subTitle}>
              REMOTE / FULL-TIME
            </Heading>
            <Box sx={{ mt: 8 }}>
              <Heading as="h4" sx={{ mb: 3 }}>
                👋 Who we are?
              </Heading>
              <Text as="p">
                Kido Dynamics is a young and growing company with operations in
                LATAM, Europe, Middle East, and Southwest Asia. Our team is
                composed by 20 talented professionals including PhDs, engineers,
                developers, marketing and sales experts. We are creating the
                technology that will become the standard for human mobility
                analytics, using mobile network activity as data source with a
                private-by-design approach. We transform the unstructured, noisy
                and sometimes incomplete raw data into valuable and intuitive
                metrics for mobility, transportation, tourism, retail and more.
                Our goal is to democratize the access to Big Data to guarantee a
                sustainable, data-driven future for our cities and
                transportation networks.
              </Text>
            </Box>

            <Box sx={{ mt: 7 }}>
              <Heading as="h4" sx={{ mb: 3 }}>
                🤘 Why work with us?
              </Heading>
              <Text as="p">
                We are building a technology made to stay for years, defining
                future standards and solving challenging problems. Please note
                that what we do is not easy! We are goal-based, ambitious, and
                open to creative solutions. If you work remotely, are tired of
                repetitive tasks, love intellectual challenges and
                out-of-the-box approaches, combine individual with team work,
                want to contribute to the future and grow together with the
                company, this is your place.
              </Text>
            </Box>

            <Box sx={{ mt: 7 }}>
              <Heading as="h4" sx={{ mb: 3 }}>
                📌 What we need?
              </Heading>
              <Text as="p">
                <strong>Position: </strong> Senior Data Scientist / Engineer
              </Text>
              <Text as="p">
                <strong>Location: </strong> Spain, Portugal or LATAM
              </Text>
              <Text as="p">
                <strong>Languages: </strong> Spanish and English
              </Text>
              <Text as="p">
                <strong>Requirements: </strong>
              </Text>
              <Text as="p">- Full familiar with python</Text>
              <Text as="p">
                - Full familiar with AWS (EC2, S3, Athena, etc)
              </Text>
              <Text as="p">
                - Full familiar with big data DB formats and systems, and
                SQL-ish languages (parquet, presto)
              </Text>
              <Text as="p">
                - Training in statistics (studies in mathematics, physics,
                computer science, etc, with explicit courses in statistics or
                related)
              </Text>
              <Text as="p">
                - Experience in mathematical modelling and computer simulations
              </Text>
              <Text as="p">
                - Experience in writing and documenting (English)
              </Text>
              <Text as="p">
                {" "}
                - Optional: real-world experience with AI tools
              </Text>
              <Text as="p">
                {" "}
                - Optional: familiar with OSM and services (osmium, orsm, etc){" "}
              </Text>
              <Text as="p">
                - Optional: familiar with distributed computation (py-Spark)
                Expected responsibilities:{" "}
              </Text>
              <Text as="p">- Developing internal tools for data analysis</Text>
            </Box>

            <Box sx={{ mt: 7 }}>
              <Heading as="h4" sx={{ mb: 3 }}>
                ✉️ How to proceed?
              </Heading>
              <Text as="p">
                If you check in all these requirements,{" "}
                <strong>write us to ahernando@kidodynamics.com</strong> and you
                make the questions: Ask us anything you consider important, we
                want to know more about you and you will want to know more about
                us!
              </Text>
              <Text as="p">
                If our response makes sense to you and want to continue, we will
                propose a technical exercise with real data. One part of the
                exercise is done in real-time, the rest can be done at your own
                timing (we understand you are a busy person). Once at this
                point, we will launch an offer based on the outcome of the
                interaction. We are flexible and we want to make sure you feel
                comfortable with your potential responsibilities.
              </Text>
            </Box>

            <Box sx={{ width: "100%", mx: "auto", my: 6, textAlign: "center" }}>
              <Heading as="h4" sx={{mb: 3}}>We hope to see you soon!</Heading>
              <Text sx={styles.copyright}>
                © {new Date().getFullYear()} Kido Dynamics. All rights reserved
              </Text>
            </Box>
          </Container>
        </main>
      </React.Fragment>
    </ThemeProvider>
  );
}

const styles = {
  title: {
    fontSize: ["24px", null, "28px", "30px", "36px", "42px", null, "48px"],
    color: "heading_secondary",
    lineHeight: [1.3, null, null, null, 1.2],
    fontWeight: "700",
  },
  subTitle: {
    fontSize: [0, null, 1],
    color: "primary",
    textTransform: "uppercase",
    fontWeight: "700",
    lineHeight: 1.5,
    letterSpacing: ["1.5px", null, "2px"],
    mt: 2,
  },

  copyright: {
    my: 5,
    mx: "auto",
    fontSize: [1, "15px"],
    width: "100%",
  },
};

export async function getStaticProps(context) {
  const { params, locale, locales, defaultLocale, preview = null } = context;

  const pageContext = {
    locale,
    locales,
    defaultLocale,
  };

  return {
    props: { pageContext },
    revalidate: 60,
  };
}
