import { ReactNode } from 'react'
import RevealOnScroll from './RevealOnScroll'

interface Props {
  number: string
  label: string
  children: ReactNode
  className?: string
  id?: string
}

export default function Section({ number, label, children, className = '', id }: Props) {
  return (
    <section id={id} className={`relative px-6 md:px-16 py-24 md:py-36 ${className}`}>
      <div className="absolute top-16 md:top-24 left-6 md:left-12 font-sora text-[120px] md:text-[200px] font-extrabold text-white/[0.025] leading-none pointer-events-none select-none">
        {number}
      </div>
      <RevealOnScroll>
        <div className="font-space text-[13px] font-medium text-accent-light uppercase tracking-[0.12em] mb-10 md:mb-12">
          {label}
        </div>
      </RevealOnScroll>
      {children}
    </section>
  )
}
