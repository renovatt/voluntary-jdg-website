"use client"
import React from 'react'
import VolunteersItem from './VolunteersItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { volunteersMock } from './mock'


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
  const totalCards = volunteersMock.length;
  const halfIndex = Math.floor(totalCards / 2);
  const firstHalf = volunteersMock.slice(0, halfIndex);
  const secondHalf = volunteersMock.slice(halfIndex);

  return (
    <section className='container my-28 px-4 md:px-20'>
      <h2 className='uppercase font-bold w-[229px] sm:w-full m-auto leading-relaxed text-center text-primary-400 text-3xl mb-12'>Nossos Voluntários</h2>
    
      <Swiper      
        speed={1300} 
        className="mb-12 volunteersSwiper"       
        loop={false}        
        autoplay={{ delay: 1000 }}   
        modules={[Autoplay]}
        breakpoints={breakpoints}
      >
        {firstHalf.map(item => {
          return (
            <SwiperSlide key={item.id}>
              <VolunteersItem image={item.image} name={item.name} jobPosition={item.job_position} /> 
            </SwiperSlide>
          )
        })}
      </Swiper>       

      <Swiper      
        speed={1300} 
        className="volunteersSwiper"       
        loop={false}
        breakpoints={breakpoints}
        autoplay={{ delay: 1000 }} 
        modules={[Autoplay]}
      >
        {secondHalf.map(item => {
          return (
            <SwiperSlide key={item.id}>
              <VolunteersItem image={item.image} name={item.name} jobPosition={item.job_position} /> 
            </SwiperSlide>
          )
        })}
      </Swiper>   
      
    </section>
  )
}
