import { Activity, Github, ExternalLink } from 'lucide-react'
import { statsByNumbers } from '../data/portfolioData'

export default function Stats() {
  return (
    <section id="stats" className="px-6 md:px-12 py-16 md:py-24 scroll-mt-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="scroll-reveal">
          <p className="text-xs uppercase tracking-[0.35em] text-orange-400 font-bold">07 / Analytics Dashboard</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mt-2">By the Numbers</h2>
          <p className="text-neutral-400 mt-4 max-w-2xl text-sm md:text-base">
            Measuring engineering commitment, algorithmic focus, and project deployment metrics.
          </p>
        </div>

        {/* By the Numbers Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 scroll-reveal">
          {statsByNumbers.map((stat, idx) => (
            <div key={idx} className="glass-card p-6 text-center hover:border-orange-500/20 transition-all duration-300">
              <span className="text-[10px] text-neutral-500 block uppercase tracking-wider mb-2 font-mono">{stat.label}</span>
              <span className="text-2xl md:text-3xl font-extrabold text-white font-display bg-gradient-to-r from-white to-orange-500 bg-clip-text text-transparent">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* LeetCode & GitHub Analytics Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* LeetCode Stats Visual Card */}
          <div className="glass-card p-8 scroll-reveal hover:border-orange-500/20">
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <Activity className="w-5 h-5 text-orange-400" />
                <h3 className="font-bold text-lg font-display">LeetCode Analytics</h3>
              </div>
              <span className="px-3 py-1 rounded bg-orange-500/10 text-orange-400 text-xs font-semibold uppercase font-mono">
                Active
              </span>
            </div>

            <div className="grid grid-cols-2 gap-6 items-center">
              <div>
                <span className="text-neutral-500 text-[10px] uppercase font-bold tracking-wider font-mono">Total Solved</span>
                <div className="text-5xl font-black text-white mt-1 font-display">422</div>
                <p className="text-xs text-neutral-500 mt-2">Top 15% computational statistics</p>
              </div>
              
              <div className="space-y-3 font-mono text-xs">
                <div>
                  <div className="flex justify-between text-neutral-400 mb-1">
                    <span>Easy</span>
                    <span className="text-green-400">180 / 180</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '100%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-neutral-400 mb-1">
                    <span>Medium</span>
                    <span className="text-yellow-400">210 / 250</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500 rounded-full" style={{ width: '84%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-neutral-400 mb-1">
                    <span>Hard</span>
                    <span className="text-red-400">32 / 50</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full" style={{ width: '64%' }} />
                  </div>
                </div>
              </div>
            </div>

            <a 
              href="https://leetcode.com/u/Dhanaseelan_01/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-8 border-t border-white/5 pt-4 text-xs font-semibold text-neutral-400 hover:text-white flex items-center justify-between group font-mono"
            >
              Verify on LeetCode.com
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* GitHub Activity Visual Card */}
          <div className="glass-card p-8 scroll-reveal hover:border-purple-500/20">
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-purple-400" />
                <h3 className="font-bold text-lg font-display">GitHub Statistics</h3>
              </div>
              <span className="px-3 py-1 rounded bg-purple-500/10 text-purple-400 text-xs font-semibold uppercase font-mono">
                Active Contributor
              </span>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-center text-xs">
                <div>
                  <span className="text-[10px] text-neutral-500 uppercase font-bold tracking-wider font-mono">Contributions</span>
                  <div className="text-3xl font-bold mt-1 text-white">500+ Commits</div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-neutral-500 uppercase font-bold tracking-wider font-mono">Repositories</span>
                  <div className="text-3xl font-bold mt-1 text-white">12+ Public</div>
                </div>
              </div>

              {/* SVG Mock Contribution Grid */}
              <div>
                <span className="text-[9px] uppercase tracking-wider text-neutral-500 block mb-2 font-bold font-mono">Consistency Chart</span>
                <div className="overflow-x-auto w-full pb-1">
                  <div className="grid gap-1 min-w-[280px]" style={{ gridTemplateColumns: 'repeat(24, minmax(0, 1fr))' }}>
                    {Array.from({ length: 48 }).map((_, idx) => {
                      const colors = ['bg-neutral-900', 'bg-orange-500/20', 'bg-orange-500/40', 'bg-orange-500/80', 'bg-orange-500']
                      const randomColorIdx = Math.floor(Math.sin(idx * 0.5) * 2.5 + 2.5)
                      return (
                        <div 
                          key={idx} 
                          className={`w-full aspect-square rounded-sm ${colors[randomColorIdx]}`}
                        />
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            <a 
              href="https://github.com/ADhanaseelan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-8 border-t border-white/5 pt-4 text-xs font-semibold text-neutral-400 hover:text-white flex items-center justify-between group font-mono"
            >
              Verify on GitHub.com
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
