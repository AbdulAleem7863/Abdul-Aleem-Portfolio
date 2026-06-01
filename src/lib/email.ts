import emailjs from "@emailjs/browser"

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || ""
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ""
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ""

interface EmailData {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendEmail(data: EmailData): Promise<void> {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    // Fallback: log to console if env vars not set
    console.log("EmailJS not configured. Would have sent:", data)
    // Simulate a short delay
    await new Promise((r) => setTimeout(r, 1000))
    return
  }

  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    subject: data.subject,
    message: data.message,
    to_email: "aleemnaqsh07@gmail.com",
  }

  const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)

  if (response.status !== 200) {
    throw new Error("Failed to send email")
  }
}
