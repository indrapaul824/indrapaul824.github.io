import Section from './Section'
import RevealOnScroll from './RevealOnScroll'

const impact = [
  {
    name: 'Content Platform',
    tagline: 'Building the enterprise content backbone for AI-powered search.',
    desc: 'Own the full lifecycle: how enterprise content gets ingested, indexed, permissioned, and served across search and AI experiences. Shipped 16+ SaaS integrations including SharePoint, ServiceNow, Salesforce, Zendesk, and Notion.',
    metric: '16+',
    metricLabel: 'Integrations shipped',
  },
  {
    name: 'AI Agent Marketplace',
    tagline: 'Scaling a self-serve plugin ecosystem from zero to 100+.',
    desc: 'Took the marketplace from a handful of plugins to 100+ installable solutions. Designed the production pipeline, managed API lifecycle from beta to GA, and increased plugin production velocity 5x.',
    metric: '5x',
    metricLabel: 'Production velocity',
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
    <Section number="03" label="Projects" className="bg-deep">
      <div className="relative z-10 space-y-0">
        {impact.map((project, i) => (
          <RevealOnScroll key={project.name}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 md:py-20 ${i > 0 ? 'border-t border-accent/[0.05]' : ''}`}>
              <div>
                <h3 className="font-sora text-3xl md:text-4xl font-bold mb-3 tracking-tight">{project.name}</h3>
                <p className="text-base text-text-muted mb-5 leading-relaxed">{project.tagline}</p>
                <p className="text-sm text-text-dim leading-relaxed">{project.desc}</p>
              </div>
              <div className="lg:text-right">
                <div className="font-sora text-[80px] md:text-[110px] font-extrabold leading-none bg-gradient-to-br from-accent to-accent-light bg-clip-text text-transparent">
                  {project.metric}
                </div>
                <div className="font-space text-[13px] text-text-dim uppercase tracking-[0.08em] mt-2">
                  {project.metricLabel}
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
