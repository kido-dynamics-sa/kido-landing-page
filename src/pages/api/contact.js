import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const { name, company, email, phone, country } = req.body;
  const msg = {
    to: "info@kidodynamics.com", // Change to your recipient
    from: "web-team@kidodynamics.com", // Change to your verified sender
    subject: "Quieren saber más acerca de Kido Dynamics",
    text: "Mensaje automático generado desde la landing page.",
    html: `<p><strong>${name}</strong> quiere obtener más información acerca de Kido.</p> <ul><li>Company:<strong> ${company}</strong></li><li>Phone:<strong> ${phone}</strong></li><li>Email:<strong> ${email}</strong></li><li>Country:<strong> ${country}</strong></li></ul><p><i>Mensaje automático generado desde la landing page.</i></p>`,
  };
  try {
    await sgMail.send(msg);
    res.json({ message: `Email has been sent` });
  } catch (error) {
    res.status(500).json({ error: "Error sending email" });
  }
};
