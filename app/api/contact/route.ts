import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
    try {
        const body = await request.json()

        const { name, email, message } = body

        if (!name || !email || !message) {
            return Response.json(
                { error: "All fields are required." },
                { status: 400 }
            )
        }

        await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: ["yunusovasevinc08@gmail.com"],
            replyTo: email,
            subject: `New message from ${name}`,
            html: `
        <h2>New Portfolio Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        })

        return Response.json({ success: true })
    } catch (error) {
        console.error("Contact form error:", error)

        return Response.json(
            { error: "Failed to send message." },
            { status: 500 }
        )
    }
}