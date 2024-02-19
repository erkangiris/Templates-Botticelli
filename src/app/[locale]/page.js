import BannerSimple from "@/components/venus/BannerSimple";
import Divider from "@/components/venus/Layout/Divider";
import Footer from "@/components/venus/Layout/Footer";
import Header from "@/components/venus/Layout/Header";
import PosterList from "@/components/venus/PosterList";
import Slider from "@/components/venus/Slider";
import TrendingMovies from "@/components/venus/TrendingMovies";
import { WebServices } from "@/services/request";
import { getTranslations, getLocale } from 'next-intl/server';

export const metadata = {
    title: 'Kino Mediteran - Kartica vjernosti',
    description: 'Kino Mediteran is the project of cinema revival in Dalmatia that aims to renew movie theaters and bring screenings to smaller towns in Dalmatia where cinemas have been closed for a long time.',
}


export default async function Home() {

    const t = await getTranslations();
    const locale = await getLocale();
    const sliderData = await WebServices.getAllSlider({ id: "1" });
    const moviesonVision = await WebServices.getAllVision();
    const higlights = await WebServices.getAllHighligts();
    const nextprogrgam = await WebServices.getAllNextProgram();
    const banner = await WebServices.getAllBanner();


    return (
        <>
            <Header />
            <main className="w-full flex flex-col">
                <Slider locale={locale} data={sliderData.data} editortext={t('editor')} score={t('score')} btntext={t('buyticket')} trailertext={t('trailer')} />
                <PosterList category={'movies'} data={moviesonVision.data} title={t('movies_on_theater')} subtitle={t('movies_on_theater_subtext')} url={`${locale}/movies`} urltext={t('viewall')} />
                <Divider />
                <TrendingMovies editortext={t('editor')} locale={locale} data={higlights.data} title={t('trending_movies')} subtitle={t('trending_movies_subtext')} score={t('score')} btntext={t('buyticket')} trailertext={t('trailer')}  />
                <Divider />
                <PosterList type={'upcoming'} category={'upcoming-movies'} title={t('upcoming_movies')} subtitle={t('upcoming_movies_subtext')} url={`${locale}/upcoming-movies`} data={nextprogrgam.data} urltext={t('viewall')} />
                <Divider />
                <BannerSimple data={banner.data} />
            </main>
            <Footer />
        </>
    );
}
