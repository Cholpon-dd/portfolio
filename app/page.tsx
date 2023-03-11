
import About from '@/components/About'
import Contacts from '@/components/Contacts'
import HeroSection from '@/components/HeroSection'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
     <HeroSection/>
     <About/>
     <Skills/>
     <Projects/>
     <Contacts/>
    </main>
  )
}
