import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Blog() {
  return (
    <section className='mt-14 container px-4 lg:px-0'>
      <h1 className='text-primary-400 text-center text-[40px] font-semibold'>Blog da JDG</h1>
      <p className='text-zinc-50 leading-8 mt-4 text-center'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </p>
      <section className='mt-16 lg:h-[487px] w-full flex rounded-2xl justify-between bg-[#191d20]'>
        <article className='p-6 lg:max-w-[520px] space-y-6'>
          <h2 className='font-bold text-zinc-50 leading-10 text-3xl'>Introdução ao Next.js - Um Framework para Desenvolvedores React</h2>
          <p className='text-zinc-50 leading-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <div className='flex sm:justify-end'>
            <Link
              href="#contact"
              className="h-10 w-36 items-center justify-center rounded-lg bg-primary-400 text-base font-semibold text-secondary-950 transition-all hover:text-white flex"
              >
              Ler mais
            </Link>
          </div>
        </article>        
        <figure className='lg:w-[576px] hidden xl:block h-full'>
          <Image src={'/card-blog.png'} width={576} height={487} alt='' />
        </figure>     
      </section>
    </section>
  )
}
