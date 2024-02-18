import React from 'react'
import Title from './Layout/Title'
import Poster from './Poster'

export default function MovieList({title,subtitle,data,category, type}) {
   
  return (
    <section className='w-full flex flex-col'>
            <Title title={title} subtitle={subtitle} />
            <div className='w-full grid grid-cols-5 gap-x-3 gap-y-10 sm:grid-cols-2 sm:gap-y-3 md:grid-cols-3'>
                {
                    data.map((item, index) => {
                        return (
                           <Poster type={type} category={category} key={index} data={item} autowidth />
                        )
                    })
                }
            </div>
    </section>
  )
}
