import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

// Import Refined Modular Components
import Header from './components/Header'
import ParticleBackground from './components/ParticleBackground'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Journey from './components/Journey'
import Stats from './components/Stats'
import Chatbot from './components/Chatbot'
import BeyondCoding from './components/BeyondCoding'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

export default function App() {
  // Animation Refs
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  // GSAP Entrance Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header slide down
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.1 }
      )

      // Hero Title slide up
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out', delay: 0.3 }
      )

      // Subtitle fade in
      gsap.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.6 }
      )

      // CTAs fade in
      gsap.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.8 }
      )

      // Timeline trigger scroll transitions
      gsap.utils.toArray('.scroll-reveal').forEach((elem: any) => {
        gsap.fromTo(
          elem,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: elem,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="relative min-h-screen bg-[#090909] text-white selection:bg-orange-500 selection:text-white overflow-hidden">
      
      {/* Drifting particle network background */}
      <ParticleBackground />

      {/* Ambient Color Glow overlays */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full orange-glow pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full purple-glow pointer-events-none z-0" />

      {/* Floating Header */}
      <Header ref={navRef} />

      {/* Main Sections */}
      <Hero titleRef={titleRef} subtitleRef={subtitleRef} ctaRef={ctaRef} />
      
      <main className="relative z-20 bg-[#090909]/95 backdrop-blur-[1px]">
        <About />
        <Education />
        <TechStack />
        <Projects />
        <Experience />
        <Journey />
        <Stats />
        <Chatbot />
        <BeyondCoding />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  )
}
