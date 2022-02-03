import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const { email } = req.body;
  const msg = {
    to: "info@kidodynamics.com", // Change to your recipient
    from: "web-team@kidodynamics.com", // Change to your verified sender
    subject: "Quieren saber más acerca de Kido Dynamics",
    text: "Mensaje automático generado desde la landing page.",
    html: `<strong>${email} quiere obtener más información. </strong><p><i>Mensaje automático generado desde la landing page.</i></p>`,
  };
  try {
    await sgMail.send(msg);
    res.json({ message: `Email has been sent` });
  } catch (error) {
    console.log("err", error);
    res.status(500).json({ error: "Error sending email" });
  }
};
