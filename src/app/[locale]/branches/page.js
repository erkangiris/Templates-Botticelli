import BranchList from '@/components/venus/BranchList'
import Breadcrumb from '@/components/venus/Layout/Breadcrumb'
import Footer from '@/components/venus/Layout/Footer'
import Header from '@/components/venus/Layout/Header'
import React from 'react'
import { WebServices } from "@/services/request";
import { getTranslations, getLocale } from 'next-intl/server';
 
export async function generateMetadata() {
    const t = await getTranslations();
    return {
        title:t('branches'),
        description:t('branches_subtext')
    }
}

export default async function page({params}) {
    const t = await getTranslations();
    const locale = await getLocale();
    const branchData = await WebServices.getAllBranches();

    let value;

    switch (locale) {
      case 'en':
        value = 0;
        break;
      case 'hr':
        value = 3;
        break;
      default:
        value = 0;
        break;
    }


    const langedData = await WebServices.getAllBranches({langId:value});



    return (
        <>
            <Header />
            <Breadcrumb title={t('cinemas')} subtitle={t('branches_subtext')}  img={'/img/delete/br1.webp'}  />
            <div className='w-1270 mx-auto sm:w-full'>
                <BranchList langdata={langedData} lang={params.locale} locale={locale} data={branchData} title={t('cinemas')} subtitle={t('branches_subtext')} />
            </div>
            <Footer />
        </>
    )
}
