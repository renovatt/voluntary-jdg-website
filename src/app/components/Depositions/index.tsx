'use client'
import React from 'react'
import DepositionsItem from './DepositionsItem'
import Title from '../Title'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { SliderItemsMock } from '../../../mocks/SliderItemsMock'

export default function Depositions() {
  return (
    <section className="container mb-20 bg-primary px-4 md:px-0">
      <Title text="Depoimentos" />

      <h2 className="pb-16 text-2xl font-medium uppercase leading-10 text-zinc-50 sm:text-xxl xl:w-[454px]">
        O que estão falando sobre nós?
      </h2>

      <Swiper
        speed={900}
        slidesPerView={1}
        className="ease depositionsSwiper flex h-full w-full transition duration-200"
        navigation
        modules={[Navigation, Pagination]}
        loop={false}
        spaceBetween={10}
      >
        {SliderItemsMock?.map((item) => {
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
