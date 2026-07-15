import { BookOpen, GraduationCap } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="px-6 md:px-12 py-16 md:py-24 scroll-mt-24 border-t border-white/5 bg-black/10">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="scroll-reveal">
          <p className="text-xs uppercase tracking-[0.35em] text-orange-400 font-bold">02 / Academic Foundation</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mt-2">Education Timeline</h2>
          <p className="text-neutral-400 mt-4 max-w-2xl text-sm md:text-base">
            Building structured analytical foundations through Information Technology coursework and computer science training.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* College Card */}
          <div className="glass-card p-8 relative overflow-hidden flex flex-col justify-between scroll-reveal hover:border-orange-500/20">
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-bl-full pointer-events-none flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-orange-500/30" />
            </div>
            <div>
              <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-semibold tracking-wide uppercase">
                B.Tech IT (College)
              </span>
              <h3 className="text-2xl font-bold mt-4 font-display">Nandha Engineering College</h3>
              <p className="text-neutral-400 text-sm mt-1">Autonomous Institution affiliated to Anna University</p>
              <p className="text-xs text-neutral-500 mt-2">Erode, Tamil Nadu</p>
            </div>
            <div className="mt-8 border-t border-white/5 pt-4 flex justify-between items-center">
              <div>
                <span className="text-[10px] text-neutral-600 block uppercase font-bold font-mono">Duration</span>
                <span className="text-white font-medium text-sm">2023 – 2027</span>
              </div>
              <div>
                <span className="text-[10px] text-neutral-600 block uppercase font-bold font-mono">CGPA</span>
                <span className="text-orange-400 font-bold text-lg font-display">8.4</span>
              </div>
            </div>
          </div>

          {/* School Card */}
          <div className="glass-card p-8 relative overflow-hidden flex flex-col justify-between scroll-reveal hover:border-purple-500/20">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-bl-full pointer-events-none flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-purple-500/30" />
            </div>
            <div>
              <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold tracking-wide uppercase">
                Higher Secondary Schooling
              </span>
              <h3 className="text-2xl font-bold mt-4 font-display">Dhanalakshmi Jubilee Higher Secondary School</h3>
              <p className="text-neutral-400 text-sm mt-1">HSC Secondary Board Education</p>
              <p className="text-xs text-neutral-500 mt-2">Tamil Nadu State Board</p>
            </div>
            <div className="mt-8 border-t border-white/5 pt-4 flex justify-between items-center">
              <div>
                <span className="text-[10px] text-neutral-600 block uppercase font-bold font-mono">Duration</span>
                <span className="text-white font-medium text-sm">2021 – 2023</span>
              </div>
              <div>
                <span className="text-[10px] text-neutral-600 block uppercase font-bold font-mono">Percentage</span>
                <span className="text-purple-400 font-bold text-lg font-display">80%</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
