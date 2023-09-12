import React from 'react'

interface AboutMobileProps{
  icon: string
  title: string;
  text: string
  open: boolean
  onClick: () => void;
}

export default function AboutMobileAccordion({ icon, text, title, open, onClick}: AboutMobileProps) {
  return (
      <article className='sm:hidden transition-all ease-out duration-500 text-zinc-50 border rounded border-primary-400 p-4'>  
        <div className='flex items-center justify-between'>
          <figure className='flex items-center gap-4'>
            <img src={icon} alt={title} />
            <h2 className='font-bold'>{title}</h2>
          </figure>
          <img onClick={onClick} src={'./icons/down.svg'} className='sm:hidden' alt={'Arrow Down'} />
        </div>   
        {open && <p className='leading-8 mt-5 duration-500 ease-out transition-all'>{text}</p>}
      </article>
  )
}
