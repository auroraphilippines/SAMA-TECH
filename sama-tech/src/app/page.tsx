import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { SAMASection } from "@/components/sama-acronyms"
import { Services } from "@/components/service"
import { About } from "@/components/about"
import { Blog } from "@/components/blog"
import { Projects } from "@/components/project"
import { Commitments } from "@/components/commitment"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Team } from "@/components/team"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <SAMASection />
      <Services />
      <About />
      <Team />
      <Blog />
      <Projects />
      <Commitments />
      <ContactForm />
      <Footer />
    </main>
  )
}
