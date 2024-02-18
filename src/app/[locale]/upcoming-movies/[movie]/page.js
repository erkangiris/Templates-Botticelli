import Divider from '@/components/venus/Layout/Divider'
import Footer from '@/components/venus/Layout/Footer'
import Header from '@/components/venus/Layout/Header'
import MovieInfo from '@/components/venus/Layout/MovieInfo'
import MovieDetails from '@/components/venus/MovieDetails'
import MovieSeances from '@/components/venus/MovieSeances'
import React from 'react'

export default function page() {
  return (
    <>
      <Header />
      <MovieInfo />
      <div className='w-1270 mx-auto flex flex-col'>
        <MovieDetails />
        <MovieSeances />
      </div>
      <Footer />
    </>
  )
}
