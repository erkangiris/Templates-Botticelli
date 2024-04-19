"use client"
import React, { useState } from 'react'
import Title from './Layout/Title'
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import SeanceDate from './SeanceDate';
import 'swiper/css';
import Image from 'next/image';

export default function BranchSeances({ title, subtitle, data }) {
    // console.log(data, "seances")




    const [currrentDay, setCurrentDay] = useState(data.length > 0 && data[0].seanceDate)
    const [bindex, setbindex] = useState(0)
    const currentDaySeances = data.filter(seance => seance.seanceDate === currrentDay);
    const changeDay = (param, index) => {
        // console.log(param, "pram")
        setCurrentDay(param)
        setbindex(index)
    };


    console.log(currrentDay, "currrentDay")
    console.log(currentDaySeances, "currentDaySeances")

    return (

        <section className='w-full flex flex-col mb-32 sm:mb-20'>
            <Title title={title} subtitle={subtitle} />

            {
                currentDaySeances.length > 0 &&
                <div className='w-full flex rounded-lg mt-5 mb-10 px-10 relative sm:mb-5 sm:mt-0 bg-white '>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={'auto'}
                        freeMode
                        className='w-full'
                    >
                        {
                            data.map((item, index) => {
                                return (
                                    <SwiperSlide onClick={() => changeDay(item.seanceDate, index)} key={index} className={`sm:min-w-48 max-w-72 relative`}>
                                        <div className='flex flex-col items-center justify-center py-6 border-r border-gray-100 cursor-pointer relative sm:py-2'>
                                            {
                                                index === bindex && <div className={`w-full h-1 bg-venus-brown absolute left-0 bottom-0 `} />
                                            }
                                            <SeanceDate time={item.seanceDate} />
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    <button className='absolute h-full w-10 flex items-center justify-center right-0 top-0'><ChevronRightIcon className='w-5 h-5' /></button>
                    <button className='absolute h-full w-10 flex items-center justify-center left-0 top-0 border-r border-gray-100'><ChevronLeftIcon className='w-5 h-5' /></button>
                </div>
            }
            <div className='w-full flex flex-col gap-10 sm:gap-5 bg-white rounded-lg'>
                {
                    currentDaySeances.length > 0 ? currentDaySeances[0].seances.map((item, index) => (
                        <div key={index} className='w-full flex gap-10 p-8'>
                            <figure>
                                <Image src={item.filmImage} width={120} height={160} alt={item.name} className='rounded-lg' />
                            </figure>
                            <div className='w-full flex flex-col gap-10'>
                                {
                                    item.saloonDetails && item.saloonDetails.map((salon) => (
                                        <div key={salon.saloonName} className='w-full flex flex-col'>
                                            <strong className='text-2xl font-bold'>{salon.saloonName}</strong>
                                            <span className='text-sm opacity-60'>{salon.filmVersion}</span>
                                            <div className='w-full flex flex-wrap gap-2 mt-2'>
                                                {
                                                    salon.seanceDetails && salon.seanceDetails.map((seans) => (
                                                        <Link key={seans.seanceHour} href={seans.url} target="_blank" rel="noopener" className='text-blue-600 border border-blue-600 text-sm font-semibold px-3 py-1 rounded hover:bg-blue-50'>{seans.seanceHour}</Link>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                        :
                        <div className='p-10 text-center font-semibold text-2xl'>There is no activity in this branch yet.</div>
                }
            </div>
        </section>
    )
}
