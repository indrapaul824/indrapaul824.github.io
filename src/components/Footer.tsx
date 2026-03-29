import RevealOnScroll from './RevealOnScroll'

export default function Footer() {
  return (
    <footer id="contact" className="relative px-6 md:px-16 pt-24 md:pt-36 pb-16 md:pb-20">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(99,102,241,0.05)_0%,transparent_70%)] pointer-events-none" />

      <RevealOnScroll>
        <h2 className="font-sora text-4xl md:text-5xl font-bold tracking-tight mb-4 relative z-10">
          Say hello.
        </h2>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <p className="text-base md:text-lg text-text-dim mb-10 relative z-10">
          Always interested in hard problems, honest conversations, and ambitious teams.
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2}>
        <div className="flex flex-wrap items-center gap-6 mb-20 relative z-10">
          <a href="mailto:indrashispaul@gmail.com" className="font-space text-[15px] text-accent-light hover:text-accent-pale transition-colors">
            indrashispaul@gmail.com
          </a>
          <div className="w-px h-4 bg-text-faint/40" />
          <div className="flex gap-5">
            <a href="https://github.com/indrapaul824" target="_blank" rel="noopener noreferrer" className="font-space text-[13px] text-text-faint hover:text-text-muted transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/indrashispaul" target="_blank" rel="noopener noreferrer" className="font-space text-[13px] text-text-faint hover:text-text-muted transition-colors">LinkedIn</a>
            <a href="https://twitter.com/indrapaul824" target="_blank" rel="noopener noreferrer" className="font-space text-[13px] text-text-faint hover:text-text-muted transition-colors">Twitter</a>
          </div>
        </div>
      </RevealOnScroll>

      <p className="text-[13px] text-text-faint relative z-10">© 2026 Indrashis Paul</p>
    </footer>
  )
}
