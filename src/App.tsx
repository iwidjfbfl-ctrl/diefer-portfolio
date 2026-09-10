import { useEffect } from "react"
import { initCleanNavigation } from "@/lib/navigation"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { StripBar } from "@/components/StripBar"
import { About } from "@/components/About"
import { Marquee } from "@/components/Marquee"
import { Stats } from "@/components/Stats"
import { Projects } from "@/components/Projects"
import { Services } from "@/components/Services"
import { Process } from "@/components/Process"
import { Testimonials } from "@/components/Testimonials"
import { TechStack } from "@/components/TechStack"
import { FAQ } from "@/components/FAQ"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { FloatingControls } from "@/components/FloatingControls"

export default function App() {
  useEffect(() => {
    initCleanNavigation()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StripBar />
        <About />
        <Marquee />
        <Stats />
        <Projects />
        <Services />
        <Process />
        <Testimonials />
        <TechStack />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingControls />
    </>
  )
}
