import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Calendar, CheckCircle2, ArrowUpRight } from "lucide-react"
import AnimatedSection from "@/components/common/AnimatedSection"
import { Badge } from "@/components/ui/badge"
import { experiences } from "@/data"

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="section-padding relative">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-medium uppercase tracking-widest">Experience</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3">
            Professional{" "}
            <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Center line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-purple-500/50 via-cyan-500/30 to-transparent hidden md:block" />

          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.company} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative mb-12 md:mb-16 ${isEven ? "md:pr-[50%] md:mr-0" : "md:pl-[50%] md:ml-0 md:mt-16"}`}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 top-0 md:-translate-x-1/2 z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
          className="w-8 h-8 rounded-full bg-card border-2 border-purple-500/50 flex items-center justify-center"
        >
          <div className="w-3 h-3 rounded-full bg-purple-500" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="ml-10 md:ml-0">
        <div className="glass-card rounded-xl p-6 hover:border-purple-500/20 transition-all duration-500">
          <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
            <div>
              <h3 className="text-xl font-heading font-bold text-white">{exp.company}</h3>
              <p className="text-purple-300 text-sm font-medium mt-0.5">{exp.role}</p>
            </div>
            <Badge variant="secondary" className="flex items-center gap-1.5">
              <Calendar size={12} />
              {exp.duration}
            </Badge>
          </div>

          {/* Responsibilities */}
          <div className="space-y-2 mb-4">
            {exp.responsibilities.map((resp) => (
              <div key={resp} className="flex items-start gap-2 text-sm text-white/60">
                <CheckCircle2 size={14} className="text-purple-400 mt-0.5 shrink-0" />
                <span>{resp}</span>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="mb-4">
            <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">Key Achievements</span>
            <div className="mt-2 space-y-1.5">
              {exp.achievements.map((ach) => (
                <div key={ach} className="flex items-start gap-2 text-sm text-white/70">
                  <ArrowUpRight size={14} className="text-cyan-400 mt-0.5 shrink-0" />
                  <span>{ach}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
            {exp.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
