import CardProjects from '../CardProject'
import emBreve from '@/assets/breve.png'
import redeSocial from '@/assets/rede-social.png'
import CardProjectContainer from '../CardProjectContainer'
import clinicaVeterinaria from '@/assets/clinica-veterinaria.png'

const Projects = () => {
  return (
    <section
      id="projects"
      className="container overflow-hidden bg-primary px-4 py-10 md:px-20"
    >
      <h1 className="mb-8 inline-block border border-transparent border-b-primary font-bold text-secondary">
        PROJETOS
      </h1>

      <CardProjectContainer>
        <CardProjects
          src={clinicaVeterinaria}
          href="#"
          description="Website"
          tittle="Clinica veterianária"
        />

        <CardProjects
          src={redeSocial}
          href="#"
          description="Website"
          tittle="Rede Social"
          side={true}
        />
      </CardProjectContainer>

      <CardProjectContainer>
        <CardProjects
          src={emBreve}
          href="#"
          description="Website"
          tittle="Escola do Real"
        />

        {/* <CardProjects
          src={emBreve}
          href="#"
          description="Website"
          tittle="Em breve"
          side={true}
        /> */}
      </CardProjectContainer>
    </section>
  )
}

export default Projects
