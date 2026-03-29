import Nav from '@/components/Nav'
import ScrollProgress from '@/components/ScrollProgress'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Writing from '@/components/Writing'
import Footer from '@/components/Footer'

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
        <Writing />
      </main>
      <Footer />
    </>
  )
}
