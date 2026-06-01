import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"

interface AnimatedCounterProps {
  value: number
  suffix?: string
  decimals?: number
}

export default function AnimatedCounter({ value, suffix = "", decimals = 0 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const end = value
    const duration = 2000
    const stepTime = Math.max(Math.floor(duration / (end * 10)), 16)
    const increment = end / (duration / stepTime)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <motion.span
      ref={ref}
      className="tabular-nums"
    >
      {count.toFixed(decimals)}{suffix}
    </motion.span>
  )
}
