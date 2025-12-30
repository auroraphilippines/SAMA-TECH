"use client"

import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

const projects = [
  {
    title: "Citizen Service Portal",
    challenge:
      "Aurora residents needed a unified platform to access government services, apply for permits, and track applications.",
    solution:
      "Built an intuitive web portal with secure authentication, real-time status updates, and mobile responsiveness.",
    impact: "1000+ citizens served monthly, 40% reduction in processing time.",
    color: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    title: "Digital Health Records System",
    challenge:
      "Healthcare providers across Aurora struggled with fragmented patient records and paper-based workflows.",
    solution:
      "Developed a secure, interoperable EHR system with privacy controls and mobile access for healthcare workers.",
    impact: "500+ healthcare workers trained, 60% faster patient access to records.",
    color: "bg-secondary/10",
    borderColor: "border-secondary/20",
  },
  {
    title: "Government Employee System",
    challenge: "Aurora government needed better systems for employee management, payroll, and performance tracking.",
    solution:
      "Created comprehensive HR platform with self-service features, analytics dashboards, and compliance tracking.",
    impact: "2000+ employees, 50% reduction in administrative overhead.",
    color: "bg-accent/10",
    borderColor: "border-accent/20",
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="projects" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">Featured Projects</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Real solutions delivered for Aurora's most important challenges.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants} whileHover={{ y: -4 }}>
              <Card
                className={`p-8 border ${project.borderColor} ${project.color} hover:shadow-lg transition-all duration-300`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <div className="space-y-4">
                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <p className="text-sm font-semibold text-foreground/60 mb-2">CHALLENGE</p>
                        <p className="text-foreground/70">{project.challenge}</p>
                      </motion.div>
                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <p className="text-sm font-semibold text-foreground/60 mb-2">SOLUTION</p>
                        <p className="text-foreground/70">{project.solution}</p>
                      </motion.div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div>
                      <p className="text-sm font-semibold text-foreground/60 mb-2">IMPACT</p>
                      <p className="text-foreground/70 mb-6">{project.impact}</p>
                    </div>
                    <motion.div whileHover={{ x: 4 }}>
                      <Link
                        href="#"
                        className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
