import { useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles, Brain, Kanban, Palette, PhoneCall, Workflow } from "lucide-react"
import AnimatedSection from "@/components/common/AnimatedSection"
import { projects } from "@/data"

const categories = ["All", "AI SaaS", "SaaS", "AI"]

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain size={24} />,
  Kanban: <Kanban size={24} />,
  Palette: <Palette size={24} />,
  PhoneCall: <PhoneCall size={24} />,
  Workflow: <Workflow size={24} />,
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <AnimatedSection id="projects" className="section-padding relative">
      <div className="container-max">
        <div className="text-center mb-12">
          <span className="text-purple-400 text-sm font-medium uppercase tracking-widest">Portfolio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3">
            Featured{" "}
            <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                  : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/5"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Gradient border on hover */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-purple-600/0 via-transparent to-cyan-600/0 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
      <div className="relative glass-card rounded-2xl p-6 h-full flex flex-col group-hover:border-transparent transition-all duration-500">
        {/* Icon */}
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} p-[1px] mb-5`}>
          <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center text-white">
            {iconMap[project.icon]}
          </div>
        </div>

        {/* Category badge */}
        <span className="text-[10px] font-medium text-purple-400 uppercase tracking-widest mb-2">
          {project.category}
        </span>

        <h3 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-white/50 leading-relaxed mb-4 line-clamp-2 flex-1">
          {project.description}
        </p>

        {/* Features */}
        <div className="space-y-2 mb-5">
          {project.features.map((feature) => (
            <div key={feature} className="flex items-center gap-2.5 text-xs text-white/60">
              <span className="w-4 h-4 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                <Sparkles size={8} className="text-purple-400" />
              </span>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-white/50 border border-white/5 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
