"use client"
import React, { useState } from 'react'
import Title from './Layout/Title'
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import SeanceDate from './SeanceDate';
import 'swiper/css';

export default function BranchSeances({ title, subtitle, data }) {
    // console.log(data, "seances")

    


    const [currrentDay, setCurrentDay] = useState(data[0].seances)
    const [bindex, setbindex] = useState(0)
    // const currentDaySeances = data.filter(seance => seance.seanceDate === currrentDay);
    const changeDay = (param, index) => {
        setCurrentDay(param)
        setbindex(index)
    };


    console.log(currrentDay[0],"currrentDay")

    return (

        <section className='w-full flex flex-col mt-32 sm:mt-20'>
            <Title title={title} subtitle={subtitle} />
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
            <div className='w-full flex flex-col gap-10 sm:gap-5 bg-white rounded-lg'>
                {
                    currrentDay[0].saloonDetails.map((item, index) => (
                        // console.log(item)
                        <div key={index} className='w-full p-10 rounded-xl  sm:p-5'>
                            <div className='w-full flex flex-col'>
                                <h3 className='font-bold text-3xl sm:text-xl'>{item.saloonName}</h3>
                                <span className='text-xs opacity-60 mb-10'>{item.filmVersion}</span>
                                <div className='w-full flex flex-col'>
                                    {
                                        item.seanceDetails.map((subitem, index) => {
                                            return (
                                                <div key={index} className={`w-full flex items-center  'border-b  mb-5 pb-5 border-gray-200' sm:flex-col sm:items-start`}>
                                                    <div className='flex flex-col min-w-60 sm:mb-3'>
                                                        <strong className='text-lg'>{subitem.filmName}</strong>
                                                        {/* <span className='text-sm opacity-70 sm:text-xs'>{subitem.filmVersion}</span> */}
                                                    </div>
                                                    <Link href={subitem.url} key={index} title={`${item.branchName}`} className='seance'>{subitem.seanceHour}</Link>

                                                    {/* <div className='flex gap-3 sm:flex-wrap sm:gap-2'>
                                                        {
                                                            subitem.seanceDetails.map((subseance, index) => (
                                                                <Link href={subseance.url} key={index} title={`${item.branchName} ${subseance.seanceHour} ${seancess}`} className='seance'>{subseance.seanceHour}</Link>

                                                            ))
                                                        }
                                                    </div> */}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
