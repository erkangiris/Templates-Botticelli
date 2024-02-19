import Link from 'next/link'
import React from 'react'

export default function Title({ title, subtitle, url, urltext }) {
    const regex = /(<([^>]+)>|&nbsp;)/gi;
    return (
        <div className='w-full flex gap-3 relative mb-10 items-center sm:items-start sm:mb-5'>
            <div className='w-2 h-15 rounded bg-botticelli-blue bg-gradient-to-t from-[#204055] via-[#B4DDF5] to-blue-[#204055] sm:h-8 sm:mt-1.5' />
            <div className='w-full flex flex-col'>
                <h2 className='text-4xl font-bold sm:text-xl sm:leading-tight text-botticelli-blue'>{title}</h2>
                <span className='text-sm opacity-60 sm:text-xs line-clamp-1 max-w-xl'>{subtitle.replace(regex, "")}</span>
            </div>
            {
                url && <Link href={url} title={title} className='text-nowrap text-blue-500 text-sm min-w-fit'>{urltext}</Link> 
            }
        </div>
    )
}
