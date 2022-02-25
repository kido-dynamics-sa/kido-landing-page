/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState, useCallback, useEffect } from "react";
import { Container, Box, Grid, Text, Flex, Label, Button } from "theme-ui";
import { rgba } from "polished";

import TextFeature from "components/text-feature";

import Partners from "./partners";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Input from "components/input";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { fetchAPI } from "utils/api";

let AnimatedBox = motion.custom(Box);

const animationProps = {
  initial: { opacity: 0, scale: 0.75 },
  transition: { ease: "easeOut", duration: 0.75 },
};
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default function ContactUs({ subscribeUsData }) {
  const { ref, inView } = useInView({
    threshold: 0.15,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const LeadSchema = yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().required(),
    phone: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required(),
    company: yup.string().required(),
  });

  return (
    <section id="careers" sx={styles.banner}>
      <Container>
        <div ref={ref} sx={{ variant: "section.coreFeature", pt: 10 }}>
          <Container sx={styles.containerBox}>
            <Box sx={styles.contentBox}>
              <TextFeature
                subTitle={"Contact Us"}
                title={"Get in touch with us"}
                description={"Fill out the form and we will contact you"}
              />
              <Grid sx={styles.grid}>
                <Formik
                  validateOnBlur={false}
                  validateOnChange={false}
                  initialValues={{
                    email: "",
                    name: "",
                    phone: "",
                    company: "",
                    country: "",
                  }}
                  validationSchema={LeadSchema}
                  onSubmit={async (values, { setSubmitting, setErrors }) => {
                    setSuccess(false);
                    setLoading(true);
                    try {
                      const formObj = {
                        email: values.email,
                        name: values.name,
                        phone: values.phone,
                        company: values.company,
                        country: values.country
                      };
                      // await fetchAPI("/lead-form-submissions", {
                      //   method: "POST",
                      //   body: JSON.stringify({
                      //     email: values.email,
                      //     location: "whatever",
                      //   }),
                      // });
                     const res = await fetch("/api/contact", {
                        method: "POST",
                        headers: { "content-type": "application/json" },
                        body: JSON.stringify(formObj),
                     });
                      if (res.status !== 200) {
                        console.log('ERROR', res.statusText)
                        setErrors({ api:  "Error sending email, contact info@kidodynamics.com" });
                        setSuccess(false);
                      } else {
                        setSuccess(true);
                      }
                    } catch (err) {
                      console.log("err")
                      setErrors({ api:  "Error sending email, contact info@kidodynamics.com" });
                      setSuccess(false);
                    }
                    setLoading(false);
                    setSubmitting(false);
                  }}
                >
                  {({ errors, touched, isSubmitting }) => {
                    if (errors.email && touched.email) {
                      setSuccess(false);
                    }
                    return (
                      <Box sx={styles.subscribe}>
                        <Form>
                          <Flex sx={styles.form}>
                            <Flex sx={{ flexDirection: "column", gap: 1 }}>
                              <Label htmlFor="text" variant="styles.srOnly">
                                Name
                              </Label>
                              <Field type="text" name="name">
                                {({ field, form }) => (
                                  <Input
                                    type="text"
                                    {...field}
                                    className="email-input"
                                    placeholder={"Full Name"}
                                  />
                                )}
                              </Field>
                              <Text sx={{ color: "red", m: 0, p: 0 }}>
                                {errors.name}
                              </Text>
                            </Flex>

                            <Flex sx={{ flexDirection: "column", gap: 1 }}>
                              <Label htmlFor="email" variant="styles.srOnly">
                                Email
                              </Label>
                              <Field type="email" name="email">
                                {({ field, form }) => (
                                  <Input
                                    type="email"
                                    {...field}
                                    className="email-input"
                                    placeholder={"Email"}
                                  />
                                )}
                              </Field>
                              <Text sx={{ color: "red", m: 0, p: 0 }}>
                                {errors.email}
                              </Text>
                            </Flex>

                            <Flex sx={{ flexDirection: "column", gap: 1 }}>
                              <Label htmlFor="text" variant="styles.srOnly">
                                Company Name
                              </Label>
                              <Field type="text" name="company">
                                {({ field, form }) => (
                                  <Input
                                    type="text"
                                    {...field}
                                    className="company-input"
                                    placeholder={"Company Name"}
                                  />
                                )}
                              </Field>

                              <Text sx={{ color: "red", m: 0, p: 0 }}>
                                {errors.company}
                              </Text>
                            </Flex>
                            <Flex sx={{ flexDirection: "column", gap: 1 }}>
                              <Label htmlFor="text" variant="styles.srOnly">
                                Phone Number
                              </Label>
                              <Field type="tel" name="phone">
                                {({ field, form }) => (
                                  <Input
                                    type="text"
                                    {...field}
                                    className="phone-input"
                                    placeholder={"Phone Number"}
                                  />
                                )}
                              </Field>
                              <Text sx={{ color: "red", m: 0, p: 0 }}>
                                {errors.phone}
                              </Text>
                            </Flex>

                            <Flex sx={{ flexDirection: "column", gap: 1 }}>
                              <Label htmlFor="text" variant="styles.srOnly">
                                Country you are interested in
                              </Label>
                              <Field type="text" name="country">
                                {({ field, form }) => (
                                  <Input
                                    type="text"
                                    {...field}
                                    className="contry-input"
                                    placeholder={"Country you are interested in"}
                                  />
                                )}
                              </Field>
                              <Text sx={{ color: "red", m: 0, p: 0 }}>
                                {errors.country}
                              </Text>
                            </Flex>

                            <Button
                              type="submit"
                              variant="primary"
                              disabled={isSubmitting}
                              sx={{ mx: "auto", opacity: isSubmitting || loading ? 0 : 1, pointerEvents: isSubmitting || loading ? 'none' : 'all'}}
                            >
                              {subscribeUsData.button}
                            </Button>

                            <Text sx={{ color: "red", m: 0, p: 0, textAlign: 'center' }}>
                              {errors.api}
                            </Text>
                            {success && (
                              <Text sx={{ color: "text", m: 0, p: 0 , textAlign: 'center' }}>
                                Thanks for contact us!
                              </Text>
                            )}
                          </Flex>
                        </Form>
                      </Box>
                    );
                  }}
                </Formik>
              </Grid>
            </Box>
            <AnimatedBox
              {...animationProps}
              sx={styles.thumbnail}
              animate={inView ? { opacity: 1, scale: 1 } : ""}
            >
              <img
                alt={"Thumbnail"}
                // src={"/assets/mobilityApp.png"}
                src={"https://destinosinteligentes.app/assets/img/mac.png"}
                sx={{ maxWidth: "100%", ml: [0,0,5,5,5,5,5] }}
              />
              {/* <Box sx={styles.shapeBox}>
                <img
                  alt={"shape"}
                  src={"/assets/shapeMobilityPattern.png"}
                  sx={{ maxWidth: "100%" }}
                />
              </Box> */}
            </AnimatedBox>
          </Container>
        </div>
        <Partners />
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    display: "grid",
    placeItems: "center center",
    pt: 10,
    pb: [2, null, 0, null, 2, 0, null, 2],
    position: "relative",
    zIndex: 2,
  },
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: ["wrap", null, null, "nowrap"],
    pb: [0, 3, 0, null, 3],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, "30px", 0],
    textAlign: ["center", null, null, "left"],
    width: ["100%", "80%", null, 340, 400, 430, null, 485],
    pb: ["50px", "60px", null, 0],
    mx: ["auto", null, null, 0],
    ".description": {
      pr: [0, null, 6, 7, 6],
    },
  },

  grid: {
    pr: [2, 0, null, null, 6, "70px"],
    pl: [2, 0],
    pt: [2, null, null, null, 3],
    mx: "auto",
    width: ["100%", 370, 420, "100%"],
    gridGap: ["35px 0", null, null, null, "50px 0"],
    gridTemplateColumns: ["repeat(1,1fr)"],
  },
  card: {
    display: "flex",
    alignItems: "flex-start",
    transition: "all 0.3s",
  },

  icon: {
    width: ["45px", null, null, null, "55px"],
    height: "auto",
    flexShrink: 0,
    mr: [3, null, null, null, 4],
  },

  thumbnail: {
    display: "inline-flex",
    position: "relative",
    mr: "auto",
    ml: ["auto", null, null, null, 7],
    "> img": {
      position: "relative",
      zIndex: 1,
      height: [310, "auto"],
    },
  },
  shapeBox: {
    position: "absolute",
    bottom: "-25%",
    right: 0,
    width: "500px",
    zIndex: -1,
    display: ["none", null, null, null, null, "inline-block"],
  },

  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    mt: "-5px",
    title: {
      fontSize: 3,
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3],
    },

    subTitle: {
      fontSize: [1, null, null, "14px", 1],
      fontWeight: 400,
      lineHeight: 1.9,
    },
  },

  subscribe: {
    // ".email-input": {
    // mr: [0, null, null, "15px"],
    // minHeight: ["50px", "50px", "60px"],
    // },
    button: {
      minHeight: ["50px", "50px", "60px"],
      fontSize: ["14px", "14px", "16px"],
      mt: 3,
    },
  },
  form: {
    flexDirection: "column",
    gap: 3,
    color: "text",
  },
  inputGroup: {
    width: "100%",
    color: "text",
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
