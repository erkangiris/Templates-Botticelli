"use client"
import React, { useState } from 'react'
import Title from './Layout/Title'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image'
import TrailerModal from '../global/TrailerModal'
import Link from 'next/link';
import Score from './Score';

export default function TrendingMovies({ data, title, subtitle, locale, trailertext, btntext, score, editortext }) {
    const [modalstatus, setmodalstatus] = useState(false)
    return (


        <section className='w-full'>
            <div className='w-1270 mx-auto flex flex-col sm:w-full sm:px-5'>
                <Title title={title} subtitle={subtitle} />
                <div className='w-full text-white'>
                    <Swiper className='h-600 sm:h-auto'
                        spaceBetween={0}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                    >
                        {
                            data.map((item) => (
                                <SwiperSlide style={{ backgroundImage: `url(${item.coverImgUrlValue})` }} key={item.id} className='w-full sm:bg-center sm:before:absolute sm:before:w-full sm:before:h-full sm:before:left-0 sm:before:top-0 sm:before:bg-black sm:before:bg-opacity-40 bg-cover rounded-2xl bg-right'>
                                    <div className='w-full p-20 flex flex-col h-600 justify-center sm:p-5 z-10 relative sm:h-400'>
                                        <h2 className='text-5xl font-bold mb-5 sm:text-2xl sm:mb-2'>{item.filmName}</h2>
                                        <div className='opacity-60 max-w-xl sm:text-xs line-clamp-4 sm:line-clamp-2' dangerouslySetInnerHTML={{ __html: `<p'>${item.description}</p>` }}></div>
                                        <Score biletinial={item.biletinialRate} editor={item.editorRate} editortext={editortext} score={score} /> 
                                        <div className='flex items-center gap-5 mt-10'>
                                            <Link href={`${locale}/movies/${item.seoUrl}-${item.id}`} title="title" className='btn-venus'>{btntext}</Link>
                                            {item.fragman && <TrailerModal status={modalstatus} videourl={item.fragman.split('/').pop()} trailertext={trailertext} />}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
