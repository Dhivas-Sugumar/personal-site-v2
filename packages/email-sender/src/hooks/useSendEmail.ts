import { createTransport } from "nodemailer";

// Create a transporter object
const transporter = createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.PERSONAL_EMAIL,
    pass: process.env.PERSONAL_EMAIL_APP_PASSWORD,
  },
});
type EmailSendSuccess = {
  success: true;
};
type EmailSendReject = {
  success: false;
  error: string;
};

export type EmailSendResult = EmailSendSuccess | EmailSendReject;

// TODO: Use Success and Reject Type from nodemailer
export const useSendEmail = async (
  senderName: string,
  senderEmail: string,
  subject: string,
  content: string
): Promise<EmailSendResult> => {
  const mailOptions = {
    from: senderEmail,
    to: process.env.PERSONAL_EMAIL,
    subject: `${senderName}: ${subject}`,
    text: content,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error: "Failed to send email" };
  }
};
