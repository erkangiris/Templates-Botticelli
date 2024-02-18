import React from 'react'

export default function Breadcrumb({title,subtitle, img, shadow, blur}) {

    return (
        <section style={{'--image-url': `url(${img})`}} className={`${blur && 'before:backdrop-blur-lg'} ${shadow && 'before:absolute sm:bg-center before:w-full before:h-full before:bg-venus-dark before:bg-opacity-70 before:left-0 before:top-0'} backdrop-blur-2xl w-full h-500 flex relative justify-center items-center pt-24 bg-cover text-white sm:mb-5 mb-20 bg-[image:var(--image-url)] sm:h-300 sm:pt-20` }>
            <div className='flex flex-col justify-center items-center relative z-10 sm:px-5'>
                <h1 className='font-bold max-w-5xl text-center text-6xl mb-3 sm:text-2xl sm:mb-0'>{title}</h1>
                <span className='text-white text-sm opacity-60 sm:text-xxs'>{subtitle}</span>
            </div>
        </section>
    )
}
