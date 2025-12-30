"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

const acronymCards = [
  {
    letter: "S",
    title: "SUSTAINABLE",
    description: "Long-term thinking with quality code and lasting value for Aurora's future.",
    color: "bg-primary",
    textColor: "text-primary",
  },
  {
    letter: "A",
    title: "AURORA",
    description: "Everything we build prioritizes Aurora's unique needs and community benefits.",
    color: "bg-secondary",
    textColor: "text-secondary",
  },
  {
    letter: "M",
    title: "MODERNIZATION",
    description: "Using current technology and best practices to drive progress forward.",
    color: "bg-accent",
    textColor: "text-accent",
  },
  {
    letter: "A",
    title: "ACCESSIBILITY",
    description: "Technology that works for everyone, regardless of ability or background.",
    color: "bg-primary",
    textColor: "text-primary",
  },
]

export function SAMASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, rotateY: -90 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">Our Foundation</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            SAMA TECH is built on four core principles that guide everything we do.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {acronymCards.map((card, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="group relative overflow-hidden p-8 hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-background h-full">
                {/* Accent background */}
                <motion.div className={`absolute top-0 left-0 w-1 h-full ${card.color}`} whileHover={{ width: 8 }} />

                {/* Letter */}
                <motion.div
                  className={`text-5xl font-bold ${card.textColor} mb-4`}
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {card.letter}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-foreground">{card.title}</h3>

                {/* Description */}
                <p className="text-foreground/70 leading-relaxed">{card.description}</p>

                {/* Hover effect background */}
                <motion.div
                  className={`absolute inset-0 ${card.color} pointer-events-none`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.05 }}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
