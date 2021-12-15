/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box } from "theme-ui";

import Image from "next/image";
import SectionHeader from "components/section-header";
import Map from "../../public/assets/map.png";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

let AnimatedBox = motion.custom(Box);

const animationProps = {
  initial: { opacity: 0, scale: 0.75 },
  transition: { ease: "easeOut", duration: 0.75 },
};

export default function InternationalPresence({ section }) {
  const { ref, inView } = useInView({
    threshold: 0.25,
  });
  return (
    <section ref={ref} sx={{ variant: "section.feature" }}>
      <Container sx={styles.container}>
        <SectionHeader slogan={section.slogan} title={section.title} />
        <AnimatedBox
          {...animationProps}
          animate={inView ? { opacity: 1, scale: 1 } : ""}
        >
          <Image src={Map} alt="worlwilde presence map" />
        </AnimatedBox>
      </Container>
    </section>
  );
}

const styles = {
  container: {
    mt: 8,
  },
};
