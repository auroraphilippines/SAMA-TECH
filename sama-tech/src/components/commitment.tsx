"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle, Lightbulb, Users, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

const commitments = [
  {
    icon: CheckCircle,
    title: "Long-Term Sustainability",
    description: "We build systems designed to last, with quality code and thoughtful architecture.",
    color: "bg-primary",
  },
  {
    icon: Lightbulb,
    title: "Aurora Excellence",
    description: "Every solution is tailored to Aurora's unique context and community needs.",
    color: "bg-secondary",
  },
  {
    icon: Zap,
    title: "Modern Technology",
    description: "Leveraging current best practices and cutting-edge tools for optimal performance.",
    color: "bg-accent",
  },
  {
    icon: Users,
    title: "Universal Accessibility",
    description: "Technology that serves everyone, regardless of ability, age, or background.",
    color: "bg-primary",
  },
]

export function Commitments() {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">Our Commitments</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            The principles that guide every project and decision we make.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {commitments.map((commitment, index) => {
            const IconComponent = commitment.icon
            return (
              <motion.div key={index} variants={cardVariants}>
                <Card className="p-8 bg-background border-0 flex flex-col items-center text-center group hover:shadow-lg transition-all duration-300 h-full">
                  {/* Icon Circle */}
                  <motion.div
                    className={`w-16 h-16 rounded-full ${commitment.color} flex items-center justify-center mb-6`}
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-foreground">{commitment.title}</h3>

                  {/* Description */}
                  <p className="text-foreground/70 leading-relaxed">{commitment.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
