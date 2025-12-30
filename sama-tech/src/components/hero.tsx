"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, type Variants, useInView } from "framer-motion"
import { useRef } from "react"

export function Hero() {
  const ref = useRef<HTMLElement | null>(null)
  const isInView = useInView(ref, { once: true })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }

  const decorativeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section className="relative overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="text-center max-w-3xl mx-auto">
          {/* Main Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-6"
            variants={itemVariants}
          >
            Where Progress <span className="text-primary">Meets People</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p className="text-lg sm:text-xl text-foreground/70 text-balance mb-8" variants={itemVariants}>
            Building sustainable digital systems that modernize Aurora Province and serve every resident with
            innovative, accessible technology solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#services">Explore Services</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              <Link href="#contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="mt-20 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          <motion.div className="h-24 bg-secondary/20 rounded-lg" variants={decorativeVariants} />
          <motion.div className="h-24 bg-accent/20 rounded-lg" variants={decorativeVariants} />
          <motion.div className="h-24 bg-primary/20 rounded-lg" variants={decorativeVariants} />
        </div>
      </motion.div>
    </section>
  )
}
