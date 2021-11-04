/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useCallback, useEffect } from "react";
import { jsx, Box, Container, Button, Flex, Text, Label } from "theme-ui";
import { rgba } from "polished";
import SectionHeader from "components/section-header";
import Input from "components/input";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { fetchAPI } from "utils/api";

const SubscribeUs = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const LeadSchema = yup.object().shape({
    email: yup.string().email().required(),
  });

  return (
    <Box as="section" sx={styles.section} variant="section.subscribe" id="contact">
      <Container>
        <Box sx={styles.contentWrapper}>
          <SectionHeader
            slogan="unveil powerful insight since now"
            title="Like our service? Contact us!"
            isWhite={true}
          />
          <Formik
            initialValues={{ email: "" }}
            validationSchema={LeadSchema}
            onSubmit={async (values, { setSubmitting, setErrors }) => {
              setLoading(true);

              try {
                setErrors({ api: null });
                await fetchAPI("/lead-form-submissions", {
                  method: "POST",
                  body: JSON.stringify({
                    email: values.email,
                    location: "whatever",
                  }),
                });
                setSuccess(true);
              } catch (err) {
                setErrors({ api: err.message });
              }

              setLoading(false);
              setSubmitting(false);
            }}
          >
            {({ errors, touched, isSubmitting }) => {
              if (errors.email && touched.email && errors.email) {
                setSuccess(false);
              }
              return (
                <Box sx={styles.subscribe}>
                  <Form>
                    <Flex sx={styles.inputGroup}>
                      <Label htmlFor="email" variant="styles.srOnly">
                        Email
                      </Label>
                      <Field type="email" name="email">
                        {({ field, form }) => (
                          <Input
                            type="email"
                            {...field}
                            className="email-input"
                            placeholder="Enter Email address"
                          />
                        )}
                      </Field>

                      <Button
                        type="submit"
                        variant="secondary"
                        sx={{ bg: "white", borderColor: "white" }}
                        disabled={isSubmitting}
                        loading={loading}
                      >
                        Subscribe
                      </Button>
                    </Flex>
                  </Form>
                  <Text sx={{ color: "white", height: "24px" }}>
                    {(errors.email && touched.email && errors.email) ||
                      errors.api}
                  </Text>

                  {success && (
                    <Text sx={{ color: "white", height: "24px" }}>
                      {" "}
                      Thanks for contact us!
                    </Text>
                  )}
                </Box>
              );
            }}
          </Formik>
        </Box>
      </Container>
    </Box>
  );
};

export default SubscribeUs;

const styles = {
  section: {
    height:'50vh',
    pt: [6, null, null, null, 6],
    pb: [8, null, null, 9, 9],
  },
  contentWrapper: {
    background:
      "linear-gradient(136.82deg, rgba(237, 46, 126, 0.27) -28.85%, #EC3683 169.19%),linear-gradient(0deg, #021639, #021639)",
    borderRadius: "12px",
    p: ["40px", "40px", "40px 110px 50px", "50px 50px", "40px"],
    gap: ["25px", "25px", "50px", "50px", "50px"],
    display: ["block", null, null, "block", "grid"],
    alignItems: "center",
    gridTemplateColumns: ["repeat(2, 1fr)"],
  },
  heading: {
    textAlign: ["center", null, "left", "center", "left"],
    mb: ["30px", null, null, null, 0],
    ml: 0,
    h2: {
      fontSize: [6, null, null, null, null, 8, 9],
    },
    p: {
      lineHeight: 1.87,
      marginTop: 1,
      ml: ["auto", null, null, null, 0],
      mr: ["auto", null, null, null, 0],
      maxWidth: 420,
    },
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
