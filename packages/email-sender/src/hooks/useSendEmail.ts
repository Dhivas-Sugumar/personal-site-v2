import { MailtrapClient, Address } from "mailtrap";

const client = new MailtrapClient({ token: process.env.MAILTRAP_TOKEN || "" });

export const useSendEmail = async (
  senderName: string,
  senderEmail: string,
  subject: string,
  content: string
) => {
  return await client.send({
    from: { name: senderName, email: senderEmail },
    to: [{ email: process.env.PERSONAL_EMAIL || "" }],
    subject,
    text: content,
  });
};
