import Section from './Section'
import RevealOnScroll from './RevealOnScroll'

const roles = [
  {
    date: 'Mar 2026 — Present',
    role: 'Product Manager',
    company: 'Moveworks (ServiceNow)',
    desc: 'Leading product strategy for enterprise search, content platform, and multi-region expansion. Owning GTM readiness and partner enablement.',
    metric: 'End-to-end ownership',
  },
  {
    date: 'May 2025 — Mar 2026',
    role: 'Product Analyst',
    company: 'Moveworks (ServiceNow)',
    desc: 'Owned ES self-serve roadmap. Shipped multi-region QA across US, EU, CA, AU. Drove connector consolidation to GA.',
    metric: '50+ escalations resolved',
  },
  {
    date: 'Mar 2024 — May 2025',
    role: 'Associate Product Analyst',
    company: 'Moveworks',
    desc: 'Shipped 11+ content integrations with enterprise permissions. Scaled AI Agent Marketplace to 100+ plugins. Managed API lifecycle beta → GA.',
    metric: '5x marketplace velocity',
  },
  {
    date: 'Aug 2023 — Feb 2024',
    role: 'Product Analyst Intern',
    company: 'Moveworks',
    desc: 'Discovery and development of enterprise content systems. Authored feature specs. Resolved 60+ production escalations across integrations.',
    metric: '60+ escalations resolved',
  },
]

export default function Experience() {
  return (
    <Section number="02" label="Experience" id="work">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {roles.map((role, i) => (
          <RevealOnScroll key={role.date} delay={i * 0.08}>
            <div className="h-full bg-glass backdrop-blur-xl border border-accent/[0.08] rounded-lg p-8 md:p-9 transition-all duration-300 hover:border-accent/20 hover:shadow-[0_0_60px_rgba(99,102,241,0.05)]">
              <div className="font-space text-[11px] text-text-faint tracking-wide uppercase mb-4">
                {role.date}
              </div>
              <div className="font-sora text-lg md:text-xl font-semibold mb-1">{role.role}</div>
              <div className="font-space text-[13px] text-accent-light tracking-wide mb-5">
                {role.company}
              </div>
              <p className="text-sm text-text-muted leading-relaxed mb-5">{role.desc}</p>
              <div className="font-sora font-bold text-lg text-accent-light">{role.metric}</div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  )
}
