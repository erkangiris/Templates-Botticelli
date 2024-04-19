import React from 'react'
import Title from './Layout/Title'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server';
import formatDate from '@/services/formatDate';

export default async function MovieDetails({ data }) {
    const t = await getTranslations();
    const vdate = await formatDate(data.visionDate)
    return (
        <section className='w-full flex flex-col'>
            <Title title={`${data.filmName} ${t('movie_plot')}`} subtitle={`${data.filmName} ${t('movie_plot_subtext')}`} />
            <div className='w-full flex flex-col text-xl sm:text-sm'>
                <div className='text-lg leading-snug' dangerouslySetInnerHTML={{ __html: `<p>${data.description}</p>` }}></div>
                <div className='flex flex-col mt-10 gap-5 sm:mt-5 sm:gap-3'>
                    <div className='flex items-center'><strong className='min-w-44'>{t('vision_date')}:</strong> <span>{vdate}</span></div>
                    {data.durationValue && <div className='flex items-center'><strong className='min-w-44'>{t('duration_time')}:</strong> {data.durationValue} {t('hour')}</div>}
                    {
                        data.smartMarkers.length > 0 &&
                        <div className='flex items-center'>
                            <strong className='min-w-44'>{t('smart_signs')}:</strong>
                            <div className='flex gap-2'>
                                {
                                    data.smartMarkers.map((item) => (
                                        <Image key={item.id} src={item.imageUrlValue} width={20} height={20} alt={item.description} />
                                    ))
                                }
                            </div>
                        </div>
                    }

                </div>
            </div>
            {
                data.actors.length > 0 &&
                <div className='w-full mt-32 flex flex-col sm:mt-20'>
                    <Title title={`${data.filmName} ${t('movie_cast')}`} subtitle={`${data.filmName} ${t('movie_cast_subtext')}`} />
                    <div className='flex gap-5 w-full sm:overflow-x-auto'>
                        {
                            data.actors.map((item) => {
                                return (
                                    <div key={item.id} className='flex flex-col justify-center items-center gap-2 text-center sm:min-w-20'>
                                        <figure>
                                            <Image src={item.imageUrlValue} alt={item.name} width={64} height={64} className='rounded-full border border-gray-200 object-contain min-w-16 min-h-16 max-h-16 max-w-16' />
                                        </figure>
                                        <span className='text-xxs font-medium'>{item.name}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }

            <div id="seances" />
        </section>
    )
}
