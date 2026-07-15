import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-white/5 bg-black/40 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-xs text-neutral-500 tracking-wider">
          © 2026 Dhanaseelan A. All rights reserved. Built using React & Tailwind.
        </span>
        <div className="flex gap-6">
          <a href="https://github.com/ADhanaseelan" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com/in/dhanaseelan-mass/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="mailto:dhanaseelandhanaseelan464@gmail.com" className="text-neutral-500 hover:text-white transition-colors">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
