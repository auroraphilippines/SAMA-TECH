"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"
import Image from "next/image"

interface TeamMember {
  id: string
  name: string
  title: string
  department: string
  bio: string
  image?: string
  social: {
    linkedin?: string
    github?: string
    twitter?: string
    email: string
  }
}

const teamData: TeamMember[] = [
  {
    id: "ceo-founder",
    name: "Aurora Province Visionary",
    title: "Founder & CEO",
    department: "Executive Leadership",
    bio: "Leading SAMA TECH with a vision to transform Aurora Province through sustainable, accessible technology solutions. Committed to ensuring every Aurora resident benefits from modern digital tools and that technology serves people, not the other way around.",
    image: "/professional-ceo-aurora-philippines.jpg",
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com",
      email: "contact@samatech.ph",
    },
  },
]

interface TeamCardProps {
  member: TeamMember
  index: number
}

function TeamMemberCard({ member, index }: TeamCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.2 + 0.1,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  }

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.2 + 0.2,
      },
    },
  }

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        delay: index * 0.2 + 0.3 + custom * 0.1,
      },
    }),
    hover: {
      scale: 1.2,
      y: -4,
      transition: { duration: 0.2 },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex justify-center"
    >
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300"
        style={{
          boxShadow: isHovered ? "0 20px 40px rgba(0, 163, 81, 0.15)" : "0 10px 30px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Header accent bar */}
        <div className="h-1 bg-gradient-to-r from-primary via-accent-green to-accent-orange" />

        {/* Card content */}
        <div className="p-8">
          {/* Profile image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover="hover"
            className="mb-6 flex justify-center"
          >
            <div className="relative w-32 h-32">
              <Image
                src={member.image || "/placeholder.svg?height=300&width=300&query=professional-avatar"}
                alt={member.name}
                fill
                className="rounded-full object-cover border-4 border-gray-100"
              />
            </div>
          </motion.div>

          {/* Member info */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center mb-4"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
            <p className="text-lg font-semibold text-accent-green mb-1">{member.title}</p>
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">{member.department}</p>
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={contentVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-gray-700 text-sm leading-relaxed text-center mb-6 line-clamp-4"
          >
            {member.bio}
          </motion.p>

          {/* Social links */}
          <motion.div className="flex justify-center gap-4" initial="hidden" animate={inView ? "visible" : "hidden"}>
            {member.social.email && (
              <motion.a
                href={`mailto:${member.social.email}`}
                aria-label="Email"
                variants={socialIconVariants}
                custom={0}
                whileHover="hover"
                className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-accent-orange hover:text-white transition-colors duration-200"
              >
                <Mail size={20} />
              </motion.a>
            )}
            {member.social.linkedin && (
              <motion.a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                variants={socialIconVariants}
                custom={1}
                whileHover="hover"
                className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200"
              >
                <Linkedin size={20} />
              </motion.a>
            )}
            {member.social.github && (
              <motion.a
                href={member.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                variants={socialIconVariants}
                custom={2}
                whileHover="hover"
                className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-900 hover:text-white transition-colors duration-200"
              >
                <Github size={20} />
              </motion.a>
            )}
            {member.social.twitter && (
              <motion.a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                variants={socialIconVariants}
                custom={3}
                whileHover="hover"
                className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-400 hover:text-white transition-colors duration-200"
              >
                <Twitter size={20} />
              </motion.a>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

interface TeamSectionProps {
  onlyExecutive?: boolean
}

export function Team({ onlyExecutive = true }: TeamSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const displayedMembers = onlyExecutive ? teamData.slice(0, 1) : teamData

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.1,
      },
    },
  }

  const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
      },
    },
  }

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white via-white to-accent-light"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 text-balance"
          >
            Our Leadership & Team
          </motion.h2>
          <motion.p
            variants={subtitleVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto text-balance"
          >
            Meet the people driving Aurora's digital transformation
          </motion.p>
        </div>

        {/* Team members grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16 md:mb-20 lg:max-w-2xl lg:mx-auto">
          {displayedMembers.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* Future growth CTA */}
        {onlyExecutive && (
          <motion.div
            variants={ctaVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center bg-gradient-to-r from-primary/5 to-accent-green/5 rounded-xl p-8 md:p-12 border border-primary/10"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">We're Building Our Team</h3>
            <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
              Join us in transforming Aurora Province through technology. We're actively hiring passionate developers,
              designers, and consultants who share our vision.
            </p>
            <motion.a
              href="mailto:careers@samatech.ph"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-accent-green text-white font-semibold rounded-lg hover:bg-accent-green/90 transition-colors duration-200"
            >
              Explore Career Opportunities
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  )
}
