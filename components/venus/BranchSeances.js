"use client"
import React, { useState } from 'react'
import Title from './Layout/Title'
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import SeanceDate from './SeanceDate';
import 'swiper/css';

export default function BranchSeances({ title, subtitle,  branch, seancess }) {


    const data = [
        {
            "branchName": "Ankara Forum Cinemapink",
            "branchDescription": "Jelly beans icing oat cake muffin candy canes. Sweet roll chocolate cake sweet roll candy chocolate cake. Croissant pudding pie sweet roll candy soufflé liquorice. Chocolate bar croissant gingerbread halvah apple pie fruitcake bear claw pastry topping. Cupcake tootsie roll tootsie roll macaroon bonbon lollipop. Jujubes muffin sugar plum cupcake jelly. Dessert toffee apple pie lollipop cake. Apple pie pudding ice cream topping caramels. Topping sweet roll icing jelly-o chocolate shortbread donut sweet. Jelly chocolate bar jelly beans chocolate caramels sugar plum halvah. Shortbread brownie shortbread jelly cupcake oat cake wafer gummi bears cake. Carrot cake lollipop cheesecake candy canes bonbon. Liquorice chocolate powder apple pie biscuit sweet.",
            "address": "Ovacık, 06280 Keçiören/Ankara",
            "phone": "+905224555214",
            "email": "ankara@cinemapink.com",
            "location": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.9237079881455!2d32.86856207720332!3d39.87594678837387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d345a4d27663c1%3A0x4c644578e8ab9819!2sCinema%20Pink%20365%20AVM!5e0!3m2!1str!2str!4v1707912389365!5m2!1str!2str",
            "imageUrl": "https://b6s54eznn8xq.merlincdn.net/CMS/124402ee5b6641e7b05a688cefd008ae.webp",
            "biletinialBranchId": 35,
            "seances": [
                {
                    "seanceDate": "2024-02-15T00:00:00",
                    "seances": [
                        {
                            "filmName": null,
                            "branchName": "Ankara Forum Cinemapink",
                            "saloonDetails": [
                                {
                                    "saloonName": "SALON 6",
                                    "filmVersion": "Türkçe",
                                    "seanceDetails": [
                                        {
                                            "seanceId": 13560930,
                                            "filmName": "Rafadan Tayfa 4: Hayrimatör",
                                            "seanceHour": "12:00",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560930"
                                        },
                                        {
                                            "seanceId": 13560931,
                                            "filmName": "Rafadan Tayfa 4: Hayrimatör",
                                            "seanceHour": "14:00",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560931"
                                        },
                                        {
                                            "seanceId": 13560932,
                                            "filmName": "Rafadan Tayfa 4: Hayrimatör",
                                            "seanceHour": "16:00",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560932"
                                        },
                                        {
                                            "seanceId": 13560933,
                                            "filmName": "Rafadan Tayfa 4: Hayrimatör",
                                            "seanceHour": "18:00",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560933"
                                        },
                                        {
                                            "seanceId": 13560934,
                                            "filmName": "Rafadan Tayfa 4: Hayrimatör",
                                            "seanceHour": "20:00",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560934"
                                        }
                                    ]
                                },
                                {
                                    "saloonName": "SALON 9",
                                    "filmVersion": "Türkçe",
                                    "seanceDetails": [
                                        {
                                            "seanceId": 13560962,
                                            "filmName": "Efsane",
                                            "seanceHour": "12:00",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560962"
                                        },
                                        {
                                            "seanceId": 13560963,
                                            "filmName": "Efsane",
                                            "seanceHour": "14:30",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560963"
                                        },
                                        {
                                            "seanceId": 13560964,
                                            "filmName": "Efsane",
                                            "seanceHour": "17:00",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560964"
                                        },
                                        {
                                            "seanceId": 13560965,
                                            "filmName": "Efsane",
                                            "seanceHour": "19:15",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560965"
                                        },
                                        {
                                            "seanceId": 13560966,
                                            "filmName": "Efsane",
                                            "seanceHour": "21:30",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560966"
                                        }
                                    ]
                                },
                                {
                                    "saloonName": "SALON 2",
                                    "filmVersion": "Türkçe Dublaj",
                                    "seanceDetails": [
                                        {
                                            "seanceId": 13560871,
                                            "filmName": "Orman Çetesi: Dünya Turu",
                                            "seanceHour": "12:30",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560871"
                                        },
                                        {
                                            "seanceId": 13560872,
                                            "filmName": "Orman Çetesi: Dünya Turu",
                                            "seanceHour": "15:30",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560872"
                                        },
                                        {
                                            "seanceId": 13560873,
                                            "filmName": "Orman Çetesi: Dünya Turu",
                                            "seanceHour": "18:00",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560873"
                                        },
                                        {
                                            "seanceId": 13560874,
                                            "filmName": "Orman Çetesi: Dünya Turu",
                                            "seanceHour": "20:30",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560874"
                                        }
                                    ]
                                },
                                {
                                    "saloonName": "SALON 1",
                                    "filmVersion": "Türkçe",
                                    "seanceDetails": [
                                        {
                                            "seanceId": 13560867,
                                            "filmName": "Demon: Azab-ül Kem",
                                            "seanceHour": "13:00",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560867"
                                        },
                                        {
                                            "seanceId": 13560868,
                                            "filmName": "Demon: Azab-ül Kem",
                                            "seanceHour": "15:30",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560868"
                                        },
                                        {
                                            "seanceId": 13560869,
                                            "filmName": "Demon: Azab-ül Kem",
                                            "seanceHour": "18:00",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560869"
                                        },
                                        {
                                            "seanceId": 13560870,
                                            "filmName": "Demon: Azab-ül Kem",
                                            "seanceHour": "20:30",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560870"
                                        }
                                    ]
                                },
                                {
                                    "saloonName": "SALON 5",
                                    "filmVersion": "Türkçe",
                                    "seanceDetails": [
                                        {
                                            "seanceId": 13560911,
                                            "filmName": "Kardeş Takımı",
                                            "seanceHour": "13:15",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560911"
                                        },
                                        {
                                            "seanceId": 13560912,
                                            "filmName": "Kardeş Takımı",
                                            "seanceHour": "15:15",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560912"
                                        },
                                        {
                                            "seanceId": 13560914,
                                            "filmName": "Kolpaçino 4 4'lük",
                                            "seanceHour": "17:15",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560914"
                                        },
                                        {
                                            "seanceId": 13560915,
                                            "filmName": "Kolpaçino 4 4'lük",
                                            "seanceHour": "19:30",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560915"
                                        },
                                        {
                                            "seanceId": 13560916,
                                            "filmName": "Kolpaçino 4 4'lük",
                                            "seanceHour": "22:00",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560916"
                                        }
                                    ]
                                },
                                {
                                    "saloonName": "SALON 4",
                                    "filmVersion": "Türkçe",
                                    "seanceDetails": [
                                        {
                                            "seanceId": 13560903,
                                            "filmName": "Mihrez 3: Cin Bebek",
                                            "seanceHour": "13:30",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560903"
                                        },
                                        {
                                            "seanceId": 13560896,
                                            "filmName": "Hannas 2",
                                            "seanceHour": "15:30",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560896"
                                        },
                                        {
                                            "seanceId": 13560897,
                                            "filmName": "Hannas 2",
                                            "seanceHour": "17:30",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560897"
                                        },
                                        {
                                            "seanceId": 13560904,
                                            "filmName": "Mihrez 3: Cin Bebek",
                                            "seanceHour": "19:30",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560904"
                                        },
                                        {
                                            "seanceId": 13560905,
                                            "filmName": "Mihrez 3: Cin Bebek",
                                            "seanceHour": "21:30",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560905"
                                        }
                                    ]
                                },
                                {
                                    "saloonName": "SALON 8",
                                    "filmVersion": "Türkçe",
                                    "seanceDetails": [
                                        {
                                            "seanceId": 13560958,
                                            "filmName": "Türkler Çıldırmış Olmalı 2: Mavi Vatan",
                                            "seanceHour": "13:45",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560958"
                                        },
                                        {
                                            "seanceId": 13560959,
                                            "filmName": "Türkler Çıldırmış Olmalı 2: Mavi Vatan",
                                            "seanceHour": "16:15",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560959"
                                        },
                                        {
                                            "seanceId": 13560960,
                                            "filmName": "Türkler Çıldırmış Olmalı 2: Mavi Vatan",
                                            "seanceHour": "18:45",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560960"
                                        },
                                        {
                                            "seanceId": 13560961,
                                            "filmName": "Türkler Çıldırmış Olmalı 2: Mavi Vatan",
                                            "seanceHour": "21:15",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560961"
                                        }
                                    ]
                                },
                                {
                                    "saloonName": "SALON 3",
                                    "filmVersion": "Türkçe",
                                    "seanceDetails": [
                                        {
                                            "seanceId": 13560888,
                                            "filmName": "İyi Bir Aile Değiliz",
                                            "seanceHour": "14:00",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560888"
                                        },
                                        {
                                            "seanceId": 13560889,
                                            "filmName": "İyi Bir Aile Değiliz",
                                            "seanceHour": "16:30",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560889"
                                        },
                                        {
                                            "seanceId": 13560890,
                                            "filmName": "İyi Bir Aile Değiliz",
                                            "seanceHour": "19:00",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560890"
                                        },
                                        {
                                            "seanceId": 13560891,
                                            "filmName": "İyi Bir Aile Değiliz",
                                            "seanceHour": "21:30",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560891"
                                        }
                                    ]
                                },
                                {
                                    "saloonName": "SALON 7",
                                    "filmVersion": "Türkçe",
                                    "seanceDetails": [
                                        {
                                            "seanceId": 13560944,
                                            "filmName": "Lohusa",
                                            "seanceHour": "14:15",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560944"
                                        },
                                        {
                                            "seanceId": 13560945,
                                            "filmName": "Lohusa",
                                            "seanceHour": "16:45",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560945"
                                        },
                                        {
                                            "seanceId": 13560946,
                                            "filmName": "Lohusa",
                                            "seanceHour": "19:15",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560946"
                                        },
                                        {
                                            "seanceId": 13560947,
                                            "filmName": "Lohusa",
                                            "seanceHour": "21:45",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13560947"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "seanceDate": "2024-02-16T00:00:00",
                    "seances": [
                        {
                            "filmName": null,
                            "branchName": "Ankara Forum Cinemapink",
                            "saloonDetails": [
                                {
                                    "saloonName": "SALON 8",
                                    "filmVersion": "Türkçe",
                                    "seanceDetails": [
                                        {
                                            "seanceId": 13531511,
                                            "filmName": "Zaferin Rengi",
                                            "seanceHour": "12:00",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13531511"
                                        },
                                        {
                                            "seanceId": 13531512,
                                            "filmName": "Zaferin Rengi",
                                            "seanceHour": "15:00",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13531512"
                                        },
                                        {
                                            "seanceId": 13531513,
                                            "filmName": "Zaferin Rengi",
                                            "seanceHour": "18:00",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13531513"
                                        },
                                        {
                                            "seanceId": 13531514,
                                            "filmName": "Zaferin Rengi",
                                            "seanceHour": "21:00",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13531514"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "seanceDate": "2024-02-17T00:00:00",
                    "seances": [
                        {
                            "filmName": null,
                            "branchName": "Ankara Forum Cinemapink",
                            "saloonDetails": [
                                {
                                    "saloonName": "SALON 8",
                                    "filmVersion": "Türkçe",
                                    "seanceDetails": [
                                        {
                                            "seanceId": 13531515,
                                            "filmName": "Zaferin Rengi",
                                            "seanceHour": "12:00",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13531515"
                                        },
                                        {
                                            "seanceId": 13531516,
                                            "filmName": "Zaferin Rengi",
                                            "seanceHour": "15:00",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13531516"
                                        },
                                        {
                                            "seanceId": 13531517,
                                            "filmName": "Zaferin Rengi",
                                            "seanceHour": "18:00",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13531517"
                                        },
                                        {
                                            "seanceId": 13531518,
                                            "filmName": "Zaferin Rengi",
                                            "seanceHour": "21:00",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13531518"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "seanceDate": "2024-02-18T00:00:00",
                    "seances": [
                        {
                            "filmName": null,
                            "branchName": "Ankara Forum Cinemapink",
                            "saloonDetails": [
                                {
                                    "saloonName": "SALON 8",
                                    "filmVersion": "Türkçe",
                                    "seanceDetails": [
                                        {
                                            "seanceId": 13531519,
                                            "filmName": "Zaferin Rengi",
                                            "seanceHour": "12:00",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13531519"
                                        },
                                        {
                                            "seanceId": 13531520,
                                            "filmName": "Zaferin Rengi",
                                            "seanceHour": "15:00",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13531520"
                                        },
                                        {
                                            "seanceId": 13531521,
                                            "filmName": "Zaferin Rengi",
                                            "seanceHour": "18:00",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13531521"
                                        },
                                        {
                                            "seanceId": 13531522,
                                            "filmName": "Zaferin Rengi",
                                            "seanceHour": "21:00",
                                            "url": "https://biletinial.com/tr-tr/sinema/koltuk_secimi/13531522"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]



    const [currrentDay, setCurrentDay] = useState(data[0].seances)
    const [bindex, setbindex] = useState(0)
    // const currentDaySeances = data.filter(seance => seance.seanceDate === currrentDay);
    const changeDay = (param, index) => {
        setCurrentDay(param)
        setbindex(index)
    };
    // console.log(currrentDay[0].seances[0], 'currrentDay')
    // console.log(data[0].seances,'sena')






    return (

        <section className='w-full flex flex-col mt-32 sm:mt-20'>
            <Title title={title} subtitle={subtitle} />
            <div className='w-full flex shadow-card rounded-lg mt-5 mb-10 border border-gray-200 px-10 relative sm:mb-5 sm:mt-0'>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={'auto'}
                    freeMode
                    className='w-full'
                >
                    {
                        data[0].seances.map((item, index) => {
                            return (
                                <SwiperSlide onClick={() => changeDay(item.seanceDate, index)} key={index} className={`sm:min-w-48 max-w-72 relative`}>
                                    <div className='flex flex-col items-center justify-center py-6 border-r border-gray-100 cursor-pointer relative sm:py-2'>
                                        {
                                            index === bindex && <div className={`w-full h-1 bg-venus-brown absolute left-0 bottom-0 `} />
                                        }
                                        <SeanceDate time={item.seanceDate} />
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <button className='absolute h-full w-10 flex items-center justify-center right-0 top-0'><ChevronRightIcon className='w-5 h-5' /></button>
                <button className='absolute h-full w-10 flex items-center justify-center left-0 top-0 border-r border-gray-100'><ChevronLeftIcon className='w-5 h-5' /></button>
            </div>
            <div className='w-full flex flex-col gap-10 sm:gap-5'>
                {
                    currrentDay[0].seances.saloonDetails.map((item, index) => (
                        <div key={index} className='w-full p-10 rounded-xl border-gray-200 border shadow-card sm:p-5'>
                            <div className='w-full flex flex-col'>
                                <h3 className='font-bold text-3xl sm:text-xl'>{item.branchName}</h3>
                                <span className='text-xs opacity-60 mb-10'>{`${item.branchName} ${seancess}`}</span>
                                <div className='w-full flex flex-col'>
                                    {
                                        item.saloonDetails.map((subitem, index) => {
                                            const isLastItem = index === item.saloonDetails.length - 1;
                                            return (
                                                <div key={index} className={`w-full flex items-center ${isLastItem ? '' : 'border-b  mb-5 pb-5 border-gray-200'} sm:flex-col sm:items-start`}>
                                                    <div className='flex flex-col min-w-60 sm:mb-3'>
                                                        <strong className='text-lg'>{subitem.saloonName}</strong>
                                                        <span className='text-sm opacity-70 sm:text-xs'>{subitem.filmVersion}</span>
                                                    </div>
                                                    <div className='flex gap-3 sm:flex-wrap sm:gap-2'>
                                                        {
                                                            subitem.seanceDetails.map((subseance, index) => (
                                                                <Link href={subseance.url} key={index} title={`${item.branchName} ${subseance.seanceHour} ${seancess}`} className='seance'>{subseance.seanceHour}</Link>

                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
