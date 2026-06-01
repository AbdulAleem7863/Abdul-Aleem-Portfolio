import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award, ExternalLink, Medal, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedSection from "@/components/common/AnimatedSection"
import { certifications } from "@/data"

const certIcons = [<Award size={24} />, <Star size={24} />, <Medal size={24} />]

export default function Certifications() {
  return (
    <AnimatedSection id="certifications" className="section-padding relative">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-medium uppercase tracking-widest">Achievements</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3">
            Certifications &{" "}
            <span className="text-gradient">Awards</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <CertCard key={cert.title} cert={cert} index={index} icon={certIcons[index]} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

function CertCard({ cert, index, icon }: { cert: typeof certifications[0]; index: number; icon: React.ReactNode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="glass-card rounded-xl p-6 text-center group cursor-default"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 mx-auto mb-4 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-heading font-bold text-white mb-1">{cert.title}</h3>
      <p className="text-sm text-purple-300 font-medium">{cert.issuer}</p>
      <p className="text-xs text-white/40 mt-1">{cert.date}</p>
      {cert.credentialUrl && (
        <Button variant="ghost" size="sm" className="mt-4 text-xs gap-1.5" asChild>
          <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={12} />
            View Credential
          </a>
        </Button>
      )}
    </motion.div>
  )
}
