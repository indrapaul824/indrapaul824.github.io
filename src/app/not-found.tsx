import Nav from '@/components/Nav'

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="min-h-screen flex flex-col items-center justify-center px-6">
        <h1 className="font-sora text-6xl font-bold text-accent-light mb-4">404</h1>
        <p className="text-text-muted mb-8">This page doesn&apos;t exist.</p>
        <a href="/" className="font-space text-sm text-accent-light hover:text-accent-pale transition-colors">
          ← Back home
        </a>
      </main>
    </>
  )
}
