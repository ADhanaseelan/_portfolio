import { ArrowDown } from 'lucide-react'
import { journeyTimeline, devProcessSteps } from '../data/portfolioData'

export default function Journey() {
  return (
    <section id="journey" className="px-6 md:px-12 py-16 md:py-24 scroll-mt-24 border-t border-white/5 bg-black/10">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Section Heading */}
        <div className="scroll-reveal">
          <p className="text-xs uppercase tracking-[0.35em] text-orange-400 font-bold">06 / Engineering Evolution</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mt-2">Development Journey</h2>
          <p className="text-neutral-400 mt-4 max-w-2xl text-sm md:text-base">
            Tracing my steps from initial code concepts to full-stack architectures and machine learning systems.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l border-white/10 ml-4 md:ml-12 pl-6 md:pl-10 space-y-10 scroll-reveal">
          {journeyTimeline.map((node, index) => (
            <div key={index} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 border-orange-500 bg-[#090909] group-hover:scale-125 transition-transform" />
              
              <div>
                <span className="text-xs font-bold text-orange-500 font-mono block mb-1">{node.year}</span>
                <h3 className="text-xl font-bold text-white font-display">{node.title}</h3>
                <p className="text-neutral-400 text-xs md:text-sm leading-relaxed mt-2 max-w-3xl">{node.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Development Process flow chart */}
        <div className="glass-card p-8 md:p-10 space-y-8 scroll-reveal">
          <div>
            <h3 className="text-2xl font-bold tracking-tight font-display">My Development Process</h3>
            <p className="text-xs md:text-sm text-neutral-500 mt-2">How I take a project from concept to stable production deployment:</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 py-6">
            {devProcessSteps.map((step, idx) => (
              <div key={step} className="flex items-center gap-4">
                <div className="px-5 py-3 rounded-2xl bg-white/3 border border-white/5 text-xs font-semibold text-neutral-300 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300">
                  <span className="text-[10px] text-orange-500 font-mono mr-2">0{idx + 1}.</span>
                  {step}
                </div>
                {idx < devProcessSteps.length - 1 && (
                  <ArrowDown className="w-4 h-4 text-neutral-600 rotate-[-90deg] hidden md:block shrink-0" />
                )}
                {idx < devProcessSteps.length - 1 && (
                  <ArrowDown className="w-4 h-4 text-neutral-600 md:hidden shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
