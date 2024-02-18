import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Title from './Layout/Title'
import formatDate from '@/services/formatDate'

export default function CampaignsList({ data, title, subtitle }) {

    return (
        <section className='w-full flex flex-col'>
            <Title title={title} subtitle={subtitle} />
            <div className='flex sm:gap-y-5 flex-col gap-10'>
                {data.map((item) => (
                    <div key={item.id} className='rounded-lg bg-white p-3 w-full flex sm:flex-col'>
                        <figure><Image className='rounded-lg' src={item.imageUrl} alt={item.campaignName} width={420} height={420} /></figure>
                        <div className='p-10 flex flex-col w-full sm:p-3 justify-center'>
                            <h3 className='text-2xl font-bold line-clamp-1 sm:text-base sm:leading-snug'>{item.campaignName}</h3>
                            <time className='text-xs opacity-60 mt-2 sm:mt-1 mb-5 sm:text-xxs'>{formatDate(item.startDate)}</time>
                            <div>{item.campaignDescription}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
