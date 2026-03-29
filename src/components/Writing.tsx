import Section from './Section'
import RevealOnScroll from './RevealOnScroll'
import { getAllPosts } from '@/lib/blog'

export default function Writing() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <Section number="04" label="Writing" id="writing">
      <div className="relative z-10 max-w-2xl">
        {posts.length === 0 ? (
          <p className="text-text-dim">Writing coming soon.</p>
        ) : (
          posts.map((post, i) => (
            <RevealOnScroll key={post.slug} delay={i * 0.08}>
              <a
                href={`/blog/${post.slug}`}
                className={`block py-8 border-b border-white/[0.04] hover:translate-x-2 transition-transform ${i === 0 ? 'pt-0' : ''}`}
              >
                <div className="font-space text-xs text-text-faint uppercase tracking-wide mb-2">
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </div>
                <h4 className="font-sora text-xl md:text-[22px] font-medium mb-2 tracking-tight">{post.title}</h4>
                {post.excerpt && (
                  <p className="text-sm text-text-dim leading-relaxed mb-2">{post.excerpt}</p>
                )}
                <span className="font-space text-[13px] text-accent-light tracking-wide">Read →</span>
              </a>
            </RevealOnScroll>
          ))
        )}

        {posts.length > 0 && (
          <RevealOnScroll>
            <a href="/blog" className="inline-block mt-8 font-space text-sm text-text-muted hover:text-accent-light transition-colors">
              All posts →
            </a>
          </RevealOnScroll>
        )}
      </div>
    </Section>
  )
}
