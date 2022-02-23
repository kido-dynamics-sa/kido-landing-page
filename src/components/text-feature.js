/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Heading, Text, Button, Link } from "theme-ui";

export default function TextFeature({
  subTitle,
  title,
  description,
  btnName,
  btnURL = "",
  color = "primary",
  shadow = "rgb(57 118 239 / 57%) 0px 9px 20px -5px",
  shadowHover = "rgb(57 118 239 / 57%) 0px 9px 40px -5px",
  maxWidth,
}) {
  return (
    <Box sx={styles.card}>
      <Box
        sx={{
          ...styles.wrapper,
          width: maxWidth ? ["100%", "100%", "100%", "750px"] : "100%",
        }}
      >
        <Text as="p" sx={{ ...styles.wrapper.subTitle, color: color }}>
          {subTitle}
        </Text>
        <Heading as="h2" sx={{ ...styles.wrapper.title }}>
          {title}
        </Heading>
      </Box>

        {description &&
        (description.includes("- ") ? (
          <ul
          className="description"
          sx={{
            ...styles.description,
            width: maxWidth ? ["100%", "100%", "100%", "750px"] : "100%",
          }}
        >
            {description.split("-").map((d) => (
              <li>
                <Text as="p" sx={{ lineHeight: 1.8 }}>
                  {d}
                </Text>
              </li>
            ))}
            </ul>) : (
            <Text as="p" sx={styles.description} 
            className="description">
              {description}
            </Text>
          ))}
     
      {btnName &&
        (btnURL[0] !== "#" ? (
          <a target="_blank" href={btnURL} rel="noopener noreferrer">
            <Button
              variant="primary"
              aria-label={btnName}
              sx={{
                bg: color,
                boxShadow: shadow,
                "&:hover": {
                  boxShadow: shadowHover,
                },
              }}
            >
              {btnName}
            </Button>
          </a>
        ) : (
          <a href={btnURL}>
            <Button
              variant="primary"
              aria-label={btnName}
              sx={{
                bg: color,
                boxShadow: shadow,
                "&:hover": {
                  boxShadow: shadowHover,
                },
              }}
            >
              {btnName}
            </Button>
          </a>
        ))}
    </Box>
  );
}

const styles = {
  card: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    flexShrink: 0,
    a: {
      m: ["0 auto", null, null, 0],
    },
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: -1,
    subTitle: {
      fontSize: [0, null, 1],
      color: "primary",
      textTransform: "uppercase",
      fontWeight: "700",
      mb: [2, 3],
      lineHeight: 1.5,
      letterSpacing: ["1.5px", null, "2px"],
    },
    title: {
      fontSize: ["24px", null, "28px", "30px", "36px", "42px", null, "48px"],
      color: "heading_secondary",
      lineHeight: [1.3, null, null, null, 1.2],
      fontWeight: "700",
      letterSpacing: "-.5px",
      mb: 5,
    },
  },
  description: {
    m: 0,
    p: 0,
    pl: 5,
    fontSize: ["15px", 2, null, null, null, "17px", null, 3],
    fontWeight: 400,
    lineHeight: [1.85, null, null, 2, null, "2.2"],
    color: "text_secondary",
    mb: "30px",
  },
};
