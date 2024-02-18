import Breadcrumb from '@/components/venus/Layout/Breadcrumb'
import Footer from '@/components/venus/Layout/Footer'
import Header from '@/components/venus/Layout/Header'
import Title from '@/components/venus/Layout/Title'
import { WebServices } from '@/services/request';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';


export async function generateMetadata({ params }) {
    const t = await getTranslations();
    const metadata = await WebServices.getNewsById({ Id: params.new })

    return {
        title: `${metadata.data.title} ${t('movie')}`,
        description: metadata.data.title
    }
}


export default async function Page({ params }) {
    const t = await getTranslations();
    const newsData = await WebServices.getNewsById({ Id: params.new })
  

    return (
        <>
            <Header />
            <Breadcrumb title={newsData.data.title} subtitle={'26 August 2024'} img={newsData.data.imageUrl} shadow blur />
            <div className='w-1270 mx-auto flex flex-col gap-32 text-lg leading-snug sm:w-full sm:gap-20 sm:text-sm sm:p-5 moviedetail'>
                <div className='flex flex-col w-full gap-20 sm:gap-10 sm:flex-col-reverse'>
                    <div className='w-full flex flex-col sm:gap-4 items-start'>
                        <div className='w-full flex flex-col gap-8'>
                            <div className='w-full flex flex-col' dangerouslySetInnerHTML={{ __html: `<p>${newsData.data.contents}</p>` }}></div>
                        </div>
                    </div>
                    <figure>
                        <Image src={newsData.data.imageUrl} alt={newsData.data.title} width={384} height={384} className='min-w-96 min-96 rounded-xl sm:min-w-full sm:max-w-full' />
                    </figure>
                </div>
            </div>
            <Footer />
        </>
    )
}
