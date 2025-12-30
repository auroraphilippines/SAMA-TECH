import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary-foreground flex items-center justify-center text-primary">
                ST
              </div>
              <span>SAMA TECH</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Building sustainable digital systems that modernize Aurora Province and serve every resident.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: "Home", href: "#" },
                { label: "About Us", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Projects", href: "#projects" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:hello@samatech.ph"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  hello@samatech.ph
                </a>
              </div>
              <div className="flex gap-3 items-start">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+63280000000"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +63 (2) 8000-0000
                </a>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">Aurora Province, Philippines</span>
              </div>
            </div>
          </div>

          {/* Newsletter or CTA */}
          <div>
            <h4 className="font-bold mb-4">Stay Updated</h4>
            <p className="text-primary-foreground/80 mb-4">
              Subscribe to our newsletter for updates on Aurora's digital transformation.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
              />
              <button className="px-4 py-2 rounded-lg bg-primary-foreground text-primary font-medium hover:bg-primary-foreground/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-primary-foreground/70 text-sm">
          <p>&copy; {currentYear} SAMA TECH. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-primary-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
