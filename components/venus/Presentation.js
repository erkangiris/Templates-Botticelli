"use client"
import Image from 'next/image'
import React from 'react'
import Title from './Layout/Title'
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

export default function Presentation({ data, title, subtitle, locale }) {

    
    return (
        <section className='w-full'>
            <div className='w-1270 mx-auto flex flex-col sm:w-full sm:px-5'>
                <Title title={title} subtitle={subtitle} />
                <div className='w-full'>
                    <Swiper spaceBetween={12} slidesPerView={3}>
                        {
                            data.map((item) => (
                                <SwiperSlide key={item.id} >
                                    <Link href={`/${locale}/pages/${item.seoUrl}-${item.id}`} title={item.title} className={`flex flex-col rounded-lg border border-gray-200 p-3 sm:w-48 sm:max-w-48 sm:min-w-48 md:max-w-96 md:w-auto`}>
                                        <figure><Image alt={item.title} width={446} height={334} src={item.imageUrl} className="rounded-lg" /></figure>
                                        <div className='w-full flex flex-col px-5 pb-3 sm:px-2 sm:pb-0'>
                                            <h3 className='text-2xl font-bold mt-7 sm:text-base sm:mt-4'>{item.title}</h3>
                                            <div className='text-sm opacity-60 sm:text-xs truncate dangertext' dangerouslySetInnerHTML={{ __html: `<p className='truncate'>${item.contents}</p>` }}></div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
