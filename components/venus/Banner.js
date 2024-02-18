"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { PlayIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import TrailerModal from '../global/TrailerModal'

export default function Banner() {
  const [modalstatus, setmodalstatus] = useState(false)

  return (
    <section className='w-full my-32 text-white sm:my-0 sm:px-5'>
      <div className='w-1270 mx-auto h-600 bg-[url(/img/delete/b1.webp)] bg-cover rounded-2xl flex flex-col justify-center px-20 sm:w-full sm:p-5 sm:h-300'>
        <h2 className='text-7xl font-bold mb-5 sm:text-2xl sm:mb-2'>King Darth Wader</h2>
        <p className='opacity-60 max-w-xl sm:text-xxs'>A new theme park, built on the original site of Jurassic Park, creates a genetically modified hybrid dinosaur, the Indominus Rex, which escapes containment and goes on a killing spree.</p>
        <div className='flex items-center gap-10 sm:gap-5'>
          <div className="flex gap-3 mt-10 items-center">
            <Image src="/img/star.svg" alt="Rating" width={16} height={17} />
            <strong className='text-4xl font-bold sm:text-3xl'>4.9</strong>
            <span className='text-xs sm:leading-snug sm:text-xxs'>Biletinial<br />Score</span>
          </div>
          <div className='w-px bg-white bg-opacity-10 h-10 mt-10' />
          <div className="flex gap-3 mt-10 items-center">
            <Image src="/img/star.svg" alt="Rating" width={16} height={17} />
            <strong className='text-4xl font-bold sm:text-3xl'>4.5</strong>
            <span className='text-xs sm:leading-snug opacity-60 sm:text-xxs'>Editor<br />Score</span>
          </div>
        </div>
        <div className='flex items-center gap-5 mt-14 sm:mt-10'>
          <Link href="/" title="title" className='btn-venus'>See Details</Link>
          <TrailerModal status={modalstatus} videourl={'8Qn_spdM5Zg'} trailertext={trailertext} />
        </div>
      </div>
    </section>
  )
}
