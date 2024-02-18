import Image from 'next/image'
import Link from 'next/link'
import Language from '../Language'
import { getTranslations, getLocale } from 'next-intl/server';
import MobileMenu from './MobileMenu'

export default async function Header() {
    const t = await getTranslations();
    const locale = await getLocale();

    const menu = [
        { name: t('aboutus'), url: `/${locale}/about-us` },
        { name: t('branches'), url:  `/${locale}/branches` },
        { name: t('movies'), url:  `/${locale}/movies` },
        { name: t('upcoming'), url: `/${locale}/upcoming-movies` },
        { name: t('campaigns'), url: `/${locale}/campaigns` },
        { name: t('news'), url: `/${locale}/news` },
        { name: t('contact'), url: `/${locale}/contact` },
    ]

    const socials = [
        { name: 'Youtube', url: '/', icon: '/img/socials/004-youtube.svg' },
        { name: 'Dribble', url: '/', icon: '/img/socials/031-dribble.svg' },
        { name: 'Instagram', url: '/', icon: '/img/socials/005-instagram.svg' },
        { name: 'Linkedin', url: '/', icon: '/img/socials/008-linkedin.svg' },
    ]

    return (
        <>

            <header className='h-24 w-full px-10 sm:h-20 sm:px-5 flex items-center justify-between bg-botticelli-blue absolute left-0 top-0 z-50 sm:hidden'>
                <Link href="/" title="Homepage" className='sm:hidden'><Image src="/img/logo1.svg" width={169} height={55} alt="Logo" /></Link>
                <nav className='flex gap-4 items-center sm:hidden'>
                    {
                        menu.map((item) => {
                            return (
                                <a className='text-white font-medium text-lg px-4 py-1 rounded hover:bg-white hover:bg-opacity-10' key={item.name} href={item.url} title={item.name}>{item.name}</a>
                            )
                        })
                    }
                </nav>
                <div className='flex gap-3 items-center sm:hidden'>
                    {
                        socials.map((item) => {
                            return (
                                <a className='text-white font-medium text-lg rounded hover:bg-white hover:bg-opacity-10' target="_blank" key={item.name} href={item.url} title={item.name}>
                                    <Image src={item.icon} alt={item.name} width={32} height={32} />
                                </a>
                            )
                        })
                    }
                    <Language />
                </div>
            </header>
            <MobileMenu menu={menu} socials={socials} />
        </>
    )
}
