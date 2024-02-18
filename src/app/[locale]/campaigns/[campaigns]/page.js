import Breadcrumb from '@/components/venus/Layout/Breadcrumb'
import Footer from '@/components/venus/Layout/Footer'
import Header from '@/components/venus/Layout/Header'
import Title from '@/components/venus/Layout/Title'
import NewsGallery from '@/components/venus/NewsGallery';
import { getTranslations } from 'next-intl/server';


export default async function Page() {
    const t = await getTranslations()




    return (
        <>
            <Header />
            <Breadcrumb title={'Oscar Excitement: Nominees for Best Picture Revealed!'} subtitle={'26 August 2024'} img={'/img/delete/hb1.webp'} shadow />
            <div className='w-1270 mx-auto flex flex-col gap-32 text-lg leading-snug sm:w-full sm:gap-20 sm:text-sm sm:p-5 moviedetail'>
                <div className='w-full flex flex-col gap-8 sm:gap-4'>
                    <Title title={t('campaign_details')} subtitle={t('campaign_details_subtext')} />
                    <h4 className='text-4xl font-medium sm:text-xl sm:-mt-4'>Meet the Team: Behind the Scenes of Our TV Show - Get to Know the Faces of the Production!</h4>
                    <p>Powder chocolate pastry pastry ice cream powder gummies. Pastry wafer jelly bear claw lollipop oat cake sesame snaps tart danish. Carrot cake chocolate cake candy sweet ice cream. Candy canes jelly apple pie danish jujubes cotton candy sesame snaps. Halvah chupa chups carrot cake oat cake carrot cake. Cake icing lollipop soufflé sweet liquorice. Sesame snaps icing icing sweet tootsie roll pudding liquorice marzipan. Apple pie powder sweet tart liquorice jujubes. Lemon drops biscuit jelly-o carrot cake chocolate. Sugar plum ice cream icing gummi bears powder cake liquorice fruitcake. Jujubes tootsie roll jujubes jelly beans lemon drops. Liquorice soufflé dessert cupcake donut gummi bears.</p>
                    <p>Wafer bear claw candy canes tart jelly-o croissant. Shortbread cotton candy liquorice bear claw toffee brownie cupcake chocolate cake chocolate. Shortbread cupcake marzipan jelly beans tootsie roll sweet. Wafer jujubes lollipop cake chocolate bar. Topping macaroon gummies bear claw pie donut. Sugar plum apple pie jelly beans tootsie roll liquorice. Cake jelly gingerbread sweet roll danish marshmallow icing. Candy liquorice liquorice jujubes halvah bonbon cake wafer dragée. Tiramisu halvah dessert fruitcake dessert chocolate cake lollipop marzipan jelly-o. Topping sweet chocolate cake biscuit muffin cake lollipop. Chupa chups carrot cake carrot cake dragée topping. Cotton candy lollipop pudding shortbread toffee lemon drops oat cake. Liquorice sweet roll pudding cotton candy dessert donut fruitcake icing marshmallow. Donut topping powder dragée cupcake macaroon.</p>
                    <p>Cake ice cream tart dragée icing shortbread sweet roll. Gingerbread sweet toffee powder marshmallow brownie. Oat cake chocolate cake carrot cake ice cream jelly beans sugar plum fruitcake biscuit. Candy canes pudding apple pie toffee fruitcake. Ice cream cake topping carrot cake cookie cotton candy dessert chupa chups. Biscuit apple pie dessert donut candy canes. Shortbread topping gummies topping jujubes ice cream tiramisu. Liquorice gummi bears lemon drops macaroon gummi bears. Jelly gingerbread liquorice bonbon chupa chups carrot cake bonbon muffin jelly-o. Candy cotton candy cookie halvah jelly bear claw caramels shortbread biscuit. Icing halvah croissant biscuit danish bonbon jelly beans jujubes. Sweet chocolate cake bear claw tart tart jujubes pastry dessert toffee.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}
