import { motion } from "framer-motion"

interface FloatingBadgeProps {
  icon: React.ReactNode
  label: string
  x: number
  y: number
  delay?: number
}

export default function FloatingBadge({ icon, label, x, y, delay = 0 }: FloatingBadgeProps) {
  return (
    <motion.div
      className="absolute hidden lg:flex items-center gap-2 px-4 py-2 rounded-full glass shadow-lg"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5 + delay, duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
    >
      <motion.span
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut" }}
        className="text-purple-400"
      >
        {icon}
      </motion.span>
      <span className="text-xs font-medium text-white/80 whitespace-nowrap">{label}</span>
    </motion.div>
  )
}
