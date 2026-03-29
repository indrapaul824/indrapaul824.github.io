import Section from './Section'
import RevealOnScroll from './RevealOnScroll'

export default function About() {
  return (
    <Section number="01" label="About" id="about" className="bg-deep">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 relative z-10">
        <RevealOnScroll>
          <div className="text-lg leading-relaxed text-text-muted space-y-5 max-w-xl">
            <p>
              I joined Moveworks as an intern in 2023, straight out of my M.Tech at VIT Bhopal. Within two and a half years, I went from triaging production escalations to owning the content platform and the self-serve experience that takes enterprise search to market — four promotions, zero job changes.
            </p>
            <p>
              The escalations were the real education. Investigating 150+ issues across enterprise SaaS connectors, I stopped seeing individual tickets and started seeing systemic patterns — recurring failure modes that no one was tracking because each instance looked like a one-off. I turned those patterns into roadmap items: standardized playbooks, automated detection systems, and runbooks that cut repeat incidents across the team.
            </p>
            <p>
              Outside work, I&apos;m rebuilding my understanding of AI from first principles — not because I need to train models, but because the products I own sit at the heart of the agentic AI stack. Enterprise search is only as good as the content feeding it. Understanding embeddings, retrieval, and inference helps me write sharper specs and ask better questions of the ML engineers I work with daily.
            </p>
          </div>
        </RevealOnScroll>

        <div className="flex flex-col gap-10 pt-2">
          <RevealOnScroll delay={0.1}>
            <div>
              <div className="font-space text-[11px] text-text-faint uppercase tracking-[0.1em] mb-3">Currently</div>
              <div className="text-[15px] text-text-muted leading-relaxed pl-4 border-l-2 border-accent/20">
                Building a <strong className="text-text-primary font-medium">neural network from scratch</strong> in NumPy — learning backpropagation at the matrix level to reason better about the ML systems I spec at work
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div>
              <div className="font-space text-[11px] text-text-faint uppercase tracking-[0.1em] mb-3">Reading</div>
              <div className="text-[15px] text-text-muted leading-relaxed pl-4 border-l-2 border-accent/20">
                <strong className="text-text-primary font-medium">&ldquo;Designing Data-Intensive Applications&rdquo;</strong> — because our multi-region expansion exposed gaps in how I think about ingestion pipelines and eventual consistency
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <div>
              <div className="font-space text-[11px] text-text-faint uppercase tracking-[0.1em] mb-3">Thinking about</div>
              <div className="text-[15px] text-text-muted leading-relaxed pl-4 border-l-2 border-accent/20">
                Why <strong className="text-text-primary font-medium">federated search via MCP isn&apos;t enough</strong> when you have billions of enterprise documents — and why agentic RAG is the real unlock for AI-powered answers
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </Section>
  )
}
