import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  console.log("Received email request");
  const { senderName, senderEmail, subject, message } = await request.json();
  console.log("Received email from:", senderName, senderEmail);
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "test",
    port: 587,
    auth: {
      user: process.env.EMAIL_USER || "test",
      pass: process.env.EMAIL_PASS || "test",
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || "test",
      to: process.env.EMAIL_TO || "test",
      subject: `New message from ${senderName}: ${subject}`,
      text: `
        Name: ${senderName}
        Email: ${senderEmail}
        Subject: ${subject}
        Message: ${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
