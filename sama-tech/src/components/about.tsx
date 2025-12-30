"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  const checkmarkVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  const decorativeVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance"
              variants={contentVariants}
            >
              About SAMA TECH
            </motion.h2>

            <motion.p className="text-lg text-foreground/70 leading-relaxed mb-6" variants={contentVariants}>
              SAMA TECH is a technology solutions company dedicated to serving Aurora Province, Philippines. We combine
              government expertise, technical excellence, and community insight to build digital systems that truly work
              for people.
            </motion.p>

            <motion.div className="space-y-4 mb-8" variants={contentVariants}>
              {[
                {
                  title: "Mission",
                  description: "Building sustainable digital systems that modernize Aurora and serve every resident.",
                  color: "text-primary",
                },
                {
                  title: "Vision",
                  description:
                    "A connected Aurora where technology empowers communities and drives sustainable progress.",
                  color: "text-secondary",
                },
                {
                  title: "Promise",
                  description: "Accessible, sustainable, and community-focused solutions that exceed expectations.",
                  color: "text-accent",
                },
              ].map((item, index) => (
                <motion.div key={index} className="flex gap-4" variants={contentVariants}>
                  <motion.div className={`${item.color} font-bold text-2xl flex-shrink-0`} variants={checkmarkVariants}>
                    ✓
                  </motion.div>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-foreground/70">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={contentVariants}>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#contact">Learn More About Us</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Decorative */}
          <motion.div
            className="hidden lg:block"
            variants={decorativeVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="relative h-96">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl"
                whileHover={{ scale: 1.02 }}
              />
              <motion.div
                className="absolute inset-4 bg-gradient-to-tl from-accent/20 to-primary/10 rounded-xl"
                whileHover={{ scale: 0.98 }}
              />
              <motion.div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <motion.div
                    className="text-6xl font-bold text-primary/20 mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    SAMA TECH
                  </motion.div>
                  <motion.p
                    className="text-foreground/40"
                    initial={{ y: 10, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    Where Progress Meets People
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
