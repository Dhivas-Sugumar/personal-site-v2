"use server";
import { createTransport, type SendMailOptions } from "nodemailer";
export type EmailFormData = {
  senderName: string;
  senderEmail: string;
  subject: string;
  content: string;
};

type EmailSendSuccess = {
  success: true;
};
type EmailSendReject = {
  success: false;
  error: string;
};

export type EmailSendResult = EmailSendSuccess | EmailSendReject;

// TODO: Use Success and Reject Type from nodemailer
export const sendEmail = async (
  formData: EmailFormData
): Promise<EmailSendResult> => {
  const { senderName, senderEmail, subject, content } = formData;
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

  //   return { senderName, senderEmail, subject, content };
  const mailOptions: SendMailOptions = {
    from: senderEmail,
    to: process.env.PERSONAL_EMAIL,
    subject: `${senderName}: ${subject}`,
    text: content,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error: any) {
    console.error("Failed to send email:", error);
    return { success: false, error: "Failed to send email" };
  }
};
