import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { getTranslations, getLocale } from 'next-intl/server';
import { MapPinIcon, PhoneArrowUpRightIcon } from '@heroicons/react/24/solid';


export default async function Branch({ data }) {
    const t = await getTranslations();
    const locale = await getLocale();

    return (
        <Link href={`branches/${data.biletinialBranchId}`} className='rounded-lg bg-white p-3'>
            <figure className='relative'>
                <Image src={data.imageUrl} alt={data.name} width={391} height={200} className='rounded-lg object-cover max-h-28 min-h-28' />
                <div className='flex gap-2 absolute left-3 bottom-3 datas-center mt-3 px-2 py-1 bg-white w-fit rounded'>
                    <Image src="/img/star.svg" alt="Rating" width={16} height={17} />
                    <span className='text-sm font-semibold'>4.7</span>
                </div>
            </figure>
            <div className='w-full flex flex-col pt-3 pl-2'>
                <strong className='text-xl sm:text-base pl-2'>{data.name}</strong>
                <address className='flex items-center gap-2 w-full mt-3 pt-3 border-t border-gray-200 opacity-60'>
                    <MapPinIcon className='w-5 h-5' />
                    <span className='text-xs not-italic'>{data.address}</span>
                </address>
                {/* <Link href={`tel:${data.phone.trim()}`} className='flex items-center gap-2'>
                    <PhoneArrowUpRightIcon className='w-4 h-4' />
                    <span className='text-sm not-italic'>{data.phone}</span>
                </Link> */}
            </div>

        </Link>
    )
}
