'use client'

import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Education from '@/components/sections/Education'
import Experience from '@/components/sections/Experience'
import Footer from '@/components/sections/Footer'
import Hero from '@/components/sections/Hero'
import Navigation from '@/components/Navigation'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Reviews from '@/components/sections/Reviews'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Reviews />
        <Contact />
        <Footer />
      </main>
    </>
  )
}