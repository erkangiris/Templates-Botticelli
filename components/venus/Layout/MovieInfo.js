import TrailerModal from '@/components/global/TrailerModal'
import { PlayIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { WebServices } from "@/services/request";
import { getTranslations, getLocale } from 'next-intl/server';
import Score from '../Score'

export default async function MovieInfo({data}) {
    const t = await getTranslations();
    const locale = await getLocale();
    return (
        <section style={{backgroundImage:`url(${data.coverImgUrlValue ? data.coverImgUrlValue : '/img/default/default_cover.webp'})`}} className='after:bg-black sm:bg-center after:bg-opacity-10 relative after:absolute after:w-full after:h-full after:left-0 after:top-0 w-full h-700 flex items-center bg-cover bg-center text-white mb-20 sm:h-500 sm:mb-5 sm:p-5'>
            <div className='w-1270 mx-auto flex flex-col justify-center pt-24 sm:pt-20 relative z-10'>
                <div className='flex w-full items-start gap-3'>
                    <figure className='hidden sm:block'>
                        <Image src="/img/delete/dm.webp" alt="Movie Cover" width={90} height={120} className='rounded' />
                    </figure>
                    <div className='w-full flex flex-col'>
                        <h1 className='font-bold  text-5xl mb-3 sm:text-2xl'>{data.filmName}</h1>
                        <div className='flex gap-3 mb-10 sm:mb-5 sm:overflow-x-auto w-full'>
                            {
                            data.filmTypes.map((item) =>(
                                <span key={item.filmType} className='text-xxs font-medium bg-white bg-opacity-5 rounded px-4 py-1 whitespace-nowrap'>{item.filmtype}</span>
                            ))
                            }
                        </div>
                        <div className='text-lg leading-snug  max-w-3xl opacity-70 sm:text-xs line-clamp-2' dangerouslySetInnerHTML={{ __html: `<p'>${data.description}</p>`}}></div>
                    </div>
                </div>
                <Score biletinial={data.biletinialRate} editor={data.editorRate} score={t('score')} editortext={t('editor')} />

                <div className='flex items-center gap-5 mt-14 sm:mt-10'>
                    <Link href="#seances" className='btn-venus'>{t('buy_ticket')}</Link>
                    {data.fragman && <TrailerModal videourl={data.fragman.split('/').pop()}   trailertext={t('trailer')}/>}
                    
                </div>
            </div>
        </section>
    )
}
