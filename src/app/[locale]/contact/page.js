import Branch from '@/components/venus/Branch'
import Breadcrumb from '@/components/venus/Layout/Breadcrumb'
import Footer from '@/components/venus/Layout/Footer'
import Header from '@/components/venus/Layout/Header'
import Title from '@/components/venus/Layout/Title'
import { WebServices } from '@/services/request'
import { EnvelopeIcon, PhoneArrowUpRightIcon } from '@heroicons/react/24/solid'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import React from 'react'

export async function generateMetadata() {
  const t = await getTranslations();
  return {
      title: t('contact_us'),
      description: t('contact_us_subtext')
  }
}


export default async function page() {
  const t = await getTranslations();
  const branchData = await WebServices.getAllBranches();
  const contactinfo = await WebServices.getSettings();

  return (
    <>
      <Header />
      <Breadcrumb title={t('contact_us')} subtitle={t('contact_us_subtext')} img={'/img/delete/br2.webp'} />
      <div className='w-1270 mx-auto sm:w-full sm:p-5'>
        <Title title={t('contact_us')} subtitle={t('contact_us_subtext')} />
        <div className='w-full grid grid-cols-3 gap-3 sm:grid-cols-1'>
          <div className='rounded-lg bg-white p-10 flex flex-col sm:p-5'>
            <h3 className='font-bold text-3xl mb-3 sm:text-xl sm:mb-1'>{t('ticket_cancellation')}</h3>
            <span className='text-sm sm:text-xs'>{t('ticket_cancellation_subtext')}</span>
            <div className='flex items-center gap-2 mt-8 sm:mt-4'>
              <PhoneArrowUpRightIcon className='w-5 h-5 text-blue-600' />
              <Link className='font-semibold text-blue-600' href={'tel:8503339911'} title={t('ticket_cancellation')}>{contactinfo.data[1].phone}</Link>
            </div>
          </div>
          <div className='rounded-lg bg-white p-10 flex flex-col sm:p-5'>
            <h3 className='font-bold text-3xl mb-3 sm:text-xl sm:mb-1'>{t('head_office')}</h3>
            <span className='text-sm sm:text-xs'>{t('head_office_subtext')}</span>
            <div className='flex items-center gap-2 mt-8 sm:mt-4'>
              <PhoneArrowUpRightIcon className='w-5 h-5 text-blue-600' />
              <Link className='font-semibold text-blue-600' href={'tel:8503339911'} title={t('head_office')}>{contactinfo.data[1].phone}</Link>
            </div>
          </div>
          <div className='rounded-lg bg-white p-10 flex flex-col sm:p-5'>
            <h3 className='font-bold text-3xl mb-3 sm:text-xl sm:mb-1'>{t('email')}</h3>
            <span className='text-sm sm:text-xs'>{t('email_subtext')}</span>
            <div className='flex items-center gap-2 mt-8 sm:mt-4'>
              <EnvelopeIcon className='w-5 h-5 text-blue-600' />
              <Link className='font-semibold text-blue-600' href={`mailto:${contactinfo.data[1].email}`} title={t('email_subtext')}>{contactinfo.data[1].email}</Link>
            </div>
          </div>
        </div>
        <div className='w-full mt-32 flex flex-col sm:mt-20'>
          <Title title={t('contact_branch')} subtitle={t('contact_branch')} />
          <div className='grid grid-cols-3 gap-x-3 gap-y-20 w-full sm:grid-cols-1 sm:gap-y-5 md:grid-cols-2'>
            {
              branchData.data.map((item, index) => {
                return (
                  <Branch key={index} data={item} />
                )
              })
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
