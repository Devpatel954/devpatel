import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Blog', href: '#blog' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080808]/90 backdrop-blur-xl border-b border-neutral-800/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="text-sm font-semibold tracking-[0.14em] text-neutral-100 uppercase hover:text-blue-400 transition-colors duration-200"
        >
          Dev Patel
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium tracking-[0.12em] text-neutral-500 hover:text-neutral-100 transition-colors duration-200 uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-[11px] font-medium tracking-[0.12em] px-4 py-2 border border-neutral-700 text-neutral-300 hover:border-blue-500 hover:text-blue-400 transition-all duration-200 uppercase"
          >
            Contact
          </a>
        </div>

        <button
          className="md:hidden flex flex-col justify-center gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`block w-5 h-[2px] bg-neutral-400 transition-all duration-300 origin-center ${
              menuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-neutral-400 transition-all duration-300 ${
              menuOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-neutral-400 transition-all duration-300 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-[#0a0a0a] border-b border-neutral-800/50 ${
          menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-5 flex flex-col gap-5">
          {[...navLinks, { label: 'Contact', href: '#contact' }].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-xs text-neutral-500 hover:text-neutral-100 transition-colors uppercase tracking-[0.14em]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
