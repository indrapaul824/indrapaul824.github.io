import Nav from '@/components/Nav'
import ScrollProgress from '@/components/ScrollProgress'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <>
      <Nav />
      <ScrollProgress />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
    </>
  )
}
