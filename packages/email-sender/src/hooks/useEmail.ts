import { MailtrapClient, Address } from "mailtrap"


const client = new MailtrapClient({ token: process.env.MAILTRAP_TOKEN || ''});


const useSendEmail = (senderName: Address, senderEmail: string, subject: string, content: string) => {
        return client.send({
        from: senderName,
        to: [{ email: process.env.PERSONAL_EMAIL || ''}],
        subject,
        text : content,
        });
}


