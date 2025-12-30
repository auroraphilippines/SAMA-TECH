"use client"

import { Card } from "@/components/ui/card"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

const blogPosts = [
  {
    id: 1,
    title: "Digital Transformation in Government Services",
    excerpt: "Exploring how technology is modernizing Aurora's public services and improving citizen engagement.",
    date: "January 15, 2024",
    author: "SAMA TECH Team",
    category: "Technology",
    slug: "digital-transformation-government",
  },
  {
    id: 2,
    title: "Building Accessible Technology Systems",
    excerpt: "Why accessibility matters in government tech and how we ensure every citizen can use our solutions.",
    date: "January 10, 2024",
    author: "SAMA TECH Team",
    category: "Accessibility",
    slug: "building-accessible-systems",
  },
  {
    id: 3,
    title: "Community-Centered Digital Solutions",
    excerpt: "How we listen to communities and build technology that truly serves their needs.",
    date: "January 5, 2024",
    author: "SAMA TECH Team",
    category: "Community",
    slug: "community-centered-solutions",
  },
]

export function Blog() {
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
    <section id="blog" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">Latest Updates</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Insights and news about technology, innovation, and digital transformation in Aurora.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={cardVariants} whileHover={{ y: -8 }}>
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/30 flex flex-col h-full bg-background">
                {/* Category Badge */}
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide">
                    {post.category}
                  </span>
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-foreground/70 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">{post.excerpt}</p>

                {/* Meta Information */}
                <div className="border-t border-border/30 pt-4 mb-4 space-y-2">
                  <motion.div
                    className="flex items-center gap-2 text-sm text-foreground/60"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span>{post.date}</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2 text-sm text-foreground/60"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <User className="w-4 h-4 flex-shrink-0" />
                    <span>{post.author}</span>
                  </motion.div>
                </div>

                {/* Read More Link */}
                <motion.div
                  whileHover={{ x: 4 }}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
