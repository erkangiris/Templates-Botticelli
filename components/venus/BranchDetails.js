import React from 'react'
import Title from './Layout/Title'
import Image from 'next/image'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server';

export default async function BranchDetails({ data }) {
    const t = await getTranslations();
    return (
        <section className='w-full flex flex-col'>
            <Title title={'Torun Center Cinemas Contact and Facilities Information'} subtitle={"Discover Torun Center Cinemas' contact information, location, features and facilities"} />
            <div className='w-full flex flex-col text-xl sm:text-sm'>
                <p className='leading-snug'>{data.branchDescription}</p>
                <div className='flex flex-col mt-10 gap-5'>
                    {data.address && <div className='flex items-center sm:flex-col sm:items-start'><strong className='min-w-48'>{t('address')}:</strong> {data.address}</div>}
                    {data.phone && <div className='flex items-center sm:flex-col sm:items-start'><strong className='min-w-48'>{t('phone')}:</strong> <Link className='text-blue-600' href={`tel:${data.phone.trim()}`} title="Phone Number">{data.phone}</Link></div>}
                </div>
            </div>
            <div className='w-full mt-32 sm:mt-20'>
                <Title title={t('venue_location')} subtitle={t('venue_location_subtext')} />
                <div className='w-full'>
                    <iframe src={data.location} width="1270" height="250" className='sm:w-full' style={{ border: 0, borderRadius: '12px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div id="seances" />
        </section>
    )
}
