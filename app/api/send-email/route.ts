// app/api/send-email/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  const htmlContent = `
    <h1 style="color:blue;">New Message from PR-Dev-Protfolio</h1>
    <p style="font-size:16px;">Name: ${name}</p>
    <p style="font-size:16px;">Email: ${email}</p>
    <p style="font-size:16px;">Message: ${message}</p>
  `;

  const textContent = `
    New Message from PR-Dev-Protfolio
    Name: ${name}
    Email: ${email}
    Message: ${message}
  `;

  // Create a transporter object using Gmail's SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail address
      pass: process.env.GMAIL_PASS, // Your Gmail password or app password
    },
  });

  try {
    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"${name}" <${email}>`, // sender address
      to: process.env.RECEIVER_EMAIL, // (my Gmail address)
      subject: "New Message from PR-Dev-Protfolio",
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json({ message: "Email Sent", info });
  } catch (error) {
    return NextResponse.json(
      { message: "Error sending email", error },
      { status: 500 }
    );
  }
}
