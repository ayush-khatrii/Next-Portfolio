import { Email } from '@/components/email-components/email';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request) {
  const { content, fromEmail, fromName } = await request.json();
  try {
    const { data, error } = await resend.emails.send({
      from: process.env.NEXT_PUBLIC_FROM_MAIL,
      to: process.env.NEXT_PUBLIC_TO_MAIL,
      subject: 'Hello Ayush I want to contact you.',
      react: <Email fromName={fromName} fromEmail={fromEmail} content={content} />

    });
    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    console.log(data)
    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
