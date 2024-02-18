"use client"
import { GlobeAltIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import { getCookie,setCookie } from "cookies-next";
import {usePathname, useRouter } from 'next/navigation'


export default function Language() {

    const router = useRouter();
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const [path, setsetpath] = useState(pathname)
    const [currentlang, setcurrentlang] = useState(getCookie('NEXT_LOCALE'))
    const closeModal = () => {
        setIsOpen(false)
    }
    const openModal = () => {
        setIsOpen(true)
    }
    

    const setLang = (param) => {
        setCookie('NEXT_LOCALE', param);
        setcurrentlang(param)
        const newPath = path.replace(`${currentlang}`,`${param}`);
        router.push(newPath)
    }


    return (
        <>
            <button aria-label='Change Language' onClick={() => openModal()} className='flex w-11 h-11 rounded-full justify-center items-center bg-white bg-opacity-5 ml-5'><GlobeAltIcon className='w-6 h-6 text-white' /></button>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/50" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                                    <button onClick={closeModal} className='w-11 h-11 flex justify-center items-center absolute right-5 top-5'>
                                        <XMarkIcon className='w-6 h-6' />
                                    </button>
                                    <div className='flex flex-col w-full'>
                                        <strong className='text-2xl font-bold'>Change Language</strong>
                                        <span className='text-gray-600 text-xxs'>You can change the website language here</span>
                                    </div>

                                    <div className='w-full flex gap-5'>
                                        <div className='w-full pt-5 flex gap-3 my-2'>
                                            <button onClick={() => setLang('tr')} variant='default' className={`flex flex-col items-center border border-white justify-center p-2 ${currentlang === "tr" && "border border-gray-100 shadow-lg"}`}>
                                                <Image src='/img/flags/turkey.svg' width={40} height={27} alt="alt" />
                                                <span className='text-gray-600 mt-1 text-xxs'>Turkish</span>
                                            </button>
                                            <button onClick={() => setLang('en')} variant='default' className={`flex flex-col items-center border border-white justify-center p-2 ${currentlang === "en" && "border border-gray-100 shadow-lg"}`}>
                                                <Image src='/img/flags/uk.svg' width={40} height={27} alt="alt" />
                                                <span className='text-gray-600 mt-1 text-xxs'>English</span>
                                            </button>
                                            <button onClick={() => setLang('de')} variant='default' className={`flex flex-col items-center border border-white justify-center p-2 ${currentlang === "de" && "border border-gray-100 shadow-lg"}`}>
                                                <Image src='/img/flags/germany.svg' width={40} height={27} alt="alt" />
                                                <span className='text-gray-600 mt-1 text-xxs'>German</span>
                                            </button>

                                            <button onClick={() => setLang('hr')} variant='default' className={`flex flex-col items-center border border-white justify-center p-2 ${currentlang === "hr" && "border border-gray-100 shadow-lg"}`}>
                                                <Image src='/img/flags/croatia.svg' width={40} height={27} alt="alt" />
                                                <span className='text-gray-600 mt-1 text-xxs'>Croatian</span>
                                            </button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
