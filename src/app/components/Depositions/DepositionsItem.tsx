import React from 'react'
import { DepositionsItemProps } from './types'

export default function DepositionsItem({description,imgUrl,name, id}: DepositionsItemProps) {
  return (
    <div className='flex flex-col text-zinc-50 sm:flex-row items-start justify-between gap-6 md:gap-10'>      
      <figure className='space-y-6'>
        <img src={'/icons/quotation.svg'} alt="Quotation" className='mb-14' />  
        <p className='lg:max-w-[324px] leading-8 xl:max-w-[488px] w-full'>{description}</p> 
        <span className='font-bold hidden sm:block'>{name}</span>
      </figure>     
      <img src={imgUrl} className='border-2 border-primary rounded-lg' alt={`${id}${name}`} />
      <span className='font-bold sm:hidden'>{name}</span>
    </div>
  )
}
