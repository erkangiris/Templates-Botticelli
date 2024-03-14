"use client"
import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { PlayIcon } from '@heroicons/react/24/solid';
import { Fragment, useEffect, useState } from 'react'

export default function Popup({data}) {

    

    console.log(data.imageUrl,'data')
    const [isOpen, setIsOpen] = useState(true)

    const closeModal = () => {
      setIsOpen(false);
    };
  return (
    <>
                {/* <button onClick={()=>setIsOpen(true)} className='btn-line flex gap-3 items-center'><PlayIcon className="w-4 h-4" />{trailertext}</button> */}
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-1001" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
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
                                <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                                    <div className='flex flex-col p-10 gap-5 sm:p-5'>
                                    <img src={data.imageUrl} className='w-full rounded-xl' />
                                    <h3 className='font-bold text-4xl sm:text-2xl'>{data.title &&  data.title}</h3>
                                    <p className='text-lg leading-snug sm:text-xl'>{data.content &&  data.content}</p>
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
