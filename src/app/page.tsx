import Banner from './components/Banner'
import Depositions from './components/Depositions'
import Faq from './components/Faq'
import Projects from './components/Projetcts'
import Volunteers from './components/Volunteers'

export default function Home() {
  return (
    <>
      <Banner />
      <Volunteers />
      <Projects />
      <Depositions />
      <Faq />
    </>
  )
}
