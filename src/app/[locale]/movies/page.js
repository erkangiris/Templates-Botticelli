import Breadcrumb from '@/components/venus/Layout/Breadcrumb'
import Footer from '@/components/venus/Layout/Footer'
import Header from '@/components/venus/Layout/Header'
import MovieList from '@/components/venus/MovieList'
import React from 'react'
import { WebServices } from "@/services/request";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
    const t = await getTranslations();
    return {
        title: t('movies_on_theater'),
        description: t('movies_on_theater_subtext')
    }
}

export default async function page() {
    
    const t = await getTranslations();
    const moviesonVision = await WebServices.getAllVision();

    return (
        <>
            <Header />
            <Breadcrumb title={t('movies_on_theater')} subtitle={t('movies_on_theater_subtext')} img={'/img/delete/br1.webp'} />
            <div className='w-1270 mx-auto sm:w-full sm:p-5'>
                <MovieList data={moviesonVision.data} title={t('movies_on_theater')} subtitle={t('movies_on_theater_subtext')} category={`movies`} />
            </div>
            <Footer />
        </>
    )
}
