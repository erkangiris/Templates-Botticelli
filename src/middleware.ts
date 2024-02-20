/** @format */

import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "tr", "hr", "de"],
  localeDetection: true,
  defaultLocale: "en",
  // localePrefix:'never',
  // pathnames: {
  //   "/about-us": {
  //     en: "/about-us",
  //     tr: "/hakkimizda",
  //     hr:"#",
  //     de:"#"
  //   },
  //   "/branches": {
  //     en: "/branches",
  //     tr: "/subeler",
  //     hr:"#",
  //     de:"#"
  //   },
  //   "/branches/[...slug]": {
  //     en: "/branches/[...slug]",
  //     tr: "/subeler/[...slug]",
  //     hr:"#",
  //     de:"#"
  //   },
  //   "/movies": {
  //     en: "/movies",
  //     tr: "/vizyondaki-filmler",
  //     hr:"#",
  //     de:"#"
  //   },
  //   "/movies/[...slug]": {
  //     en: "/movies/[...slug]",
  //     tr: "/vizyondaki-filmler/[...slug]",
  //     hr:"#",
  //     de:"#"
  //   },
  //   "/film-distribution": {
  //     en: "/film-distribution",
  //     tr: "/film-dagitim",
  //     hr:"#",
  //     de:"#"
  //   },
  //   "/news": {
  //     en: "/news",
  //     tr: "/haberler",
  //     hr:"#",
  //     de:"#"
  //   },
  //   "/news/[...slug]": {
  //     en: "/news/[...slug]",
  //     tr: "/haberler/[...slug]",
  //     hr:"#",
  //     de:"#"
  //   },

  //   "/upcoming-movies": {
  //     en: "/upcoming-movies",
  //     tr: "/gelecek-filmler",
  //     hr:"#",
  //     de:"#"
  //   },
  //   "/upcoming-movies/[...slug]": {
  //     en: "/upcoming-movies/[...slug]",
  //     tr: "/gelecek-filmler/[...slug]",
  //     hr:"#",
  //     de:"#"
  //   },
  //   "/campaigns": {
  //     en: "/campaigns",
  //     tr: "/kampanyalar",
  //     hr:"#",
  //     de:"#"
  //   },
  //   "/campaigns/[...slug]": {
  //     en: "/campaigns/[...slug]",
  //     tr: "/kampanyalar/[...slug]",
  //     hr:"#",
  //     de:"#"
  //   },
  //   "/contact": {
  //     en: "/contact",
  //     tr: "/iletisim",
  //     hr:"#",
  //     de:"#"
  //   },
  // },
});

export const config = {
  matcher: ["/", "/(en|tr|hr|de)/:path*"],
};
