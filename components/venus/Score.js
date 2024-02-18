import { ClockIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'


export default  function Score({biletinial,editor,editortext,score}) {
    return (
        <div className='flex items-center gap-10 sm:gap-5'>
            <div className="flex gap-3 mt-10 items-center">
                <Image src="/img/star.svg" alt="Rating" width={16} height={17} />
                {biletinial ? <strong className='text-4xl font-bold sm:text-3xl'>{biletinial}</strong> : <strong className='text-4xl font-bold sm:text-3xl'><ClockIcon className='w-8 h-8 text-white' /></strong>}
                <span className='text-xs sm:leading-snug sm:text-xxs'>Biletinial<br />{score}</span>
            </div>
            <div className='w-px bg-white bg-opacity-10 h-10 mt-10' />
            <div className="flex gap-3 mt-10 items-center">
                <Image src="/img/star.svg" alt="Rating" width={16} height={17} />
                {editor ? <strong className='text-4xl font-bold sm:text-3xl'>{editor}</strong> : <strong className='text-4xl font-bold sm:text-3xl'><ClockIcon className='w-8 h-8 text-white' /></strong>}
                <span className='text-xs sm:leading-snug opacity-60 sm:text-xxs'>{editortext}<br />{score}</span>
            </div>
        </div>
    )
}
