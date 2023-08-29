import React from 'react'
import { DepositionsItemProps } from './types'

export default function DepositionsItem({descrition,imgUrl, name}: DepositionsItemProps) {
  return (
    <div className='flex flex-col text-zinc-50 sm:flex-row items-center justify-between gap-6 md:gap-10'>
      <figure className='space-y-6'>
        <p className='lg:max-w-[324px] leading-8 xl:max-w-[488px] w-full'>{descrition}</p> 
        <span className='font-bold hidden sm:block'>{name}</span>
      </figure>
     
      <img src={imgUrl} className='border-2 border-primary rounded-lg' alt={name} />
      <span className='font-bold sm:hidden'>{name}</span>
    </div>
  )
}
