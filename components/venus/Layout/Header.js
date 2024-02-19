import Image from 'next/image'
import Link from 'next/link'
import Language from '../Language'
import { getTranslations, getLocale } from 'next-intl/server';
import MobileMenu from './MobileMenu'
import { ChevronDownIcon } from '@heroicons/react/24/solid';

export default async function Header() {
    const t = await getTranslations();
    const locale = await getLocale();

    const menu = [
        { name: t('cinemas'), url: `/${locale}/branches` },
        { name: t('movies'), url: `/${locale}/movies` },
        { name: t('upcoming'), url: `/${locale}/upcoming-movies` },
        { name: t('campaigns'), url: `/${locale}/campaigns` },
        { name: t('news'), url: `/${locale}/news` },
        {
            name: t('aboutus'), url: `/${locale}/page/${t('about_us_url')}`, submenu: [
                { name: 'Kino Meditaran', url: `/${locale}/page/${t('about_us_url')}` },
                { name: 'FMFS', url: `https://www.fmfs.hr/novosti`, blank: true },
                { name: t('film_dis'), url: `/${locale}/page/${t('film-distribution_url')}` },
                { name: t('contact'), url: `/${locale}/contact` },
            ]
        },

    ]

    const socials = [
        { name: 'Instagram', url: 'https://www.instagram.com/kinomediteran', icon: '/img/socials/005-instagram.svg' },
        { name: 'Youtube', url: 'https://www.youtube.com/channel/UCWwKEeGLwIipPsCr7dFrP8A', icon: '/img/socials/004-youtube.svg' },
        { name: 'Facebook', url: 'https://www.facebook.com/kinomediteran', icon: '/img/socials/001-facebook.svg' },
    ]

    return (
        <>

            <header className='h-24 w-full px-10 sm:h-20 sm:px-5 flex items-center justify-between  absolute left-0 top-0 z-50 sm:hidden'>
                <Link href="/" title="Homepage" className='sm:hidden'><Image src="/img/logo1.svg" width={125} height={68} alt="Logo" /></Link>
                <nav className='flex gap-4 items-center sm:hidden'>
                    <ul className='flex gap-4 items-center sm:hidden'>
                        {
                            menu.map((item) => {
                                return (
                                    <li className='relative rounded text-white group font-medium text-lg px-4 py-1 hover:bg-white hover:text-black' key={item.name}><a className=' flex items-center gap-3' href={item.url} title={item.name}>{item.name}{item.submenu && <ChevronDownIcon className='w-4 h-4' />}</a>
                                        {
                                            item.submenu &&
                                            <div className='absolute top-6 flex-col pt-7 pb-4 gap-3 px-2 hidden group-hover:flex rounded-tr-lg w-64 left-0 bg-white rounded-b-lg'>
                                                {
                                                    item.submenu.map((submenuItem) => (
                                                        <a href={submenuItem.url} title={submenuItem.name} key={submenuItem.url} target={`${submenuItem.blank ? '_blank' : '_self'}`} className='text-black font-medium text-sm px-4 py-1 relative rounded hover:bg-botticelli-softblue hover:bg-opacity-10'>{submenuItem.name}</a>
                                                    ))
                                                }
                                            </div>
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
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
