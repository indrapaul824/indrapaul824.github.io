import { getAllPosts } from '@/lib/blog'
import Nav from '@/components/Nav'
import ScrollProgress from '@/components/ScrollProgress'
import Footer from '@/components/Footer'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Nav />
      <ScrollProgress />
      <main className="pt-32 px-6 md:px-16 pb-24 min-h-screen max-w-3xl">
        <h1 className="font-sora text-4xl font-bold mb-12 tracking-tight">Writing</h1>
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block py-8 border-b border-white/[0.04] hover:translate-x-2 transition-transform"
          >
            <div className="font-space text-xs text-text-faint uppercase tracking-wide mb-2">
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </div>
            <h2 className="font-sora text-xl font-medium mb-2">{post.title}</h2>
            {post.excerpt && <p className="text-sm text-text-dim">{post.excerpt}</p>}
          </a>
        ))}
      </main>
      <Footer />
    </>
  )
}
