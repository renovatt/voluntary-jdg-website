import React from 'react'
import { AboutMobileProps } from './types'
import { IoIosArrowDown } from 'react-icons/io'

export default function AboutMobileAccordion({
  icon: Icon,
  text,
  title,
  open,
  onClick,
}: AboutMobileProps) {
  return (
    <article className="rounded border border-primary-400 p-4 text-zinc-50 transition-all duration-500 ease-out sm:hidden">
      <div className="flex items-center justify-between">
        <figure className="flex items-center gap-4">
          <Icon className="h-8 w-8 text-primary-400" />
          <h2 className="font-bold">{title}</h2>
        </figure>
        <IoIosArrowDown onClick={onClick} className="h-6 w-6 sm:hidden" />
      </div>
      {open && (
        <p className="mt-5 leading-8 transition-all duration-500 ease-out">
          {text}
        </p>
      )}
    </article>
  )
}
