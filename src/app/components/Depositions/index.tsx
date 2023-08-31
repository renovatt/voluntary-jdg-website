"use client"
import React from 'react'
import DepositionsItem from './DepositionsItem'
import Title from '../Title'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from 'swiper/modules'
import { sliderItemsMock } from './mock'


export default function Depositions() {
  return (
    <section className="container bg-primary px-4 md:px-20 sm:my-32 mb-[100px]">
      <Title text="Depoimentos" />

      <h2 className='uppercase pb-16 text-2xl font-medium xl:w-[454px] leading-10 text-zinc-50 sm:text-xxl'>O que estão falando sobre nós?</h2>
          
      <Swiper
        speed={900}        
        slidesPerView={1}
        className="ease flex h-full w-full transition duration-200 depositionsSwiper"
        navigation
        modules={[Navigation, Pagination]}
        loop={false}
        spaceBetween={10}
      >
      {sliderItemsMock?.map(item => {
        return (
          <SwiperSlide key={item.id}>
            <DepositionsItem
              id={item.id}
              name={item.name}
              imgUrl={item.image}
              description={item.text}
            />
          </SwiperSlide>
        )
      })}
      </Swiper>

  
    </section>
  )
}
