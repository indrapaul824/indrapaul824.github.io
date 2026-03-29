import Nav from '@/components/Nav'
import ScrollProgress from '@/components/ScrollProgress'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Nav />
      <ScrollProgress />
      <main>
        <Hero />
      </main>
    </>
  )
}
