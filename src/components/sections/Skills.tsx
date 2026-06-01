import { useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Server, Database, Brain, Building2, ChevronRight } from "lucide-react"
import AnimatedSection from "@/components/common/AnimatedSection"
import { skills, skillCategories } from "@/data"

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <Code2 size={18} />,
  Backend: <Server size={18} />,
  Database: <Database size={18} />,
  AI: <Brain size={18} />,
  ERP: <Building2 size={18} />,
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("Frontend")

  const filteredSkills = skills.filter((s) => s.category === activeCategory)

  return (
    <AnimatedSection id="skills" className="section-padding relative">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-purple-400 text-sm font-medium uppercase tracking-widest">Skills & Expertise</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3">
            My{" "}
            <span className="text-gradient">Tech Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                  : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/5"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {categoryIcons[category]}
              {category}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="glass-card rounded-xl p-5 group cursor-default"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-heading font-semibold text-white group-hover:text-gradient transition-all duration-300">
          {skill.name}
        </h4>
        <span className="text-xs font-mono text-purple-400">{skill.level}%</span>
      </div>
      <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
        />
      </div>
    </motion.div>
  )
}
