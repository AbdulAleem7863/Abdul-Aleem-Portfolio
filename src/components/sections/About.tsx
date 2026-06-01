import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Building2, Brain, Rocket, Award, Target } from "lucide-react"
import AnimatedSection from "@/components/common/AnimatedSection"

const milestones = [
  {
    year: "2025",
    title: "Jr. MERN Stack & AI Developer",
    description: "Engineering scalable SaaS platforms with AI integrations at DotClick LLC. Building LLM-powered features and high-performance APIs.",
    icon: <Brain size={20} />,
  },
  {
    year: "2024",
    title: "MERN Stack Developer",
    description: "Delivered CRM, e-commerce, and real-time apps at Halcyon Solution. Architected multi-tenant SaaS with Stripe, Socket.io, and AI automation.",
    icon: <Code2 size={20} />,
  },
  {
    year: "2023",
    title: "MERN Stack Intern",
    description: "Started career building e-commerce and school management systems at Nubit Software. Learned full SDLC with Agile methodology.",
    icon: <Building2 size={20} />,
  },
]

const highlights = [
  { icon: <Rocket size={18} />, label: "20+ Projects", desc: "Delivered across SaaS, CRM, AI, and e-commerce" },
  { icon: <Award size={18} />, label: "Microsoft Certified", desc: "MB-310 Dynamics 365 Finance certified" },
  { icon: <Target size={18} />, label: "AI-First Approach", desc: "LLM integration & workflow automation" },
]

export default function About() {
  return (
    <AnimatedSection id="about" className="section-padding relative">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-purple-400 text-sm font-medium uppercase tracking-widest">About Me</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3">
              Crafting Digital{" "}
              <span className="text-gradient">Excellence</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mt-4" />
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-heading font-semibold">
                Building the Future,{" "}
                <span className="text-gradient">One Line at a Time</span>
              </h3>
              <p className="text-white/60 leading-relaxed">
                Full Stack MERN Developer and Microsoft Certified (MB-310) Dynamics 365 Finance
                Functional Consultant with 2.5+ years of experience building scalable SaaS, CRM,
                e-commerce, and multi-tenant applications. Proficient in React.js, Node.js,
                TypeScript, AI integrations, Stripe, and cloud-based solutions.
              </p>
              <p className="text-white/60 leading-relaxed">
                Currently transitioning into Microsoft Dynamics 365 Finance & Operations Technical
                Development with hands-on learning in X++, ERP workflows, and enterprise business
                applications. Passionate about combining ERP systems, AI, and modern web technologies
                to deliver innovative business solutions.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                {highlights.map((item) => (
                  <div key={item.label} className="text-center p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-purple-400 flex justify-center mb-2">{item.icon}</div>
                    <div className="text-sm font-semibold text-white">{item.label}</div>
                    <div className="text-xs text-white/40 mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Timeline */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-0"
            >
              {milestones.map((milestone, index) => (
                <TimelineItem key={milestone.year} {...milestone} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

function TimelineItem({ year, title, description, icon, index }: {
  year: string
  title: string
  description: string
  icon: React.ReactNode
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-12 pb-8 last:pb-0"
    >
      {/* Line */}
      {index < 2 && (
        <div className="absolute left-[23px] top-10 bottom-0 w-[1px] bg-gradient-to-b from-purple-500/50 to-transparent" />
      )}
      {/* Dot */}
      <div className="absolute left-3 top-1">
        <div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
          {icon}
        </div>
      </div>
      {/* Content */}
      <div className="glass-card rounded-xl p-5">
        <span className="text-xs font-medium text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
          {year}
        </span>
        <h4 className="text-lg font-heading font-semibold text-white mt-2">{title}</h4>
        <p className="text-sm text-white/50 mt-1 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}
