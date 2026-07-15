import { useState } from 'react'
import { Sparkles, HelpCircle, Lightbulb, CheckCircle2, ExternalLink } from 'lucide-react'
import { projectItems, featuredProject } from '../data/portfolioData'

export default function Projects() {
  const [activeProjectFilter, setActiveProjectFilter] = useState('All')
  const [projectSearchQuery, setProjectSearchQuery] = useState('')

  // Filter projects by category and search query
  const filteredProjects = projectItems.filter((p) => {
    const matchesFilter = activeProjectFilter === 'All' || p.category.includes(activeProjectFilter) || p.tech.includes(activeProjectFilter)
    const matchesSearch = p.title.toLowerCase().includes(projectSearchQuery.toLowerCase()) || p.description.toLowerCase().includes(projectSearchQuery.toLowerCase()) || p.tech.toLowerCase().includes(projectSearchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <section id="projects" className="px-6 md:px-12 py-16 md:py-24 scroll-mt-24 border-t border-white/5 bg-black/10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header section */}
        <div className="scroll-reveal">
          <p className="text-xs uppercase tracking-[0.35em] text-orange-400 font-bold">04 / Portfolio Showcase</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mt-2">Projects & Highlights</h2>
          <p className="text-neutral-400 mt-4 max-w-2xl text-sm md:text-base">
            Full-stack implementations, mobile applications, and AI integrations created to solve administrative workflow problems.
          </p>
        </div>

        {/* FEATURED PROJECT SPOTLIGHT CARD */}
        <div className="glass-card p-8 md:p-10 border-orange-500/20 bg-gradient-to-r from-orange-500/5 via-transparent to-purple-500/5 relative overflow-hidden scroll-reveal">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-bl-full pointer-events-none flex items-center justify-center">
            <Sparkles className="w-10 h-10 text-orange-500/20 animate-pulse" />
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping" />
            <span className="text-[10px] text-orange-400 font-bold uppercase tracking-widest font-mono">Featured Spotlight</span>
          </div>

          <h3 className="text-3xl font-extrabold tracking-tight mb-6 font-display">{featuredProject.title}</h3>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            
            {/* Problem & Solution */}
            <div className="space-y-6">
              <div className="flex gap-4 items-start bg-white/2 p-4 rounded-xl border border-white/5">
                <HelpCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-display">The Problem</h4>
                  <p className="text-sm text-neutral-300 mt-2 leading-relaxed">{featuredProject.problem}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-white/2 p-4 rounded-xl border border-white/5">
                <Lightbulb className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-display">The Solution</h4>
                  <p className="text-sm text-neutral-300 mt-2 leading-relaxed">{featuredProject.solution}</p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="glass-card p-6 border-white/5 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono">Key Core Features:</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {featuredProject.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2.5 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <span className="font-semibold">{feat}</span>
                  </div>
                ))}
              </div>
              <div className="text-[10px] text-neutral-500 font-mono pt-4 border-t border-white/5">
                Tech Stack: React.js • Node.js • PostgreSQL • AI Constraint Resolution
              </div>
            </div>

          </div>
        </div>

        {/* PROJECTS GRID & FILTER PANEL */}
        <div className="space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 scroll-reveal">
            <h3 className="text-2xl font-bold tracking-tight font-display">Complete Directory</h3>

            {/* Dynamic Filtering Panel */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full lg:w-auto">
              <input
                type="text"
                placeholder="Search projects..."
                value={projectSearchQuery}
                onChange={(e) => setProjectSearchQuery(e.target.value)}
                className="w-full sm:w-48 px-4 py-2 text-xs rounded-full border border-white/10 bg-[#111111]/80 text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500/50"
              />
              
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                {['All', 'Full Stack', 'Frontend', 'PostgreSQL', 'Firebase'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveProjectFilter(filter)}
                    className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border transition-all duration-300 ${
                      activeProjectFilter === filter 
                        ? 'border-orange-500/40 bg-orange-500/10 text-orange-400' 
                        : 'border-white/10 bg-white/5 text-neutral-400 hover:text-white'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="py-16 text-center text-neutral-500 text-sm border border-dashed border-white/10 rounded-2xl bg-white/1 scroll-reveal">
              No projects match your filter or search query. Try typing another term!
            </div>
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <article 
                  key={project.title} 
                  className="glass-card-interactive p-6 md:p-8 flex flex-col justify-between min-h-[360px] scroll-reveal"
                >
                  <div>
                    <div className="flex justify-between items-start gap-4">
                      <span className="text-[10px] text-orange-400 font-bold uppercase tracking-wider block mb-2">{project.category}</span>
                      {project.link && (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-500 hover:text-orange-400 transition-colors"
                          aria-label={`Visit live link for ${project.title}`}
                        >
                          <ExternalLink className="w-4.5 h-4.5" />
                        </a>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 tracking-tight font-display">{project.title}</h3>
                    <p className="text-xs text-neutral-500 font-mono mb-4">{project.tech}</p>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6">{project.description}</p>
                  </div>

                  <div>
                    <div className="border-t border-white/5 pt-4">
                      <span className="text-[9px] uppercase tracking-wider text-neutral-500 block mb-2 font-bold font-mono">Key Features</span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.features.map((feat) => (
                          <span key={feat} className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-neutral-400">
                            {feat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
