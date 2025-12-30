"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">Get In Touch</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Ready to start your digital transformation? Contact us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 border border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background text-foreground"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background text-foreground"
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background text-foreground"
                  placeholder="What is this about?"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background text-foreground resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button & Success Message */}
              <div className="space-y-3">
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                  disabled={submitted}
                >
                  {submitted ? "Message Sent!" : "Send Message"}
                </Button>
                {submitted && (
                  <p className="text-center text-green-600 text-sm font-medium">Thank you! We'll be in touch soon.</p>
                )}
              </div>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="space-y-4">
              <Card className="p-6 border border-border/50 flex gap-4 items-start">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-foreground/70">hello@samatech.ph</p>
                </div>
              </Card>

              <Card className="p-6 border border-border/50 flex gap-4 items-start">
                <Phone className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-foreground/70">+63 (2) 8000-0000</p>
                </div>
              </Card>

              <Card className="p-6 border border-border/50 flex gap-4 items-start">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Address</h4>
                  <p className="text-foreground/70">Aurora Province, Philippines</p>
                </div>
              </Card>
            </div>

            {/* Social Links Placeholder */}
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {["LinkedIn", "Facebook", "Twitter"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="px-4 py-2 border border-border rounded-lg text-foreground/70 hover:text-primary hover:border-primary transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
