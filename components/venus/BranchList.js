import React from 'react'
import Title from './Layout/Title'
import Image from 'next/image'
import Branch from './Branch'

export default function BranchList({data,title,subtitle, langdata}) {

  // console.log(langdata)

  return (
    <section className='w-full sm:p-5'>
        <div className='w-1270 flex flex-col mx-auto sm:w-full'>
            <Title title={title} subtitle={subtitle} />
            <div className='grid grid-cols-3 gap-x-3 gap-y-12 w-full sm:grid-cols-1 sm:gap-5 sm:gap-x:0 md:grid-cols-2'>
               {
                data.data.map((item, index) => {
                    return (
                       <Branch key={item.id} data={item} langdata={langdata.data[index]} />
                    )
                })
               }
            </div>
        </div>
    </section>
  )
}
