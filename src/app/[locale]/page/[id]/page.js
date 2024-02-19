import Breadcrumb from '@/components/venus/Layout/Breadcrumb'
import Footer from '@/components/venus/Layout/Footer'
import Header from '@/components/venus/Layout/Header'
import Title from '@/components/venus/Layout/Title'
import Image from 'next/image'
import React from 'react'
import { WebServices } from "@/services/request";
import { getTranslations } from 'next-intl/server';
const regex = /(<([^>]+)>|&nbsp;)/gi;
export async function generateMetadata({ params }) {
    const metadata = await WebServices.getGetBySeoUrl({ seoUrl: params.id })

    return {
        title: metadata.data.contentTitle,
        description: metadata.data.contents.replace(regex, "").slice(0,159)
    }
}

export default async function page({ params }) {
    const t = await getTranslations()
    const contents = await WebServices.getGetBySeoUrl({ seoUrl: params.id })


    console.log(contents)

    const logos = [
        { name: 'Globus Bank', img: '/img/delete/l1.svg' },
        { name: 'Parallex Bank', img: '/img/delete/l2.svg' },
        { name: 'Rubies MFB', img: '/img/delete/l3.svg' },
        { name: 'Providus Bank', img: '/img/delete/l4.svg' },
        { name: 'Stanbic IBTC ', img: '/img/delete/l5.svg' },
        { name: 'Sterling Bank', img: '/img/delete/l6.svg' },
    ]



    return (
        <>
            <Header />
            <Breadcrumb title={contents.data.contentTitle} subtitle={contents.data.contents} img={'/img/delete/br1.webp'} />
            <div className='w-1270 mx-auto flex flex-col gap-32 text-lg leading-snug sm:w-full sm:gap-12 sm:p-5 sm:text-sm moviedetail'>
                <div className='w-full flex flex-col gap-5'>
                    <Title title={contents.data.contentTitle} subtitle={contents.data.contents} />
                    <div className='w-full flex flex-col' dangerouslySetInnerHTML={{ __html: `<p>${contents.data.contents}</p>` }}></div>
                </div>

                {/* <div className='w-full flex flex-col mt-32 sm:mt-0'>
                    <Title title={t('partners')} subtitle={t('partners_subtext')} />
                    <div className='w-full grid grid-cols-4 gap-3 sm:flex sm:overflow-x-auto'>
                        {
                            logos.map((item) => (
                                <div key={item.name} className='rounded-lg bg-white p-5 w-auto sm:p-5 justify-center items-center flex flex-col gap-5 sm:gap-2 sm:w-40 sm:min-w-40 sm:max-w-40'>
                                    <figure><Image src={item.img} width={80} height={80} alt={item.name} /></figure>
                                    <strong className='line-clamp-1 sm:text-sm'>{item.name}</strong>
                                </div>
                            ))
                        }
                    </div>
                </div> */}
            </div>
            <Footer />
        </>
    )
}
