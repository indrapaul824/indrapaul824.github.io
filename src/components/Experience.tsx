import Section from './Section'
import RevealOnScroll from './RevealOnScroll'

const roles = [
  {
    date: 'Mar 2026 — Present',
    role: 'Product Manager',
    company: 'Moveworks (ServiceNow)',
    desc: 'Went from owning individual integrations and escalations to owning the entire content platform and the self-serve experience that takes Enterprise Search to market. Now responsible for how content gets ingested, permissioned, and served — and how partners and customers configure it independently.',
    metric: 'Escalations → platform ownership',
  },
  {
    date: 'May 2025 — Mar 2026',
    role: 'Product Analyst',
    company: 'Moveworks (ServiceNow)',
    desc: 'Owned 67% of team escalations in peak months. Turned recurring failure patterns into tracked projects — built standardized playbooks, automated detection, and runbooks. Uncovered and drove fixes for systemic issues including a critical security vulnerability in our permissions layer.',
    metric: 'Reactive → systemic fixes',
  },
  {
    date: 'Mar 2024 — May 2025',
    role: 'Associate Product Analyst',
    company: 'Moveworks',
    desc: 'Shipped 11+ content integrations with enterprise-grade permissions. Led a team to scale Marketplace plugin production from ~3-4/month to ~18-20/month. Managed an API product from beta through GA, collecting customer feedback at each stage to shape the final release.',
    metric: '5x marketplace velocity',
  },
  {
    date: 'Aug 2023 — Feb 2024',
    role: 'Product Analyst Intern',
    company: 'Moveworks',
    desc: 'Resolved 61 escalations benefiting 11 customers. Led discovery for new content integrations — validating complex permission structures with design partners. Wrote first product memos and feature specifications.',
    metric: '61 escalations, 11 customers',
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
