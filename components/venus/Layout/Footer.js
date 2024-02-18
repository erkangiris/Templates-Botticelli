import Image from 'next/image'
import React from 'react'
import { getTranslations, getLocale } from 'next-intl/server';
import Newsletter from '../Newsletter';

export default async function Footer() {
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
    { name: t('cookie_policy'), url: `/${locale}/cookie_policy` },
    { name: t('privacy_policy'), url: `/${locale}/privacy_policy` },
]

  const socials = [
    { name: 'Youtube', url: '/', icon: '/img/socials/004-youtube.svg' },
    { name: 'Dribble', url: '/', icon: '/img/socials/031-dribble.svg' },
    { name: 'Instagram', url: '/', icon: '/img/socials/005-instagram.svg' },
    { name: 'Linkedin', url: '/', icon: '/img/socials/008-linkedin.svg' },
  ]

  const newsletter_text = {
    newsletter_title: t('newsletter'),
    newsletter_subtext: t('newsletter_subtext'),
    newsletter_success:t('newsletter_success'),
    newsletter_error:t('newsletter_error'),
    newsletter_btn:t('newsletter_btn'),
    newsletter_trust:t('newsletter_trust'),
    newsletter_placehlder:t('newsletter_placehlder'),
  }


  return (
    <footer className='w-full mt-32 border-t bg-botticelli-blue text-white pt-20 sm:mt-12 sm:p-5'>
      <div className='mx-auto w-1270 flex flex-col sm:w-full'>
        <Newsletter text={newsletter_text} />
        <div className="w-full overflow-hidden px-6 py-20 lg:px-8 sm:p-5">
          <nav className='flex gap-3 items-center justify-center w-full border-t border-b pb-10 border-white border-opacity-10 pt-10 sm:border-none sm:hidden'>
            {
              menu.map((item) => {
                return (
                  <a className='font-medium text-sm px-4 py-1 rounded hover:bg-black hover:bg-opacity-05' key={item.name} href={item.url} title={item.name}>{item.name}</a>
                )
              })
            }
          </nav>
          <div className="mt-10 flex justify-center space-x-10">
            <div className='flex gap-3 items-center'>
              {
                socials.map((item) => {
                  return (
                    <a className='text-white font-medium text-lg rounded hover:bg-white hover:bg-opacity-10' target="_blank" key={item.name} href={item.url} title={item.name}>
                      <Image src={item.icon} alt={item.name} width={32} height={32} />
                    </a>
                  )
                })
              }
            </div>
          </div>
          <p className="mt-10 text-center text-xs leading-5 text-gray-200">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
