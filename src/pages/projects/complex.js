import complex_banner from '../../../public/images/complex_banner.svg'
import complex_font_light from '../../../public/images/complex_font_light.svg'
import complex_font_dark from '../../../public/images/complex_font_dark.svg'
import complex_gif from '../../../public/images/complex_gif.gif'
import sketch_gif from '../../../public/images/sketch.gif'
import complex_logos from '../../../public/images/complex_logos.png'

import Image from "next/image";
import { BackButton } from "@/components/backbutton";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ImageSlider } from '@/components/imageslider';

export default function complex() {
    return (
        <>
        <Breadcrumbs/>
        <section className='h-screen bg-light-primary-background
            flex flex-col
            dark:bg-dark-primary-background
            iphone6:overflow-scroll'>
                <div className='flex flex-col justify-start align-start ml-6
                iphone6:pt-1 ipadpro12:pt-3 iphone6:w-3/4 ipadpro12:w-96'>
                    <BackButton/>
                </div>
                <div className='self-center' id='complex-networks'>
                    <h1 className='text-center font-machinainkultra text-light-primary-text uppercase
                    iphone6:text-2xl iphoneplus:text-3xl iphonex:text-2xl iphonexr:text-3xl iphonexrmax:text-3xl ipad:text-5xl ipadpro:text-5xl
                    dark:text-dark-primary-text
                    '>complex networks</h1>
                    <Image 
                        src={complex_gif}
                        height={600}
                        width={800}
                        alt='gif of several screens from complex networks app. From left to right, shop view, article view, launch screen view, sign in view, home view'
                    />
                </div>
                <div className='bg-dark-primary-background' id='background'>
                    <h3 className='font-montrealbold text-dark-primary-text uppercase
                    ml-6 mt-6
                    iphone6:text-2xl iphoneplus:text-3xl iphonex:text-2xl iphonexr:text-3xl iphonexrmax:text-3xl ipad:text-5xl ipadpro:text-5xl
                    '>background</h3>
                    <p className='font-montrealmedium text-dark-primary-text
                    ml-6 mt-4 mr-6
                    ipad:w-2/3
                    iphone6:text-md iphoneplus:text-md iphonex:text-md iphonexr:text-lg iphonexrmax:text-lg ipad:text-xl ipadpro:text-2xl
                    '>during my tenure at complex networks i took up the task of dusting off an initiative that the design team had shelved. the purpose of the project was to bring the complex family of brands and their content under one app for all users to enjoy.</p>
                    <div className='flex justify-center
                    iphone6:flex-col iphoneplus:flex-col iphonex:flex-col iphonexr:flex-col iphonexrmax:flex-col ipad:flex-row ipadpro:flex-row
                    iphone6:p-10 iphone6:gap-8
                    '>
                        <div>
                            <Image
                                src={complex_logos}
                            />
                        </div>
                    </div>
                </div>
                <div className='bg-light-primary-background' id='tools-used'>
                    <h3 className='font-montrealbold text-light-primary-text uppercase
                    ml-6 mt-6
                    iphone6:text-2xl iphoneplus:text-3xl iphonex:text-2xl iphonexr:text-3xl iphonexrmax:text-3xl ipad:text-5xl ipadpro:text-5xl
                    '>tools used</h3>
                    <p className='font-montrealmedium text-light-primary-text
                    ml-6 mt-4 mr-6
                    iphone6:text-md iphoneplus:text-md iphonex:text-md iphonexr:text-lg iphonexrmax:text-lg ipad:text-xl ipadpro:text-2xl
                    '>along with all of my other projects, i designed this app in <span className='font-montrealbold'>sketch.</span></p>
                    <div className='flex justify-center align-center
                    iphone6:flex-col iphoneplus:flex-col iphonex:flex-col iphonexr:flex-col iphonexrmax:flex-col ipad:flex-row ipadpro:flex-row
                    iphone6:p-10 iphone6:gap-8
                    '>
                        <div>
                            <Image
                                src={sketch_gif}
                                height={600}
                                width={800}
                                alt='sketch app icon'
                            />
                        </div>
                    </div>
                </div>
                <div className='bg-dark-primary-background' id='background'>
                    <h3 className='font-montrealbold text-dark-primary-text uppercase
                    ml-6 mt-6
                    iphone6:text-2xl iphoneplus:text-3xl iphonex:text-2xl iphonexr:text-3xl iphonexrmax:text-3xl ipad:text-5xl ipadpro:text-5xl
                    '>typography</h3>
                    <p className='font-montrealmedium text-dark-primary-text
                    ml-6 mt-4 mr-6
                    iphone6:text-md iphoneplus:text-md iphonex:text-md iphonexr:text-lg iphonexrmax:text-lg ipad:text-xl ipadpro:text-2xl
                    ipad:w-2/3
                    '>Neue Haas Unica is the backbone of this project being used for the entire project, luckily, it is also the font used for the complex logo which helped create a unified look and feel across the entire interface.</p>
                    <div className='flex place-content-around
                    iphone6:flex-col iphoneplus:flex-col iphonex:flex-col iphonexr:flex-col iphonexrmax:flex-col ipad:flex-row ipadpro:flex-row
                    iphone6:p-10 iphone6:gap-8
                    '>
                        <div>
                            <Image
                                src={complex_font_dark}
                            />
                        </div>
                        <div>
                            <Image
                                src={complex_font_light}
                            />
                        </div>
                    </div>
                </div>
        </section>
        </>
    )
}