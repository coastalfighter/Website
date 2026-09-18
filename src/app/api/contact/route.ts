import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, subject, message } = payload;
  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_FORM_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FORM_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    // No email service configured (e.g. local dev) — accept the submission
    // without sending anything rather than failing the whole form.
    console.warn("Contact form submitted without RESEND_API_KEY configured; skipping email send.", {
      name,
      email,
      subject,
    });
    return NextResponse.json({ ok: true });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: toEmail,
      reply_to: email,
      subject: `New contact form submission: ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Failed to send your message. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
