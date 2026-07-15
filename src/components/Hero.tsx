import { useEffect, useState, useRef, ForwardedRef, forwardRef } from 'react'
import { ArrowRight, Volume2, VolumeX } from 'lucide-react'

export interface HeroProps {
  titleRef: ForwardedRef<HTMLHeadingElement>
  subtitleRef: ForwardedRef<HTMLParagraphElement>
  ctaRef: ForwardedRef<HTMLDivElement>
}

const Hero = forwardRef((props: HeroProps, ref: ForwardedRef<HTMLElement>) => {
  const [isMuted, setIsMuted] = useState(true)
  const [greeting, setGreeting] = useState('Welcome')
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const hr = new Date().getHours()
    if (hr < 12) setGreeting('Good Morning ☀️')
    else if (hr < 17) setGreeting('Good Afternoon 🌤️')
    else if (hr < 21) setGreeting('Good Evening 🌙')
    else setGreeting('Good Night 🌌')
  }, [])

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  return (
    <section ref={ref} className="relative h-screen w-full flex items-center justify-center overflow-hidden z-20">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <video
          ref={videoRef}
          src="/first1.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-[#090909]/50 z-10" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] z-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/25 bg-orange-500/5 text-orange-400 text-xs font-semibold uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          Open to internships & full-time roles
        </div>

        <p className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-orange-400 mb-2">
          {greeting} • Hi, I'm
        </p>
        <h1
          ref={props.titleRef}
          className="text-5xl md:text-8xl font-extrabold tracking-tight mb-6 font-display"
        >
          Dhanaseelan <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent text-glow-orange">A</span>
        </h1>

        <p className="text-base md:text-xl font-medium tracking-[0.08em] text-neutral-300 uppercase mb-4">
          Full Stack Developer | Frontend Developer | AI & ML Enthusiast
        </p>

        <p
          ref={props.subtitleRef}
          className="text-sm md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-10 font-light"
        >
          Passionate about building modern web applications with React, TypeScript, and Node.js. I enjoy solving real-world problems through software development and continuously learning new technologies.
        </p>

        <div ref={props.ctaRef} className="flex flex-wrap gap-4 items-center justify-center">
          <a
            href="#projects"
            className="group px-8 py-4 rounded-full bg-orange-500 text-white font-semibold text-sm tracking-wide shadow-lg shadow-orange-500/20 hover:bg-orange-600 hover:shadow-orange-600/30 transition-all duration-300 flex items-center gap-2"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-semibold text-sm tracking-wide hover:bg-white/10 transition-all duration-300"
          >
            Contact Me
          </a>
          <a
            href="mailto:dhanaseelandhanaseelan464@gmail.com?subject=Portfolio%20Resume%20Request"
            className="px-8 py-4 rounded-full border border-orange-500/30 bg-orange-500/5 text-orange-400 font-semibold text-sm tracking-wide hover:bg-orange-500/10 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Audio Mute/Unmute toggle */}
      <button
        onClick={toggleMute}
        className="absolute bottom-10 right-6 md:right-12 z-30 p-4 rounded-full bg-neutral-900/60 border border-white/10 text-white hover:bg-neutral-800 hover:text-orange-500 hover:border-orange-500/30 transition-all duration-300"
        aria-label={isMuted ? 'Unmute background video' : 'Mute background video'}
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 animate-pulse" />}
      </button>

      {/* Animated Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold">Scroll Down</span>
        <div className="w-6 h-10 rounded-full border border-neutral-600 flex justify-center p-[6px]">
          <div className="w-1.5 h-2.5 rounded-full bg-orange-500 animate-scroll-wheel"></div>
        </div>
      </div>
    </section>
  )
})

Hero.displayName = 'Hero'
export default Hero
