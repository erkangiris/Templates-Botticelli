"use client"
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';
import Image from 'next/image';
import TrailerModal from '../global/TrailerModal';
import Score from './Score';
import slugify from 'react-slugify';

export default function Slider({ data, btntext,  trailertext, locale}) {
    const [modalstatus, setmodalstatus] = useState(false)

    
    return (
        <div className='w-full h-screen text-white mb-20 sm:h-500 sm:mb-10'>
            <Swiper className=' h-screen sm:h-500' spaceBetween={0} slidesPerView={1}>
                {
                    data.map((item, index) => (
                        <SwiperSlide style={{backgroundImage:`url(${item.imageUrl})`}} key={index} className={`w-full bg-cover bg-right`}>
                            <div className='w-1270 mx-auto h-screen flex flex-col justify-center pt-24 sm:w-full sm:pt-20 sm:p-5 sm:h-500'>
                                <h1 className='font-bold  text-8xl mb-5 sm:text-3xl sm:mb-2'>{item.title}</h1>
                                <p className='text-lg leading-snug max-w- max-w-3xl opacity-70 sm:text-sm sm:line-clamp-2'>{item.description}</p>
                                {/* <Score biletinial={'4.9'} editor={'4.5'} editortext={editortext} score={score} /> */}
                                <div className='flex items-center gap-5 mt-14 sm:mt-10'>
                                    {item.url && <Link href={`/${locale}/${item.url}`} title={item.title} className='btn-venus'>{btntext}</Link>}
                                    {/* {slider.trailer && <TrailerModal status={modalstatus} videourl={slider.trailer} trailertext={trailertext} />} */}
                                </div>
                            </div>
                        </SwiperSlide>

                    ))
                }
            </Swiper>
        </div>
    )
}
