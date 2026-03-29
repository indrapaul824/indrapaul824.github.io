import Section from './Section'
import RevealOnScroll from './RevealOnScroll'

export default function About() {
  return (
    <Section number="01" label="About" id="about" className="bg-deep">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 relative z-10">
        <RevealOnScroll>
          <div className="text-lg leading-relaxed text-text-muted space-y-5 max-w-xl">
            <p>
              I joined Moveworks as an intern in 2023, straight out of my M.Tech at VIT Bhopal. Within two and a half years, I went from triaging production escalations to owning enterprise search strategy and content platform roadmaps — four promotions, zero job changes.
            </p>
            <p>
              The escalations were the real education. Debugging permission failures across SharePoint, ServiceNow, and Salesforce connectors taught me more about enterprise software than any course could. I learned to think in systems — ingestion pipelines, access control models, cross-region data flows.
            </p>
            <p>
              Outside work, I'm rebuilding my understanding of AI from first principles. Not because I need to train models at work, but because I think the PMs who shape the next wave of AI products will be the ones who can reason about what's happening under the hood — not just what the API returns.
            </p>
          </div>
        </RevealOnScroll>

        <div className="flex flex-col gap-10 pt-2">
          <RevealOnScroll delay={0.1}>
            <div>
              <div className="font-space text-[11px] text-text-faint uppercase tracking-[0.1em] mb-3">Currently</div>
              <div className="text-[15px] text-text-muted leading-relaxed pl-4 border-l-2 border-accent/20">
                Building a <strong className="text-text-primary font-medium">neural network from scratch</strong> in NumPy — learning backpropagation at the matrix level
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div>
              <div className="font-space text-[11px] text-text-faint uppercase tracking-[0.1em] mb-3">Reading</div>
              <div className="text-[15px] text-text-muted leading-relaxed pl-4 border-l-2 border-accent/20">
                <strong className="text-text-primary font-medium">&ldquo;Designing Data-Intensive Applications&rdquo;</strong> by Martin Kleppmann
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <div>
              <div className="font-space text-[11px] text-text-faint uppercase tracking-[0.1em] mb-3">Thinking about</div>
              <div className="text-[15px] text-text-muted leading-relaxed pl-4 border-l-2 border-accent/20">
                Why enterprise AI adoption stalls at <strong className="text-text-primary font-medium">connector setup and permissions</strong>, not model quality
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </Section>
  )
}
