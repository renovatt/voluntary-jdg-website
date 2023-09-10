'use client'
import React, { useState } from 'react'
import Title from '../Title'
import Image from 'next/image'
import AboutMobileAccordion from './AboutMobileAccordion'
import { aboutMock } from './mocks'

export default function About() {
  const [openItems, setOpenItems] = useState(Array(aboutMock.length).fill(false))

  const toggleAccordion = (index:number) => {
    setOpenItems((prevOpenItems) => {
      const newOpenItems = [...prevOpenItems]
      newOpenItems[index] = !newOpenItems[index]
      return newOpenItems
    })
  }

  return (
    <section className='container mt-28 mb-10 px-6'>
      <Title text='Sobre' />
      <div className='flex flex-col xl:flex-row gap-10'>
        <article className='flex-col'>
          <h2 className='font-semibold text-zinc-50 text-2xl leading-9'>Estamos moldando o futuro da tecnologia web</h2>
          <p className='text-zinc-50 mt-6 leading-8'>Nós somos uma equipe de estudantes <span className='text-primary-400'>apaixonados pela tecnologia</span> e dedicados ao desenvolvimento web, abrangendo tanto a
          Front-end quanto a Back-end. Com o objetivo de <span className='text-primary-400'>fazer a diferença</span> ,
          combinamos nossos <span className='text-primary-400'>conhecimentos e habilidades</span> para promover o <span className='text-primary-400'>crescimento pessoal e coletivo</span>.
          </p>
          <Image width={688} height={337} alt='Picture of a computer on a table' src={'/About02.png'} className='xl:w-[416px] xl:hidden' />
          <div className='sm:grid grid-cols-2 hidden'>            
            <article className='sm:border-none transition-all ease-out duration-500 text-zinc-50 border rounded border-primary-400 p-4'>  
              <div className='flex items-center justify-between'>
                <figure className='flex items-center gap-4'>
                  <img src={'/icons/mission.svg'} alt={'Missão'} />
                  <h2 className='font-bold'>Missão</h2>
                </figure>               
              </div>   
              <p className='leading-8 mt-5 duration-500 ease-out transition-all'>
                Nossa missão é criar um <span className='text-primary-400'>espaço colaborativo</span> que permita a cada membro do grupo <span className='text-primary-400'>aprender, crescer e compartilhar experiências</span> no mundo do desenvolvimento web. Unindo nossas habilidades e conhecimentos, buscamos <span className='text-primary-400'>superar os desafios e impulsionar o potencial</span> de cada indivíduo, promovendo o desenvolvimento pessoal e coletivo.
              </p>
            </article>
            <article className='sm:border-none transition-all ease-out duration-500 text-zinc-50 border rounded border-primary-400 p-4'>  
              <div className='flex items-center justify-between'>
                <figure className='flex items-center gap-4'>
                  <img src={'/icons/mission.svg'} alt={'Missão'} />
                  <h2 className='font-bold'>Visão</h2>
                </figure>               
              </div>   
              <p className='leading-8 mt-5 duration-500 ease-out transition-all'>
                Somos um grupo <span className='text-primary-400'>voluntário sem fins lucrativos</span>, buscando projetos impactantes na sociedade, valorizando soluções inovadoras e inclusivas. Unindo apaixonados pelo desenvolvimento web, incentivamos a troca de conhecimento e trabalho em equipe para um <span className='text-primary-400'>futuro digital promissor</span>. Junte-se a nós e cresça pessoal e profissionalmente.
              </p>
            </article>             
          </div>
            <article className='sm:border-none hidden sm:block transition-all ease-out duration-500 text-zinc-50 border rounded border-primary-400 p-4'>  
                <div className='flex items-center justify-between'>
                  <figure className='flex items-center gap-4'>
                    <img src={'/icons/mission.svg'} alt={'Missão'} />
                    <h2 className='font-bold'>Valores</h2>
                  </figure>               
                </div>   
                <p className='leading-8 mt-5 duration-500 ease-out transition-all'>Somos movidos pela paixão pela tecnologia, comprometidos com a colaboração, o aprendizado contínuo e o impacto positivo na comunidade. Valorizamos a <span className='text-primary-400'>inovação, a acessibilidade e a inclusão</span>, mantendo um ambiente acolhedor, respeitoso e colaborativo para todos os membros.</p>
            </article>
        </article>
        <Image width={416} height={780} alt='Picture of a computer on a table' src={'/about.png'} className='hidden bg-cover xl:block' />

        {aboutMock.map(((about) => (        
          <AboutMobileAccordion
            key={about.id}    
            text={about.text}
            title={about.title}
            icon={about.icon}
            open={openItems[about.id]}         
            onClick={() => toggleAccordion(about.id)}
          />
        )))}       

      </div>    
    </section>
  )
}
