import Breadcrumb from '@/components/venus/Layout/Breadcrumb'
import Footer from '@/components/venus/Layout/Footer'
import Header from '@/components/venus/Layout/Header'
import Title from '@/components/venus/Layout/Title'
import Image from 'next/image'
import React from 'react'
import { WebServices } from "@/services/request";
import { getTranslations} from 'next-intl/server';

export async function generateMetadata() {
    const t = await getTranslations();
    return {
        title:t('cookie_policy'),
        description:t('cookie_policy_subtext')
    }
}
export default async function page() {
    const t = await getTranslations()
    const contents = await WebServices.getContentbyId({id:'7'})
    return (
        <>
            <Header />
            {/* <Breadcrumb title={t('privacy_policy')} subtitle={t('privacy_policy_subtext')} img={contents.data.imageUrl} /> */}
            <Breadcrumb title={t('cookie_policy')} subtitle={t('cookie_policy_subtext')} img={'/img/delete/br1.webp'} />
            <div className='w-1270 mx-auto flex flex-col gap-32 text-lg leading-snug sm:w-full sm:gap-12 sm:p-5 sm:text-sm moviedetail'>
                <div className='w-full flex flex-col gap-5'>
                    <Title title={t('cookie_policy')} subtitle={t('cookie_policy_subtext')} />
                    <div className='w-full flex flex-col' dangerouslySetInnerHTML={{ __html: `<p>${contents.data.contents}</p>` }}></div>
                </div>
            </div>
            <Footer />
        </>
    )
}
