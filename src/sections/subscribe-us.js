/** @jsxRuntime classic */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button} from "theme-ui";
import { rgba } from "polished";
import SectionHeader from "components/section-header";
import { useRouter } from "next/router";

const SubscribeUs = ({ subscribeUsData, section }) => {
  const router = useRouter()
  return (
    <Box
      as="section"
      sx={styles.section}
      variant="section.subscribe"
      id="contact"
    >
      <Container>
        <Box sx={styles.contentWrapper}>
          <SectionHeader
            slogan={section.slogan}
            title={section.title}
            isWhite={true}
          />
          <Button
            variant="secondary"
            sx={{ bg: "white", borderColor: "white", mt: [-2, -2, -2, -7, -7, -7, -7] }}
            onClick={() => router.push('/contact-us')}
          >
            {subscribeUsData.button}
          </Button>
          
        </Box>
      </Container>
    </Box>
  );
};

export default SubscribeUs;

const styles = {
  section: {
    height: ["35vh", "35vh", "35vh", "35vh", "35vh", "35vh"],
    // pb: 5,
    mx: [6,4,4,5,10,10,10]
  },
  contentWrapper: {
    backgroundColor: "primary",
    // background:
    //   "linear-gradient(111deg, rgba(226,72,124,1) 0%, rgba(98,127,255,1) 61%, rgba(57,118,239,1) 100%)",
    borderRadius: "12px",
    // py: ["40px", "40px", "40px 110px 50px", "50px 50px", "40px"],
    // gap: ["25px", "25px", "50px", "50px", "50px"],
    // display: ["block", null, null, "block", "grid"],
    alignItems: "center",
    // gridTemplateColumns: ["repeat(2, 1fr)"],
    display: 'flex',
    flexDirection: 'column',
    px: [1, 1, 1, 6, 6, 6, 6],
    py: 6
  },
  heading: {
    textAlign: "center",
    // mb: ["30px", null, null, null, 0],
    // ml: 0,
    h2: {
      fontSize: [6, null, null, null, null, 8, 9],
    },
    // p: {
    //   lineHeight: 1.87,
    //   marginTop: 1,
    //   ml: ["auto", null, null, null, 0],
    //   mr: ["auto", null, null, null, 0],
    //   maxWidth: 420,
    // },
  },
  subscribe: {
    ".email-input": {
      mr: [0, null, null, "15px"],
      minHeight: ["50px", "50px", "60px"],
    },
    button: {
      minHeight: ["50px", "50px", "60px"],
      fontSize: ["14px", "14px", "16px"],
      mt: ["15px", null, null, 0],
    },
  },
  inputGroup: {
    flexDirection: ["column", null, null, "row"],
  },
  checkbox: {
    mt: ["24px"],
    label: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: 1.14,
      color: rgba("#9095AD", 0.9),
      zIndex: 10,
      svg: {
        path: {
          fill: "#EFF3F7",
        },
      },
      "&.checked": {
        svg: {
          path: {
            fill: "primary",
          },
        },
      },
    },
  },
};
