'use client'
import React from 'react'
import VolunteersItem from './VolunteersItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { VolunteersMock } from '../../../mocks/VolunteersMock'

const breakpoints = {
  1440: {
    slidesPerView: 6.2,
  },
  1200: {
    slidesPerView: 5.6,
  },
  1024: {
    slidesPerView: 3.8,
  },
  768: {
    slidesPerView: 3.6,
  },
  640: {
    slidesPerView: 3.4,
  },
  400: {
    slidesPerView: 2.2,
  },
  250: {
    slidesPerView: 1.8,
    slidesPerGroup: 1,
  },
}

export default function Volunteers() {
  const totalCards = VolunteersMock.length
  const halfIndex = Math.floor(totalCards / 2)
  const firstHalf = VolunteersMock.slice(0, halfIndex)
  const secondHalf = VolunteersMock.slice(halfIndex)

  return (
    <section className="container my-28">
      <h2 className="m-auto mb-12 w-56 text-center text-3xl font-bold uppercase leading-relaxed text-primary-400 sm:w-full">
        Nossos Voluntários
      </h2>

      <Swiper
        speed={2300}
        className="volunteersSwiper mb-12"
        loop={false}
        autoplay={{ delay: 1000 }}
        modules={[Autoplay]}
        breakpoints={breakpoints}
      >
        {firstHalf.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <VolunteersItem
                image={item.image}
                name={item.name}
                jobPosition={item.job_position}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>

      <Swiper
        speed={2300}
        className="volunteersSwiper"
        loop={false}
        breakpoints={breakpoints}
        autoplay={{ delay: 1000 }}
        modules={[Autoplay]}
      >
        {secondHalf.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <VolunteersItem
                image={item.image}
                name={item.name}
                jobPosition={item.job_position}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}
