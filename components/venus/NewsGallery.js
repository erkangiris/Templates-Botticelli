"use client"
import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import Title from './Layout/Title';
import Image from 'next/image';

export default function NewsGallery() {
    useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
            gallery: '#branchgallery',
            children: 'a',
            pswpModule: () => import('photoswipe'),
        });
        lightbox.init();

        return () => {
            lightbox.destroy();
            lightbox = null;
        };
    }, []);

    const images = [
        {
            src: '/img/delete/fg_001.jpg',
            thumb: '/img/delete/tfg_001.jpg',
            alt: 'Windows 10 Dark Mode Setting',
        },
        {
            src: '/img/delete/fg_002.jpg',
            thumb: '/img/delete/tfg_002.jpg',
            alt: 'macOS Mojave Dark Mode Setting',
        },
        {
            src: '/img/delete/fg_003.jpg',
            thumb: '/img/delete/tfg_003.jpg',
            alt: 'Android 9.0 Dark Mode Setting',
        },
        {
            src: '/img/delete/fg_004.jpg',
            thumb: '/img/delete/tfg_004.jpg',
            alt: 'Android 9.0 Dark Mode Setting',
        },
    ];

    return (
        <div className='w-full flex flex-col'>
            <Title title={'News Gallery'} subtitle={'Photo gallery of the news '} />
            <div className="pswp-gallery grid grid-cols-4 gap-3 sm:grid-cols-2 md:grid-cols-4" id={"branchgallery"}>
                {images.map((image, index) => (
                    <a
                        href={image.src}
                        data-pswp-width={"1000"}
                        data-pswp-height={"563"}
                        key={index}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image src={image.thumb} alt={image.alt} width={300} height={169} className='rounded-lg' />
                    </a>
                ))}
            </div>
        </div>
    )
}
