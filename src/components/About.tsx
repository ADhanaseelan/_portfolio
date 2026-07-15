import { MapPin } from 'lucide-react'

export default function About() {
  const differences = [
    'Learn new technologies quickly',
    'Strong problem-solving mindset',
    'Build complete applications from UI to Database',
    'Focus on clean and maintainable code',
    'Interested in AI + Full Stack Development',
    'Always improving through personal projects'
  ]

  return (
    <section id="about" className="px-6 md:px-12 py-16 md:py-24 scroll-mt-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* About Grid */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          
          <div className="space-y-6 scroll-reveal">
            <p className="text-xs uppercase tracking-[0.35em] text-orange-400 font-bold">01 / Profile Biography</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Who Am I?</h2>
            
            <div className="space-y-4 text-neutral-400 text-sm md:text-base leading-relaxed">
              <p>
                I'm a <strong className="text-white">Full Stack Developer</strong> passionate about building scalable web applications with modern technologies. I enjoy transforming ideas into real products using <strong className="text-white">React, TypeScript, Node.js, and AI-powered solutions</strong>. My goal is to create software that is simple, efficient, and impactful.
              </p>
              <p>
                I am a Final Year B.Tech Information Technology student at <strong className="text-white">Nandha Engineering College</strong>. Bridging high-performance web frontends with logical database backends is what drives my daily engineering.
              </p>
            </div>

            {/* Visual Numbers Summary */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="rounded-xl border border-white/5 bg-white/5 p-4 text-center">
                <div className="text-orange-400 font-bold text-2xl mb-1 font-display">8.4</div>
                <div className="text-[10px] uppercase text-neutral-500 tracking-wider font-semibold">IT CGPA</div>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/5 p-4 text-center">
                <div className="text-purple-400 font-bold text-2xl mb-1 font-display">5+</div>
                <div className="text-[10px] uppercase text-neutral-500 tracking-wider font-semibold">Full Stack Apps</div>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/5 p-4 text-center">
                <div className="text-blue-400 font-bold text-2xl mb-1 font-display">420+</div>
                <div className="text-[10px] uppercase text-neutral-500 tracking-wider font-semibold font-mono">Solved DSA</div>
              </div>
            </div>
          </div>

          {/* Profile Card & Avatar */}
          <div className="glass-card p-8 md:p-10 space-y-6 flex flex-col justify-between items-center scroll-reveal border-orange-500/10">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-orange-500/30 shadow-2xl shadow-orange-500/5 bg-neutral-900">
              <img 
                src="/animation_profile.png" 
                alt="Dhanaseelan A Profile" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ea580c' width='100%25' height='100%25'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E";
                }}
              />
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-1 font-display">Dhanaseelan A</h3>
              <p className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">Software Developer Intern</p>
              <div className="flex items-center gap-1 justify-center text-xs text-orange-400 mt-2 font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                Erode, Tamil Nadu
              </div>
            </div>

            <div className="w-full border-t border-white/5 pt-4 grid grid-cols-2 gap-4 text-xs text-neutral-400">
              <div>
                <span className="text-[10px] text-neutral-600 block uppercase tracking-wider mb-1 font-bold">University</span>
                <span className="text-white font-medium">B.Tech IT (Final Year)</span>
              </div>
              <div>
                <span className="text-[10px] text-neutral-600 block uppercase tracking-wider mb-1 font-bold">Specialty Focus</span>
                <span className="text-white font-medium">Full Stack & AI</span>
              </div>
            </div>

            <a
              href="#contact"
              className="w-full py-3 rounded-xl border border-white/10 hover:border-orange-500/40 text-center text-xs font-semibold tracking-wider uppercase transition-colors"
            >
              Let's Talk
            </a>
          </div>

        </div>

        {/* Developer Philosophy & Quote Banner Row */}
        <div className="grid md:grid-cols-2 gap-6 scroll-reveal">
          <div className="glass-card p-8 border-l-2 border-l-orange-500 relative bg-gradient-to-br from-orange-500/2 to-transparent">
            <span className="text-[9px] uppercase tracking-wider text-orange-500 font-bold font-mono">Developer Philosophy</span>
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed mt-4 italic font-light">
              "I believe technology should solve real-world problems. Every project I build focuses on creating clean user experiences, scalable architecture, and practical solutions that make people's lives easier."
            </p>
          </div>
          
          <div className="glass-card p-8 border-l-2 border-l-purple-500 relative bg-gradient-to-br from-purple-500/2 to-transparent flex flex-col justify-between">
            <div>
              <span className="text-[9px] uppercase tracking-wider text-purple-500 font-bold font-mono">Core Mantra</span>
              <p className="text-neutral-300 text-sm md:text-base leading-relaxed mt-4 font-semibold font-display">
                "Code with purpose. Design with empathy. Build for impact."
              </p>
            </div>
            <div className="text-right text-[10px] uppercase tracking-widest text-neutral-500 font-bold mt-4 font-mono">
              — Personal Motto
            </div>
          </div>
        </div>

        {/* What Makes Me Different checklist section */}
        <div className="glass-card p-8 md:p-10 scroll-reveal">
          <h3 className="text-2xl font-bold mb-6 tracking-tight font-display">What Makes Me Different</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differences.map((diff) => (
              <div key={diff} className="flex items-start gap-3 bg-white/2 p-4 rounded-xl border border-white/5 hover:border-orange-500/20 transition-all duration-300">
                <span className="text-orange-500 text-lg">✔</span>
                <span className="text-xs md:text-sm text-neutral-300 leading-relaxed font-semibold">{diff}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
