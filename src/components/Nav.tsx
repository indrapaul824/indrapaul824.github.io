'use client'
import { useState } from 'react'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#writing', label: 'Writing' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] px-6 md:px-16 py-5 flex justify-between items-center bg-void/85 backdrop-blur-xl border-b border-accent/[0.08]">
        <a href="#" className="font-sora font-bold text-lg text-text-primary w-9 h-9 flex items-center justify-center border border-accent/20 rounded-md">
          IP
        </a>

        <ul className="hidden md:flex gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-space text-[13px] text-text-muted uppercase tracking-[0.08em] hover:text-accent-light transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 w-6"
          aria-label="Menu"
        >
          <span className={`block h-px bg-text-primary transition-transform ${open ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
          <span className={`block h-px bg-text-primary transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-px bg-text-primary transition-transform ${open ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[99] bg-void/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-sora text-2xl text-text-primary hover:text-accent-light transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
