import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Title from './Layout/Title'

export default function NewsList({ data, title, subtitle }) {
    return (
        <section className='w-full flex flex-col'>
            <Title title={title} subtitle={subtitle} />
            <div className='grid grid-cols-3 gap-x-3 gap-y-10 sm:grid-cols-1 sm:gap-y-5 md:grid-cols-2'>
                {data.map((item) => (
                    <Link key={item.name} href={`news/${item.id}`} className='rounded-lg bg-white p-3'>
                        <figure><Image className='rounded-lg' src={item.imageUrl} alt={item.title} width={420} height={420} /></figure>
                        <div className='p-5 flex flex-col w-full sm:p-3'>
                            <h3 className='text-xl font-bold line-clamp-1 sm:text-base sm:leading-snug'>{item.title}</h3>
                            <time className='text-xs opacity-60 mt-2 sm:mt-1 sm:text-xxs'>{item.date}</time>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}
