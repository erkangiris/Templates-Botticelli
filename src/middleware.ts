
import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'tr', 'hr','de'],
  localeDetection: true,
  defaultLocale: 'en',
  // localePrefix:'never',
  pathnames: {
    '/about-us': {
      en: '/about-us',
      tr: '/hakkimizda'
    },
    '/branches': {
      en: '/branches',
      tr: '/subeler'
    },
    '/movies': {
      en: '/movies',
      tr: '/vizyondaki-filmler'
    },
    '/movies/[...slug]': {
      en: '/movies/[...slug]',
      tr: '/vizyondaki-filmler/[...slug]'
    },

    '/news': {
      en: '/news',
      tr: '/haberler'
    },
    '/news/[...slug]': {
      en: '/news/[...slug]',
      tr: '/haberler/[...slug]'
    },

    '/upcoming-movies': {
      en: '/upcoming-movies',
      tr: '/gelecek-filmler'
    },
    '/upcoming-movies/[...slug]': {
      en: '/upcoming-movies/[...slug]',
      tr: '/gelecek-filmler/[...slug]'
    },
    '/campaigns': {
      en: '/campaigns',
      tr: '/kampanyalar'
    },
    '/campaigns/[...slug]': {
      en: '/campaigns/[...slug]',
      tr: '/kampanyalar/[...slug]'
    },
    '/branches/[...slug]': {
      en: '/branches/[...slug]',
      tr: '/subeler/[...slug]'
    },
    '/contact': {
      en: '/contact',
      tr: '/iletisim'
    },
  }
});
 
export const config = {
  matcher: ['/', '/(tr|en|hr|de)/:path*']
};





