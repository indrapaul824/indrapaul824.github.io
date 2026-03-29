import Section from './Section'
import RevealOnScroll from './RevealOnScroll'

const caseStudies = [
  {
    name: 'Content Platform',
    problem: 'Enterprise AI answers are only as good as the content feeding them. Customers needed secure, permissioned access across 16+ SaaS systems — each with different APIs, permission models, and ingestion patterns. A Glean comparison showed gaps in our ingestion times, incremental sync, and permissions coverage.',
    insight: 'Through 150+ escalation investigations, I discovered systemic issues hiding beneath individual tickets — flaky MSGraph webhook deletes, content deletion gaps, and a critical SharePoint Group Cache Key Collision that was causing unauthorized file access across customer orgs.',
    action: 'Prioritized integrations by revenue impact and deal risk — not request volume. Built a Claude-assisted playbook that standardized how we develop connectors, cutting future build time. Drove Config Change Detection to eliminate manual full syncs. Shipped permission-aware integrations for SharePoint, ServiceNow, Salesforce, Zendesk, Notion, and more.',
    result: 'Directly drove 30+ customer renewals/upsells and 5+ prospect deal closures. Unblocked the Enterprise Search go-to-market motion. The security RCA became a case study in our internal PM onboarding.',
    metric: '30+',
    metricLabel: 'Renewals & deals driven',
    link: '/blog/content-platform-case-study',
  },
  {
    name: 'AI Agent Marketplace',
    problem: 'Moveworks needed a scalable way for customers to discover and install AI agent capabilities. Plugin production was bottlenecked at ~3-4 guides per month, making a marketplace launch impossible at that velocity.',
    insight: 'The bottleneck wasn\'t engineering — it was the research and production pipeline. Each plugin guide required deep API research, system-specific nuance, and Creator Studio expertise. No single person could scale it.',
    action: 'Led a team of Product Analysts. Collaborated with the Creator Studio PM to define a production roadmap. Standardized the research-to-publish pipeline. Managed the API product lifecycle from beta through GA, collecting feedback from 8 customers in beta1 and 20+ in beta2.',
    result: 'Increased production velocity from ~3-4/month to ~18-20/month (5x). Enabled 100+ installable plugins and the official Marketplace launch. Data API feedback loop shaped v1.',
    metric: '5x',
    metricLabel: 'Production velocity',
    link: '/blog/marketplace-case-study',
  },
]

const techProjects = [
  {
    name: 'VORTEX',
    desc: 'Tropical cyclone intensity estimation using deep learning on satellite imagery.',
    link: 'https://github.com/indrapaul824/VORTEX',
  },
  {
    name: 'Skin Cancer Detector',
    desc: '7-class dermatological classification using CNNs on HAM10000 dataset.',
    link: 'https://github.com/indrapaul824/skin-cancer-detector',
  },
  {
    name: 'Neural Net from Scratch',
    desc: 'Building a neural network in pure NumPy — current learning project.',
    link: 'https://github.com/indrapaul824',
  },
]

export default function Projects() {
  return (
    <Section number="03" label="Case Studies" className="bg-deep">
      <div className="relative z-10 space-y-0">
        {caseStudies.map((cs, i) => (
          <RevealOnScroll key={cs.name}>
            <div className={`py-16 md:py-20 ${i > 0 ? 'border-t border-accent/[0.05]' : ''}`}>
              {/* Header row: name + metric */}
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-start mb-10">
                <h3 className="font-sora text-3xl md:text-4xl font-bold tracking-tight">{cs.name}</h3>
                <div className="lg:text-right">
                  <div className="font-sora text-[80px] md:text-[110px] font-extrabold leading-none bg-gradient-to-br from-accent to-accent-light bg-clip-text text-transparent">
                    {cs.metric}
                  </div>
                  <div className="font-space text-[13px] text-text-dim uppercase tracking-[0.08em] mt-2">
                    {cs.metricLabel}
                  </div>
                </div>
              </div>

              {/* STAR breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
                <div>
                  <div className="font-space text-[11px] text-accent-light uppercase tracking-[0.1em] mb-3">Problem</div>
                  <p className="text-sm text-text-muted leading-relaxed">{cs.problem}</p>
                </div>
                <div>
                  <div className="font-space text-[11px] text-accent-light uppercase tracking-[0.1em] mb-3">Insight</div>
                  <p className="text-sm text-text-muted leading-relaxed">{cs.insight}</p>
                </div>
                <div>
                  <div className="font-space text-[11px] text-accent-light uppercase tracking-[0.1em] mb-3">Action</div>
                  <p className="text-sm text-text-muted leading-relaxed">{cs.action}</p>
                </div>
                <div>
                  <div className="font-space text-[11px] text-accent-light uppercase tracking-[0.1em] mb-3">Result</div>
                  <p className="text-sm text-text-muted leading-relaxed">{cs.result}</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll>
        <div className="relative z-10 mt-16 pt-16 border-t border-accent/[0.05]">
          <div className="font-space text-[11px] text-text-faint uppercase tracking-[0.1em] mb-8">Technical Projects</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {techProjects.map((p) => (
              <a
                key={p.name}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 border border-accent/[0.06] rounded-lg hover:border-accent/20 transition-colors"
              >
                <div className="font-sora text-base font-semibold mb-2 group-hover:text-accent-light transition-colors">{p.name}</div>
                <p className="text-sm text-text-dim leading-relaxed">{p.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </Section>
  )
}
