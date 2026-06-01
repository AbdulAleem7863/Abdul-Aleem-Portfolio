import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, MapPin, Phone, Globe, GitFork, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import AnimatedSection from "@/components/common/AnimatedSection"
import Toast from "@/components/ui/toast"
import { sendEmail } from "@/lib/email"

const contactInfo = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "aleemnaqsh07@gmail.com",
    href: "mailto:aleemnaqsh07@gmail.com",
  },
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: "Remote / Worldwide",
  },
  {
    icon: <Phone size={18} />,
    label: "WhatsApp",
    value: "+92 336 5233067",
    href: "https://wa.me/923365233067",
  },
]

const socialLinks = [
  { icon: <Globe size={20} />, label: "LinkedIn", href: "https://linkedin.com/in/muhammad-abdul-aleem-81142225b" },
  { icon: <GitFork size={20} />, label: "GitHub", href: "#" },
  { icon: <Mail size={20} />, label: "Email", href: "mailto:aleemnaqsh07@gmail.com" },
  { icon: <MessageSquare size={20} />, label: "WhatsApp", href: "https://wa.me/923365233067" },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: "success" | "error"; visible: boolean }>({
    message: "",
    type: "success",
    visible: false,
  })

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type, visible: true })
  }

  const hideToast = () => {
    setToast((prev) => ({ ...prev, visible: false }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await sendEmail({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      })
      showToast("Message sent successfully! I'll get back to you soon.", "success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (err) {
      showToast("Failed to send message. Please try again or email me directly.", "error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatedSection id="contact" className="section-padding relative">
      <Toast message={toast.message} type={toast.type} isVisible={toast.visible} onClose={hideToast} />

      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-medium uppercase tracking-widest">Contact</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3">
            Let's{" "}
            <span className="text-gradient">Work Together</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <h3 className="text-2xl font-heading font-bold text-white mb-2">
              Get in Touch
            </h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-6" />
            <p className="text-white/50 leading-relaxed mb-8">
              Have a project in mind or just want to say hi? I'm always open to
              discussing new opportunities and innovative ideas.
            </p>

            <div className="space-y-5">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 group-hover:scale-110 group-hover:from-purple-500/20 group-hover:to-cyan-500/20 transition-all duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider">{info.label}</div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm text-white/80 hover:text-gradient transition-all duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-sm text-white/80">{info.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-6">
              <div className="text-xs text-white/30 uppercase tracking-widest mb-4">Follow Me</div>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-white/50 hover:text-purple-300 hover:border-purple-500/30 transition-all duration-300"
                    whileHover={{ y: -3, scale: 1.05 }}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 md:p-8 space-y-5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2 mt-5">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2 mt-5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full mt-6 group/btn relative overflow-hidden"
                  disabled={isSubmitting}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}
