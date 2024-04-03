import React from 'react'
import Title from './Layout/Title'
import Poster from './Poster'

export default function PosterList({title, subtitle, data, url, urltext, category,type}) {
    
    return (
        <section className='w-1270 mx-auto sm:w-full sm:px-5'>
            <Title title={title} subtitle={subtitle} url={url} urltext={urltext} />
            <div className='w-full grid grid-cols-5 gap-3 sm:overflow-x-auto sm:flex'>
                {
                    data.slice(0,5).map((item, index) => {
                        return (
                           <Poster  category={category} key={index} data={item} type={type} />
                        )
                    })
                }
            </div>
        </section>
    )
}
