import About from './components/About'
import Banner from './components/Banner'
import Depositions from './components/Depositions'
import Faq from './components/Faq'
import Projects from './components/Projetcts'
import Volunteers from './components/Volunteers'

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Volunteers />      
      <Projects />
      <Depositions />
      <Faq />
    </>
  )
}
