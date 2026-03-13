import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, courseTitle } = body;

    if (process.env.RECIPIENT_EMAIL === undefined) {
      console.error("RECIPIENT_EMAIL is not defined in environment variables");
      return NextResponse.json(
        { error: "Recipient email not configured" },
        { status: 500 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev", // Update with your verified domain
      to: [process.env.RECIPIENT_EMAIL],
      subject: `New Course Enquiry: ${courseTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #333; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">New Course Enquiry</h2>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #f9fafb; border-radius: 8px;">
            <p style="margin: 10px 0;"><strong style="color: #4b5563;">Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong style="color: #4b5563;">Email:</strong> <a href="mailto:${email}" style="color: #3b82f6;">${email}</a></p>
            <p style="margin: 10px 0;"><strong style="color: #4b5563;">Course Interested:</strong> ${courseTitle}</p>
            <p style="margin: 10px 0;"><strong style="color: #4b5563;">Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">
          
          <p style="color: #6b7280; font-size: 14px; text-align: center;">
            This enquiry was sent from your website contact form.<br>
            You can reply directly to this email or contact ${name} at <a href="mailto:${email}" style="color: #3b82f6;">${email}</a>
          </p>
        </div>
      `,
      replyTo: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      {
        message: "Email sent successfully",
        data,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
