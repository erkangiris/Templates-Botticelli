"use client"
import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

export default function BannerSimple({ data }) {
  return (
    <section className='w-full sm:px-5'>
      <Swiper spaceBetween={0} slidesPerView={1}>
        {
          data.map((item) => (
            <SwiperSlide key={item.id} className='w-full'>
              <Link href={item.url} title={item.title} style={{ backgroundImage: `url(${item.imageUrl})` }} className={`relative w-1270 mx-auto bg-cover sm:rounded-lg sm:after:bg-opacity-45 bg-right h-400 rounded-2xl flex items-center pl-20 sm:w-full sm:p-5 sm:h-40 sm:after:left-0 sm:after:top-0 sm:after:rounded-lg sm:after:bg-black sm:after:absolute sm:after:w-full sm:after:h-full`}>
                <h3 className='font-bold text-4xl sm:text-xl  text-white max-w-xl leading-snug relative z-10'>{item.title}</h3>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </section >
  )
}
