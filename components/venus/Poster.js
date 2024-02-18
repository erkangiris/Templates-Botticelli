import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { getTranslations, getLocale } from 'next-intl/server';


export default async function Poster({ data, autowidth, category, type }) {

    const t = await getTranslations();
    const locale = await getLocale();
    return (
        <>
        
        {
            type === 'upcoming' ?
            <div className={`rounded-lg bg-white p-3 sm:w-48 sm:max-w-48 sm:min-w-48 ${autowidth && 'sm:w-auto sm:min-w-fit sm:max-w-fit'}`}>
            <figure className='relative'>
                <Image src={data.imageUrlValue} className='rounded-lg' width={252} height={337} alt={data.name} />
                {
                    data.biletinialRate &&
                    <div className='flex gap-2 absolute left-3 bottom-3 datas-center mt-3 px-2 py-1 bg-white w-fit rounded'>
                        <Image src="/img/star.svg" alt="Rating" width={16} height={17} />
                        <span className='text-sm font-semibold'>{data.biletinialRate}</span>
                    </div>
                }

            </figure>
            <div className='flex flex-col p-5 sm:p-2'>
                <strong className='text-xl line-clamp-1 sm:text-base'>{data.name}</strong>
                {data.filmTypes && <span className='text-xs opacity-60 sm:text-xs'>{data.filmTypes.map(film => film.filmtype).join(', ')}</span>}
            </div>
        </div>
         : 
         <Link key={data.name} href={`/${locale}/${category}/${data.seoUrl}-${data.id}`} title={data.name} className={`rounded-lg bg-white p-3 sm:w-48 sm:max-w-48 sm:min-w-48 ${autowidth && 'sm:w-auto sm:min-w-fit sm:max-w-fit'}`}>
            <figure className='relative'>
                <Image src={data.imageUrlValue} className='rounded-lg' width={252} height={337} alt={data.name} />
                {
                    data.biletinialRate &&
                    <div className='flex gap-2 absolute left-3 bottom-3 datas-center mt-3 px-2 py-1 bg-white w-fit rounded'>
                        <Image src="/img/star.svg" alt="Rating" width={16} height={17} />
                        <span className='text-sm font-semibold'>{data.biletinialRate}</span>
                    </div>
                }

            </figure>
            <div className='flex flex-col p-5 sm:p-2'>
                <strong className='text-xl line-clamp-1 sm:text-base'>{data.name}</strong>
                {data.filmTypes && <span className='text-xs opacity-60 sm:text-xs'>{data.filmTypes.map(film => film.filmtype).join(', ')}</span>}
            </div>
        </Link>
        }
        </>
       
    )
}
