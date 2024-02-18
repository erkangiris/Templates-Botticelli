import Breadcrumb from '@/components/venus/Layout/Breadcrumb'
import Footer from '@/components/venus/Layout/Footer'
import Header from '@/components/venus/Layout/Header'
import MovieList from '@/components/venus/MovieList'
import React from 'react'
import { WebServices } from "@/services/request";
import { getTranslations, getLocale } from 'next-intl/server';

export async function generateMetadata() {
    const t = await getTranslations();
    return {
        title: t('upcoming_movies'),
        description: t('upcoming_movies_subtext')
    }
}

export default async function page() {
    const t = await getTranslations();
    const locale = await getLocale();
    const nextprogrgam = await WebServices.getAllNextProgram();

    return (
        <>
            <Header />
            <Breadcrumb title={t('upcoming_movies')} subtitle={t('upcoming_movies_subtext')} img={'/img/delete/br1.webp'} />
            <div className='w-1270 mx-auto  sm:w-full sm:p-5'>
                <MovieList type={'upcoming'} title={t('upcoming_movies')} subtitle={t('upcoming_movies_subtext')} data={nextprogrgam.data} category={`upcoming-movies`} />
            </div>
            <Footer />
        </>
    )
}
