"use client"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Language from '../Language'

export default function MobileMenu({ menu, socials }) {
    const [menustatus, setmenustatus] = useState(false)

    return (
        <>
            <aside className={`${menustatus ? ' left-0' : '-left-full'} hidden w-full transition-all justify-between h-full fixed top-0 bg-black bg-opacity-50 backdrop-blur z-1001 p-5 sm:flex flex-col`}>
                <button onClick={() => setmenustatus(false)} className='absolute right-5 top-5 w-11 h-11 flex items-center justify-center'><XMarkIcon className='w-8 h-8 text-white' /></button>
                <Link href="/" title="Homepage"><Image src="/img/logo1.svg" width={130} height={42} alt="Logo" /></Link>
                <nav className='flex flex-col gap-4'>
                    {
                        menu.map((item) => {
                            return (
                                <a className='text-white font-medium text-lg py-1 rounded' key={item.name} href={item.url} title={item.name}>{item.name}</a>
                            )
                        })
                    }
                </nav>
                <div className='flex gap-3 items-center'>
                    {
                        socials.map((item) => {
                            return (
                                <a className='text-white font-medium text-lg rounded' target="_blank" key={item.name} href={item.url} title={item.name}>
                                    <Image src={item.icon} alt={item.name} width={32} height={32} />
                                </a>
                            )
                        })
                    }
                </div>
            </aside>
            <div className='hidden w-full sm:flex justify-between items-center absolute left-o top-0 z-1000 h-20 px-5'>
                <button onClick={() => setmenustatus(true)} className='flex w-11 h-11 rounded justify-center items-center'><Bars3Icon className='w-7 h-7 text-white' /></button>
                <Link href="/" title="Homepage"><Image src="/img/logo1.svg" width={130} height={42} alt="Logo" /></Link>
                <Language />
            </div>
        </>
    )
}
