"use client"

import { Card } from "@/components/ui/card"
import { Code2, Globe, Users, Cog, Shield } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

const services = [
  {
    icon: Code2,
    title: "Government System Development",
    description:
      "Custom-built digital systems designed specifically for government agencies with security, scalability, and user-centered design.",
  },
  {
    icon: Globe,
    title: "Digital Infrastructure Solutions",
    description:
      "Robust technical foundations that support citizen services, data management, and inter-agency communication.",
  },
  {
    icon: Users,
    title: "Community Technology",
    description:
      "Technology solutions that bring people together and improve quality of life across Aurora communities.",
  },
  {
    icon: Cog,
    title: "Technology Consulting",
    description: "Strategic guidance on digital transformation, technology selection, and modernization initiatives.",
  },
  {
    icon: Shield,
    title: "System Maintenance & Support",
    description: "Ongoing support, updates, and optimization to keep systems running smoothly and securely.",
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">What We Offer</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to serve Aurora's unique needs and challenges.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div key={index} variants={cardVariants} whileHover={{ y: -8 }}>
                <Card className="p-8 group hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/30 bg-background h-full">
                  {/* Icon with background */}
                  <motion.div
                    className="mb-6 inline-block p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <IconComponent className="w-6 h-6 text-primary" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>

                  {/* Description */}
                  <p className="text-foreground/70 leading-relaxed mb-6">{service.description}</p>

                  {/* Learn More Link */}
                  <motion.div whileHover={{ x: 4 }}>
                    <Link href="#" className="inline-flex items-center text-primary font-medium hover:text-primary/80">
                      Learn More
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </motion.div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
