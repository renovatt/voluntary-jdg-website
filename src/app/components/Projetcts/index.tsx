import CardProjects from '../CardProject'
import emBreve from '@/assets/breve.png'
import escolaReal from '@/assets/escola-real.png'
import redeSocial from '@/assets/rede-social.png'
import CardProjectContainer from '../CardProjectContainer'
import clinicaVeterinaria from '@/assets/clinica-veterinaria.png'
import Title from '../Title'

const Projects = () => {
  return (
    <section
      id="projects"
      className="container overflow-hidden bg-primary px-4 py-10 md:px-0"
    >
      <Title text="PROJETOS" />

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
          src={escolaReal}
          href="#"
          description="Website"
          tittle="Escola do Real"
        />

        <CardProjects
          src={emBreve}
          href="#"
          description="Website"
          tittle="Em breve"
          side={true}
        />
      </CardProjectContainer>
    </section>
  )
}

export default Projects
