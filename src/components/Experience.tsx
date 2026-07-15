export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-12 py-16 md:py-24 scroll-mt-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
        
        <div className="scroll-reveal space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-orange-400 font-bold">05 / Industry Practice</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Work Experience</h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
            Applying theoretical paradigms to client projects and developing functional frontend features under production deadlines.
          </p>
        </div>

        <div className="space-y-8 scroll-reveal">
          {/* AST Internship Card */}
          <div className="glass-card p-8 border-l-2 border-l-orange-500 hover:border-orange-500/20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-4">
              <div>
                <h3 className="text-2xl font-bold font-display">Frontend Developer Intern</h3>
                <p className="text-orange-400 text-xs font-semibold tracking-widest uppercase mt-1 font-mono">AST Technologies</p>
              </div>
              <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs text-neutral-400 font-semibold font-mono">
                6 Months Consultancy
              </span>
            </div>

            <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
              Worked on developing scalable web interfaces, optimizing load times, and integrating rest endpoints into user dashboards.
            </p>

            <div className="space-y-3">
              <span className="text-[10px] uppercase font-bold text-neutral-500 block tracking-wider font-mono">Responsibilities:</span>
              <ul className="grid sm:grid-cols-2 gap-3 text-xs text-neutral-300 font-semibold">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                  Developed responsive HTML5/React UIs
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                  Integrated backend REST APIs
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                  Improved website load metrics
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                  Collaborated with the dev team
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
