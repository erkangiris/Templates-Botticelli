"use client"
import Link from 'next/link'
import React from 'react'
import Language from '../Language'
import Image from 'next/image'
import { Bars3Icon } from '@heroicons/react/24/solid'

export default function MobileNav() {
    return (
        <div className='hidden w-full sm:flex justify-between items-center'>
            <button onClick={() => setmenustatus(true)} className='flex w-11 h-11 rounded justify-center items-center'><Bars3Icon className='w-7 h-7 text-white' /></button>
            <Link href="/" title="Homepage"><Image src="/img/logo1.svg" width={130} height={42} alt="Logo" /></Link>
            <Language />
        </div>
    )
}
