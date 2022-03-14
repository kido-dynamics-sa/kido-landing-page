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
                top: "24%",
                left: "-10%",
                zIndex: -1,
              }}
            ></div>
            <Heading as="h2" sx={styles.title}>
              Frontend Developer
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
              <Text as="p" sx={{ mt: 2 }}>
                <strong>Position: </strong> Frontend Developer
              </Text>
              <Text as="p" sx={{ mt: 2 }}>
                <strong>Location: </strong> Spain, Portugal or LATAM
              </Text>
              <Text as="p" sx={{ mt: 2 }}>
                <strong>Languages: </strong> Spanish and English
              </Text>
              <Text as="p" sx={{ mt: 2 }}>
                <strong>Requirements: </strong>
              </Text>
              <Text as="p">- At least 3 years of experience in Front Development.</Text>
              <Text as="p">- A team-player mindset always willing to learn new technologies and best practices. </Text>
              <Text as="p">- Capacity of multitasking between different projects when necessary. </Text>
              <Text as="p">- Good problem-solving skills and design solutions analysis. </Text>
              <Text as="p">- Knowledge and experience in component-based software engineering (preferably <strong>React</strong>). </Text>
              <Text as="p">- <span sx={{textDecoration: 'underline'}}>Tech Stack:</span> JavaScript, HTML5, CSS3 and Knowledge of API REST concepts. </Text>
              <Text as="p">- Use of GIT as control versions software. </Text>
              <Text as="p" sx={{ mt: 2 }}>
                <strong>Nice to have: </strong>
              </Text>
              <Text as="p">- Knowledge in TypeScript. </Text>
              <Text as="p">- Experienced with React monorepos (libraries like nx, lerna) </Text>
              <Text as="p">- Experienced with Next.js </Text>
            </Box>

            <Box sx={{ mt: 7 }}>
              <Heading as="h4" sx={{ mb: 3 }}>
                ✉️ How to proceed?
              </Heading>
              <Text as="p">
                If you check in all these requirements,{" "}
                <strong sx={{ userSelect: 'none' }}>
                  write us to info@kidodynamics.com
                </strong>{" "}
                and you make the questions: Ask us anything you consider
                important, we want to know more about you and you will want to
                know more about us!
              </Text>
            </Box>

            <Box sx={{ width: "100%", mx: "auto", my: 6, textAlign: "center" }}>
              <Heading as="h4" sx={{ mb: 3 }}>
                We hope to see you soon!
              </Heading>
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
  const { params, preview = null } = context;

  // const pageContext = {
  //   locale,
  //   locales,
  //   defaultLocale,
  // };
  // const pageContext = context
  
  return {
    props: {  },
    revalidate: 1,
  };
}
