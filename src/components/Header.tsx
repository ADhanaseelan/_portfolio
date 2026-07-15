import { useState, ForwardedRef, forwardRef } from 'react'
import { Menu, X } from 'lucide-react'
import { navigationItems } from '../data/portfolioData'

export interface HeaderProps {
  // Empty interface, can be extended later
}

const Header = forwardRef((_props: HeaderProps, ref: ForwardedRef<HTMLElement>) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <header
        ref={ref}
        className="fixed top-0 left-0 right-0 z-50 glass-header px-6 py-4 md:px-12 flex justify-between items-center transition-all duration-300"
      >
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-bold tracking-wider font-display bg-gradient-to-r from-white via-neutral-200 to-orange-500 bg-clip-text text-transparent">
            DHANASEELAN A
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-neutral-400">
          {navigationItems.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-white transition-colors duration-200">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons (Desktop contact & Mobile hamburger toggle) */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-block px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-orange-400 transition-all duration-300 z-50"
          >
            Contact Me
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 text-neutral-400 hover:text-white border border-white/10 hover:border-white/20 bg-white/5 rounded-full transition-all duration-300 z-50"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Sliding Glass Menu Overlay */}
      <div 
        className={`fixed inset-x-0 top-[60px] md:top-[68px] z-40 xl:hidden border-b border-white/5 bg-[#090909]/95 backdrop-blur-xl transition-all duration-500 ease-in-out ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col p-6 space-y-4 font-semibold text-sm uppercase tracking-wider text-neutral-400">
          {navigationItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-white transition-colors py-2 border-b border-white/5 hover:border-orange-500/30"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="sm:hidden block text-center py-3 mt-4 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition-colors text-xs font-bold uppercase tracking-wider"
          >
            Contact Me
          </a>
        </nav>
      </div>
    </>
  )
})

Header.displayName = 'Header'
export default Header
