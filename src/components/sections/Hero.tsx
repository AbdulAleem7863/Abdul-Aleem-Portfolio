import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ChevronDown, Code2, Brain, Cloud, Database, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Typewriter from "@/components/common/Typewriter"
import AnimatedCounter from "@/components/common/AnimatedCounter"
import FloatingBadge from "@/components/common/FloatingBadge"
import { stats } from "@/data"

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-24">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-cyan-900/30" />
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        {/* Extra ambient glows */}
        <motion.div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM3QzNBRUQiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      </div>

      {/* Floating badges */}
      <FloatingBadge icon={<Brain size={16} />} label="AI Developer" x={6} y={22} delay={0} />
      <FloatingBadge icon={<Cloud size={16} />} label="SaaS Architect" x={78} y={18} delay={0.3} />
      <FloatingBadge icon={<Code2 size={16} />} label="MERN Expert" x={84} y={62} delay={0.6} />
      <FloatingBadge icon={<Database size={16} />} label="Dynamics 365" x={8} y={68} delay={0.9} />

      <div className="container-max w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <Badge variant="secondary" className="px-4 py-1.5 text-sm group cursor-default">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse" />
                <span className="group-hover:text-white transition-colors">Available for Projects</span>
                <Sparkles size={12} className="ml-2 text-purple-400" />
              </Badge>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-purple-300 font-medium mb-2"
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-4"
            >
              <span className="text-white">Muhammad</span>{" "}
              <span className="text-gradient">Abdul Aleem</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl sm:text-2xl text-white/80 mb-6 h-10"
            >
              <Typewriter
                texts={[
                  "Full Stack MERN Developer",
                  "AI & SaaS Architect",
                  "Dynamics 365 F&O Consultant",
                  "Microsoft Certified (MB-310)",
                ]}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/50 max-w-xl mb-8 leading-relaxed text-base"
            >
              Full Stack MERN Developer & Microsoft Certified (MB-310) Dynamics 365
              Finance Consultant. Building scalable SaaS, AI-powered platforms, and
              enterprise ERP solutions with modern web technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="group relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center">
                  Hire Me
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group"
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                View Projects
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="glass-card rounded-xl p-4 text-center relative overflow-hidden group"
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="text-2xl md:text-3xl font-heading font-bold text-gradient">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.value % 1 !== 0 ? 1 : 0} />
                    </div>
                    <div className="text-xs text-white/50 mt-1 uppercase tracking-wider">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Outer glow rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/20 to-cyan-600/20 animate-pulse-slow" />
              <motion.div
                className="absolute inset-3 rounded-full bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 backdrop-blur-3xl border border-white/10 flex items-center justify-center overflow-hidden"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute inset-3 rounded-full overflow-hidden" style={{ rotate: "-360deg" }}>
                  {!imgError ? (
                    <img
                      src="/aleem2.png"
                      alt="Muhammad Abdul Aleem"
                      className="w-full h-full object-cover"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-600/30 to-cyan-600/30 flex items-center justify-center">
                      <motion.div
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="text-center"
                      >
                        <div className="text-6xl md:text-8xl font-heading font-bold text-gradient">AA</div>
                        <div className="text-xs text-white/40 mt-2">Full Stack Developer</div>
                      </motion.div>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Orbiting rings */}
              <svg className="absolute inset-0 w-full h-full -z-10" viewBox="0 0 400 400">
                <motion.circle
                  cx="200" cy="200" r="190"
                  fill="none" stroke="url(#gradient)" strokeWidth="1"
                  strokeDasharray="8 8"
                  animate={{ rotate: 360 }}
                  style={{ originX: "200px", originY: "200px" }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle
                  cx="200" cy="200" r="170"
                  fill="none" stroke="url(#gradient2)" strokeWidth="0.5"
                  strokeDasharray="4 12"
                  animate={{ rotate: -360 }}
                  style={{ originX: "200px", originY: "200px" }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.5" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[10px] text-white/20 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/30"
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
