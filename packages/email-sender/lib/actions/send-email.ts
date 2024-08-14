"use server";
import { createTransport, type SendMailOptions } from "nodemailer";
import { EmailFormData } from "../models/email-form";
import { formatEmailContent } from "../util/formatEmailContent";

export type EmailSendResult = {
  success: boolean;
  error?: string;
};

// TODO: Use Success and Reject Type from nodemailer
export const sendEmail = async (
  formData: EmailFormData
): Promise<EmailSendResult> => {
  const { senderName, senderEmail, subject, content } = formData;
  const transporter = createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.PERSONAL_EMAIL,
      pass: process.env.PERSONAL_EMAIL_APP_PASSWORD,
    },
  });
  const formattedContent = formatEmailContent(senderName, senderEmail, content);
  const mailOptions: SendMailOptions = {
    from: senderEmail,
    to: process.env.PERSONAL_EMAIL,
    subject: subject,
    text: formattedContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error: any) {
    console.error("Failed to send email:", error);
    return { success: false, error: "Failed to send email" };
  }
};
