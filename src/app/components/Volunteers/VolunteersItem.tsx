import React from 'react'
import { IVolunteers } from './types'

export default function VolunteersItem({image,jobPosition,name}: IVolunteers) {
  return (
    <div className='p-4 flex justify-center items-center flex-col gap-1.5 bg-zinc-50 rounded-lg w-[157px] h-[219px]'>
      <figure>
        <img src={image} className='w-[125px] h-[139px]' alt={name} />
      </figure>
      <p className='text-center sm:text-neutral-500 text-xs font-bold'>{name}</p>
      <p className='text-center text-xs'>{jobPosition}</p>
    </div>
  )
}
