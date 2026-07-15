import { Mail, Phone, Linkedin, Github, Code } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-12 py-16 md:py-24 scroll-mt-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
        
        <div className="scroll-reveal space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-orange-400 font-bold">10 / Outreach</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Let's Connect</h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
            I am actively seeking software internships, full stack projects, and junior frontend engineering opportunities. Reach out via email, phone, or any social channels.
          </p>

          {/* Direct Actions */}
          <div className="space-y-4 pt-4">
            <a 
              href="mailto:dhanaseelandhanaseelan464@gmail.com" 
              className="flex items-center justify-between gap-4 rounded-2xl bg-white/5 border border-white/10 px-6 py-5 hover:border-orange-500/40 transition-colors"
            >
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 font-bold block mb-1 font-mono">Email Address</span>
                <span className="text-sm md:text-base font-semibold">dhanaseelandhanaseelan464@gmail.com</span>
              </div>
              <Mail className="w-5 h-5 text-orange-400" />
            </a>

            <a 
              href="tel:+916383694530" 
              className="flex items-center justify-between gap-4 rounded-2xl bg-white/5 border border-white/10 px-6 py-5 hover:border-orange-500/40 transition-colors"
            >
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 font-bold block mb-1 font-mono">Phone Call</span>
                <span className="text-sm md:text-base font-semibold">+91 6383694530</span>
              </div>
              <Phone className="w-5 h-5 text-orange-400" />
            </a>
          </div>
        </div>

        {/* Social directories card */}
        <div className="glass-card p-8 md:p-10 space-y-6 scroll-reveal border-purple-500/10">
          <h3 className="text-2xl font-bold mb-4 font-display">Social Directories</h3>
          <p className="text-neutral-400 text-xs leading-relaxed">
            Connect with me on professional engineering and contribution registries:
          </p>

          <div className="grid grid-cols-2 gap-4">
            <a 
              href="https://linkedin.com/in/dhanaseelan-mass/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/5 hover:border-orange-500/30 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-orange-400 shrink-0" />
              <span className="text-xs font-semibold uppercase font-mono">LinkedIn</span>
            </a>
            <a 
              href="https://github.com/ADhanaseelan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/5 hover:border-orange-500/30 transition-colors"
            >
              <Github className="w-5 h-5 text-orange-400 shrink-0" />
              <span className="text-xs font-semibold uppercase font-mono">GitHub</span>
            </a>
            <a 
              href="https://leetcode.com/u/Dhanaseelan_01/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/5 hover:border-orange-500/30 transition-colors"
            >
              <Code className="w-5 h-5 text-orange-400 shrink-0" />
              <span className="text-xs font-semibold uppercase font-mono">LeetCode</span>
            </a>
            <a 
              href="mailto:dhanaseelandhanaseelan464@gmail.com" 
              className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/5 hover:border-orange-500/30 transition-colors"
            >
              <Mail className="w-5 h-5 text-orange-400 shrink-0" />
              <span className="text-xs font-semibold uppercase font-mono">Email</span>
            </a>
          </div>

          <div className="border-t border-white/5 pt-6 text-center text-xs text-neutral-500">
            <span className="block font-bold font-mono">Location</span>
            <span className="text-neutral-400 block mt-1">Erode, Tamil Nadu, India</span>
          </div>
        </div>

      </div>
    </section>
  )
}
