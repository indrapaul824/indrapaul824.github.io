import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import ScrollProgress from '@/components/ScrollProgress'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} | Indrashis Paul`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <>
      <Nav />
      <ScrollProgress />
      <main className="pt-32 px-6 md:px-16 pb-24 max-w-3xl">
        <div className="font-space text-xs text-text-faint uppercase tracking-wide mb-4">
          {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </div>
        <h1 className="font-sora text-3xl md:text-4xl font-bold mb-10 tracking-tight leading-tight">
          {post.title}
        </h1>
        <article className="prose prose-invert prose-lg max-w-none prose-headings:font-sora prose-p:text-text-muted prose-p:leading-relaxed prose-a:text-accent-light prose-strong:text-text-primary prose-code:text-accent-pale">
          <MDXRemote source={post.content} />
        </article>
        <a href="/blog" className="inline-block mt-12 font-space text-sm text-text-muted hover:text-accent-light transition-colors">
          ← Back to all posts
        </a>
      </main>
      <Footer />
    </>
  )
}
