import Breadcrumb from '@/components/venus/Layout/Breadcrumb'
import Footer from '@/components/venus/Layout/Footer'
import Header from '@/components/venus/Layout/Header'
import React from 'react'
import NewsList from '@/components/venus/NewsList'
import { getLocale, getTranslations } from 'next-intl/server'
import { WebServices } from '@/services/request'

export async function generateMetadata() {
    const t = await getTranslations();
    return {
        title: t('news'),
        description: t('news_subtext')
    }
}

export default async function page() {
    const t = await getTranslations();
    const newsData = await WebServices.getAllNews();
  

    return (

        <>
            <Header />
            <Breadcrumb title={t('news')} subtitle={t('news_subtext')}  img={'/img/delete/br2.webp'}  />
            <div className='w-1270 mx-auto sm:w-full sm:p-5'>
                <NewsList title={t('news')} subtitle={t('news_subtext')} data={newsData.data} />
            </div>
            <Footer />
        </>
    )
}
