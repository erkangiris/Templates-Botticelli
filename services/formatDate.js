import { getLocale } from 'next-intl/server';

export default async function formatDate(param) {
    const locale = await getLocale();

    const formatLocale = (locale) => {
        switch (locale) {
            case 'tr':
                return 'tr-TR';
            case 'en':
                return 'en-US';
            case 'de':
                return 'de-DE';
            case 'hr':
                return 'hr-HR';
            default:
                return 'en-US';
        }
    };

    const formattedDate = new Intl.DateTimeFormat(formatLocale(locale), {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(new Date(param));

    return formattedDate;
}