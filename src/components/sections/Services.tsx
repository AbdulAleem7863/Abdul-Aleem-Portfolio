import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Cloud, Brain, Users, Building2, Code2, Layers, CheckCircle2 } from "lucide-react"
import AnimatedSection from "@/components/common/AnimatedSection"
import { services } from "@/data"

const serviceIcons: Record<string, React.ReactNode> = {
  Cloud: <Cloud size={28} />,
  Brain: <Brain size={28} />,
  Users: <Users size={28} />,
  Building2: <Building2 size={28} />,
  Code2: <Code2 size={28} />,
  Layers: <Layers size={28} />,
}

export default function Services() {
  return (
    <AnimatedSection id="services" className="section-padding relative">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-medium uppercase tracking-widest">Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3">
            What I{" "}
            <span className="text-gradient">Deliver</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-xl p-6 group cursor-default"
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:bg-purple-500/20 transition-all duration-300">
        {serviceIcons[service.icon]}
      </div>
      <h3 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">
        {service.title}
      </h3>
      <p className="text-sm text-white/50 leading-relaxed mb-4">
        {service.description}
      </p>
      <div className="space-y-2">
        {service.features.map((feature) => (
          <div key={feature} className="flex items-center gap-2 text-xs text-white/60">
            <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
