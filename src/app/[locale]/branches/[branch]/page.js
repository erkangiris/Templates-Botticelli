import BranchDetails from '@/components/venus/BranchDetails'
import BranchGallery from '@/components/venus/BranchGallery'
import BranchInfo from '@/components/venus/BranchInfo'
import BranchSeances from '@/components/venus/BranchSeances'
import Footer from '@/components/venus/Layout/Footer'
import Header from '@/components/venus/Layout/Header'
import { WebServices } from "@/services/request";
import { getTranslations, getLocale } from 'next-intl/server';
 
export async function generateMetadata({ params}) {
  const metadata = await WebServices.getAllBranchDetail({id:`${params.branch}`})
  return {
    title:metadata.data[0].branchName,
    description:metadata.data[0].branchDescription
  }
}

export default async function page({params}) {
  const t = await getTranslations();
  const branchData = await WebServices.getAllBranchDetail({id:`${params.branch}`})
  console.log(branchData.data[0].seances)
  return (
    <>
      <Header />
      <BranchInfo data={branchData.data[0]} />
      <div className='w-1270 mx-auto flex flex-col sm:w-full sm:p-5'>
        <BranchDetails data={branchData.data[0]} />
        <BranchSeances data={branchData.data[0].seances} title={t('seances')} subtitle={t('seancess')} />
        <BranchGallery />
      </div>
      <Footer />
    </>
  )
}
