import React from 'react'
import { IVolunteers } from './types'
import Image from 'next/image'

export default function VolunteersItem({
  image,
  jobPosition,
  name,
}: IVolunteers) {
  return (
    <div className="flex h-[13.688rem] w-[9.813rem] flex-col items-center justify-center gap-1.5 rounded-lg bg-zinc-50 p-4">
      <figure>
        <Image
          width={500}
          height={500}
          src={image}
          className="h-[139px] w-[125px]"
          alt={name}
        />
      </figure>
      <p className="text-center text-xs font-bold sm:text-neutral-500">
        {name}
      </p>
      <p className="text-center text-xs">{jobPosition}</p>
    </div>
  )
}
