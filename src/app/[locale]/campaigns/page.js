import Breadcrumb from '@/components/venus/Layout/Breadcrumb'
import Footer from '@/components/venus/Layout/Footer'
import Header from '@/components/venus/Layout/Header'
import React from 'react'
import { getTranslations } from 'next-intl/server'
import { WebServices } from '@/services/request'
import CampaignsList from '@/components/venus/CampaignsList'

export async function generateMetadata() {
    const t = await getTranslations();
    return {
        title: t('campaigns'),
        description: t('campaigns_subtext')
    }
}



export default async function page() {

    const campaigns = await WebServices.getAllCampaigns();

    const t = await getTranslations()



    return (

        <>
            <Header />
            <Breadcrumb title={t('campaigns')} subtitle={t('campaigns_subtext')}  img={'/img/delete/br2.webp'}  />
            <div className='w-1270 mx-auto sm:w-full sm:p-5'>
                <CampaignsList title={t('campaigns')} subtitle={t('campaigns_subtext')} data={campaigns.data} />
            </div>
            <Footer />
        </>
    )
}
