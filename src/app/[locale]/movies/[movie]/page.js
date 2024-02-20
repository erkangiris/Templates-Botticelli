import Divider from '@/components/venus/Layout/Divider'
import Footer from '@/components/venus/Layout/Footer'
import Header from '@/components/venus/Layout/Header'
import MovieInfo from '@/components/venus/Layout/MovieInfo'
import MovieDetails from '@/components/venus/MovieDetails'
import MovieSeances from '@/components/venus/MovieSeances'
import { WebServices } from '@/services/request'
import React from 'react'
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params}) {
  const t = await getTranslations();
  const metadata = await WebServices.getAllFilmDetail({id:`${params.movie.split('-').slice(-1)[0]}`});
  
  return {
    title:`${metadata.data[0].filmName} ${t('movie')}`,
    description:metadata.data[0].description
  }
}

export default async function page({params}) {
  const filmDetail = await WebServices.getAllFilmDetail({id:`${params.movie.split('-').slice(-1)[0]}`});
  const t = await getTranslations();
  // console.log(filmDetail.data[0].seances.length)
  return (
    <>
      <Header />
      <MovieInfo data={filmDetail.data[0]} />
      <div className='w-1270 mx-auto flex flex-col sm:w-full sm:p-5'>
        <MovieDetails data={filmDetail.data[0]} />
        {<MovieSeances movie={filmDetail.data[0].seances.length > 0 && filmDetail.data[0]} seancess={t('seancess')} title={`${filmDetail.data[0].filmName} ${t('tickets_showtimes')}`} subtitle={`${filmDetail.data[0].filmName} ${t('tickets_showtimes_subtext')}`} data={filmDetail.data[0].seances} />}
      </div>
      <Footer />
    </>
  )
}
