"use client"
import { getCookie } from 'cookies-next'
import React, { useEffect, useState } from 'react'


export default function SeanceDate({time}) {
    const [session, setSession] = useState();
    useEffect(() => {
        setSession(getCookie('NEXT_LOCALE'))
    }, []);
    var date = new Date(time);
    const formatLocale = (session) => {
        switch (session) {
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
    var formatDay = date.toLocaleDateString(formatLocale(session), { weekday: 'long', month: 'long', day: 'numeric' });

  return (
    <strong className='text-xl sm:text-base'>{formatDay}</strong>
  )
}
