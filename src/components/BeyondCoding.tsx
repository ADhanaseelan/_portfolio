import { learningTopics, beyondCodingHobbies } from '../data/portfolioData'

export default function BeyondCoding() {
  return (
    <section id="beyond" className="px-6 md:px-12 py-16 md:py-24 scroll-mt-24 border-t border-white/5 bg-black/10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="scroll-reveal">
          <p className="text-xs uppercase tracking-[0.35em] text-orange-400 font-bold">09 / Beyond Code & Goals</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mt-2">Currently Learning & Beyond</h2>
          <p className="text-neutral-400 mt-4 max-w-2xl text-sm md:text-base">
            Exploring new technologies, building long-term career goals, and nurturing interests outside software development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          
          {/* Career Goal & Currently Learning card */}
          <div className="glass-card p-8 space-y-6 scroll-reveal">
            <div>
              <span className="text-[10px] text-orange-400 uppercase font-bold tracking-wider font-mono block mb-2">Career Goal</span>
              <h3 className="text-2xl font-bold font-display">My Goal</h3>
              <p className="text-neutral-300 text-sm mt-3 leading-relaxed">
                To become a Software Engineer who builds scalable, user-focused applications and contributes to impactful products while continuously learning emerging technologies.
              </p>
            </div>

            <div className="border-t border-white/5 pt-6">
              <span className="text-[10px] text-purple-400 uppercase font-bold tracking-wider font-mono block mb-4">Currently Learning</span>
              <div className="flex flex-wrap gap-2.5">
                {learningTopics.map((topic) => (
                  <span 
                    key={topic} 
                    className="px-3.5 py-2 rounded-xl bg-purple-500/5 border border-purple-500/20 text-xs font-semibold text-purple-300"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Beyond Coding / Human Interests card */}
          <div className="glass-card p-8 space-y-6 scroll-reveal">
            <div>
              <span className="text-[10px] text-blue-400 uppercase font-bold tracking-wider font-mono block mb-2">Human Element</span>
              <h3 className="text-2xl font-bold font-display">Beyond Coding</h3>
              <p className="text-neutral-400 text-xs mt-1">When I am not writing code, I actively spend my time doing these:</p>
            </div>

            <div className="space-y-4">
              {beyondCodingHobbies.map((hobby) => (
                <div 
                  key={hobby.label} 
                  className="flex items-center gap-4 bg-white/2 p-3.5 rounded-xl border border-white/5 hover:border-blue-500/20 transition-all duration-300"
                >
                  <span className="text-xl bg-blue-500/10 w-10 h-10 rounded-lg flex items-center justify-center">{hobby.icon}</span>
                  <span className="text-xs md:text-sm text-neutral-300 font-semibold">{hobby.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Motto Banner */}
        <div className="glass-card p-8 text-center border-orange-500/20 bg-gradient-to-r from-orange-500/5 to-purple-500/5 scroll-reveal">
          <p className="text-sm font-bold text-neutral-400 uppercase tracking-widest font-mono">Personal Motto</p>
          <blockquote className="text-2xl md:text-3xl font-extrabold text-white mt-4 font-display leading-tight">
            "I don't just write code—I build solutions that create value."
          </blockquote>
        </div>

      </div>
    </section>
  )
}
