/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Button, Text } from "theme-ui";

import SectionHeader from "components/section-header";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import InternationalMap from "components/internationalMap";
import { FaMouse, FaTimes } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import { useState } from "react";

let AnimatedBox = motion.custom(Box);

const animationProps = {
  initial: { opacity: 0, scale: 0.75 },
  transition: { ease: "easeOut", duration: 0.75 },
};

const countriesMapInfo = [
  {
    name: "Spain",
    flag: "🇪🇸",
    platformName: "Kido Platform",
    products: ["tourism", "mobility", "retail"],
    path: "https://app.kido-es.kidodynamics.com",
  },
  {
    name: "Portugal",
    flag: "🇵🇹",
    platformName: "Altice Geoanalytics",
    products: ["tourism", "mobility", "retail"],
    path: "https://geoanalytics.altice-empresas.pt/",
  },
  {
    name: "Switzerland",
    flag: "🇨🇭",
    platformName: "Kido Platform",
    products: ["tourism", "mobility", "retail"],
    path: "https://app.kido-ch.kidodynamics.com/",
  },
  {
    name: "Brazil",
    flag: "🇧🇷",
    platformName: "Claro Brasil",
    products: ["mobility"],
    path: "https://app.claro-br.kidodynamics.com/",
  },
  {
    name: "Chile",
    flag: "🇨🇱",
    platformName: "Claro Chile",
    products: ["mobility"],
    path: "https://app.claro-cl.kidodynamics.com/",
  },
  {
    name: "Malaysia",
    flag: "",
    platformName: "",
    products: ["mobility"],
    path: "",
  },
  {
    name: "Kuwait",
    flag: "",
    platformName: "",
    products: ["tourism", "mobility", "retail"],
    path: "",
  },
  {
    name: "Qatar",
    flag: "",
    platformName: "",
    products: ["tourism", "mobility", "retail"],
    path: "",
  },
];

const CountryCard = ({ country, onClose }) => (
  <div sx={styles.card}>
    <div
      sx={{ alignSelf: "end", m: 0, mb: "-14px", cursor: "pointer" }}
      onClick={onClose}
    >
      <FaTimes />
    </div>
    <h4>{country.platformName}</h4>

    <div sx={styles.subtitle}>
      <span
        sx={{
          fontSize: "16px",
          my: 0,
          mr: 1,
        }}
      >
        {country.flag}
      </span>
      <span
        sx={{
          fontSize: "13px",
          fontWeight: 400,
        }}
      >
        {country.name}
      </span>
    </div>
    <h5 sx={{ mt: 2, mb: 0 }}>Available Products</h5>
    <div sx={styles.productSection}>
      {country.products.includes("tourism") && (
        <img
          src={"/assets/key-feature/tourism.svg"}
          alt={"tourism"}
          data-tip="Tourism"
        />
      )}
      {country.products.includes("mobility") && (
        <img
          src={"/assets/key-feature/mobility.svg"}
          alt={"mobility"}
          data-tip="Mobility"
        />
      )}
      {country.products.includes("retail") && (
        <img
          src={"/assets/key-feature/retail.svg"}
          alt={"retail"}
          data-tip="Retail"
        />
      )}
      <ReactTooltip place="bottom" type="dark" effect="float" />
      <ReactTooltip place="bottom" type="dark" effect="float" />
      <ReactTooltip place="bottom" type="dark" effect="float" />
    </div>
    {country.platformName !== "Kido Platform" && (
      <div sx={{ ...styles.subtitle, alignSelf: "center", mb: 2 }}>
        <span
          sx={{
            fontSize: "13px",
            fontWeight: 400,
          }}
        >
          Powered by <strong>Kido Dynamics</strong>
        </span>
      </div>
    )}
    <div sx={{ mx: "auto", mt: 1 }}>
      <a target="_blank" href={country.path} rel="noopener noreferrer">
        <Button
          className="donate__btn"
          variant="primary"
          aria-label="Get started"
        >
          Visit Country App
        </Button>
      </a>
    </div>
  </div>
);

export default function InternationalPresence({ section }) {
  const { ref, inView } = useInView({
    threshold: 0.25,
  });
  const [open, onToggleModal] = useState(false);
  const [country, setCountry] = useState({});

  const selectCountry = (country) => {
    let selectedCountry = countriesMapInfo.find((a) => a.name === country);
    if (selectedCountry) {
      setCountry(selectedCountry);
      onToggleModal(true);
    }
  };

  return (
    <section ref={ref} sx={{ variant: "section.feature" }}>
      <Container sx={styles.container}>
        <SectionHeader slogan={section.slogan} title={section.title} />
        <Text
          as="p"
          sx={{
            variant: "text.heroTerciary",
            textAlign: "center",
            mb: [0, 0, 0, 0, 4],
            p: 0,
          }}
        >
          Click to discover <FaMouse sx={{ ml: 1 }} />
        </Text>
        <AnimatedBox
          {...animationProps}
          animate={inView ? { opacity: 1, scale: 1 } : ""}
          sx={{ position: "relative", m: 0, p: 0 }}
        >
          <InternationalMap onOpen={selectCountry} />
          {open && (
            <div
              sx={{
                bg: "#f2f2f260",
                // opacity: 0.5,
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 100,
                display: "grid",
                placeItems: "center",
              }}
            >
              <CountryCard
                country={country}
                onClose={() => onToggleModal(false)}
              />
            </div>
          )}
        </AnimatedBox>
      </Container>
    </section>
  );
}

const styles = {
  container: {
    mt: 8,
  },
  map: {
    maxWidth: "100%",
    ".brazil": {
      cursor: "pointer",
      "&:hover": {
        width: "100px",
      },
    },
  },
  card: {
    bg: "#fff",
    borderRadius: "4px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    py: 4,
    px: 5,
    minWidth: "280px",
    boxShadow: "0px 6px 30px rgba(38, 78, 118, 0.1)",
    h4: {
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
      m: 0,
    },
    gap: 0,
  },

  subtitle: {
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  productSection: {
    display: "flex",
    justifyContent: "center",
    gap: 5,
    bg: "#edf1f9",
    fontSize: 7,
    fontWeight: 600,
    py: 3,
    px: 4,
    my: 2,
    mb: 3,
    borderRadius: "4px",
    img: {
      maxWidth: "36px",
      fontSize: "10px",
      fontWeight: 300,
      cursor: "pointer",
    },
  },
};
