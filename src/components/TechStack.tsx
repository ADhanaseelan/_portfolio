import { Terminal, Monitor, Cpu, Sparkles } from 'lucide-react'
import { skillCategories } from '../data/portfolioData'

export default function TechStack() {
  return (
    <section id="skills" className="px-6 md:px-12 py-16 md:py-24 scroll-mt-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="scroll-reveal">
          <p className="text-xs uppercase tracking-[0.35em] text-orange-400 font-bold">03 / Tooling & Stack</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mt-2">Technical Skills</h2>
          <p className="text-neutral-400 mt-4 max-w-2xl text-sm md:text-base">
            An organized breakdown of development tools, programming ecosystems, and frameworks I use to build robust apps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <div 
              key={cat.name} 
              className="glass-card p-6 flex flex-col justify-between scroll-reveal hover:border-orange-500/10"
            >
              <div>
                <div className="flex items-center gap-2 border-b border-white/5 pb-3 mb-4">
                  {idx === 0 && <Terminal className="w-4 h-4 text-orange-400" />}
                  {idx === 1 && <Monitor className="w-4 h-4 text-purple-400" />}
                  {idx === 2 && <Cpu className="w-4 h-4 text-blue-400" />}
                  {idx === 3 && <Sparkles className="w-4 h-4 text-pink-400" />}
                  <h3 className="font-bold text-xs uppercase tracking-wider font-display">{cat.name}</h3>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-xs mb-1.5 font-medium">
                        <span className="text-neutral-300">{skill.name}</span>
                        <span className="text-neutral-500">{skill.level}%</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-1000 ${
                            idx % 2 === 0 ? 'bg-gradient-to-r from-orange-500 to-amber-500' : 'bg-gradient-to-r from-purple-500 to-indigo-500'
                          }`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
