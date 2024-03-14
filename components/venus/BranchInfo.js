import { PlayIcon } from '@heroicons/react/24/solid'
import { getTranslations } from 'next-intl/server';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Score from './Score';

export default async function BranchInfo({ data }) {
  const t = await getTranslations();
  const regex = /(<([^>]+)>|&nbsp;)/gi;

  return (
    <section style={{backgroundImage:`url(${data.imageUrl ? data.imageUrl : '/img/default/default_cover.webp'})`}} className='after:bg-black after:bg-opacity-50 relative after:absolute after:w-full after:h-full after:left-0 after:top-0 w-full h-700 flex items-cente bg-cover bg-center text-white mb-20 sm:h-500 sm:mb-5 sm:p-5'>
      <div className='w-1270 mx-auto flex flex-col justify-center pt-24 sm:pt-20 z-10'>
        <div className='w-full flex flex-col'>
          <h1 className='font-bold  text-6xl mb-3 sm:text-2xl'>{data.branchName}</h1>
          <p className='text-lg leading-snug  max-w-3xl opacity-70 sm:text-xs line-clamp-2'>{data.branchDescription.replace(regex, "")}</p>
        </div>
        <Score editortext={t('editor')} score={t('score')} btntext={t('buyticket')} trailertext={t('trailer')}  biletinial={'4.9'} editor={'4.5'} />

        {/* <div className='flex items-center gap-5 mt-14 sm:mt-10'>
          <Link href="#seances" className='btn-venus'>{t('see_seances')}</Link>
        </div> */}
      </div>
    </section>
  )
}
