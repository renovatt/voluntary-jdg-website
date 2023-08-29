import React from 'react'
import DepositionsItem from './DepositionsItem'



export default function Depositions() {
  return (
    <section className="container bg-primary px-4 md:px-20 sm:my-32 mb-[266px]">
      <p className="mb-8 inline-block border-b text-left border-b-primary font-bold text-secondary">
        DEPOIMENTOS
      </p>

      <h1 className='uppercase pb-16 text-2xl font-medium text-zinc-50 sm:text-xxl'>O que estão falando sobre nós?</h1>
   
      <img src={'/icons/quotation.svg'} alt="Quotation" className='mb-14' />      

      <DepositionsItem
        name='Julia Duarte'
        imgUrl='/people.png'
        descrition="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      />
    </section>
  )
}
