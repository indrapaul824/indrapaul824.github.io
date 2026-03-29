import RevealOnScroll from './RevealOnScroll'

const stats = [
  { number: '30+', label: 'Customer renewals & deal closures driven' },
  { number: '5x', label: 'Marketplace production velocity increase' },
  { number: '4', label: 'Promotions in 2.5 years — intern to PM' },
]

const tags = ['Enterprise AI', 'Content Platforms', 'Search & Retrieval']

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-16 overflow-hidden">
      <div className="absolute top-[35%] left-[15%] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(99,102,241,0.05)_0%,transparent_65%)] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full max-w-7xl relative z-10 pt-24 lg:pt-0">
        <div>
          <RevealOnScroll>
            <h1 className="font-sora text-5xl md:text-[56px] font-bold tracking-tight leading-[1.1] mb-6">
              Indrashis<br />
              <span className="bg-gradient-to-br from-accent to-accent-light bg-clip-text text-transparent">
                Paul
              </span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <p className="font-dm text-lg text-text-muted leading-relaxed mb-8 max-w-md">
              Product manager at <strong className="text-text-primary font-medium">Moveworks (ServiceNow)</strong> — owning the content platform and self-serve experience that powers enterprise search for Fortune 500 companies.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="font-space text-xs text-text-dim uppercase tracking-[0.08em] px-3.5 py-1.5 border border-accent/[0.12] rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </RevealOnScroll>
        </div>

        <div className="flex flex-col">
          {stats.map((stat, i) => (
            <RevealOnScroll key={stat.label} delay={i * 0.1}>
              <div className={`py-7 ${i < stats.length - 1 ? 'border-b border-white/[0.06]' : ''} ${i === 0 ? 'pt-0' : ''}`}>
                <div className="font-sora text-4xl font-bold text-accent-light mb-1">{stat.number}</div>
                <div className="font-space text-[13px] text-text-dim tracking-wide">{stat.label}</div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <div className="absolute bottom-12 left-6 md:left-16 font-space text-[11px] text-text-faint uppercase tracking-[0.1em] flex items-center gap-2">
        Scroll <span className="animate-bounce">&#8595;</span>
      </div>
    </section>
  )
}
