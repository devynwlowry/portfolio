import complex_banner from '../../../public/images/complex_banner.svg'
import complex_font_light from '../../../public/images/complex_font_light.svg'
import complex_font_dark from '../../../public/images/complex_font_dark.svg'

import Image from "next/image";
import { BackButton } from "@/components/backbutton";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ImageSlider } from '@/components/imageslider';

export default function complex() {
    return (
        <>
        <Breadcrumbs/>
        <section className='h-[100vh] bg-light-primary-background
            flex flex-col
            dark:bg-dark-primary-background
            iphone6:overflow-scroll'>
                <div className='flex flex-col justify-start align-start ml-6
                iphone6:pt-1 ipadpro12:pt-1.5 iphone6:w-3/4 ipadpro12:w-96'>
                    <BackButton/>
                </div>
                <div className='grid justify-start align-start mx-auto pl-2 w-96' id='projects'>
                    <h1 className='font-machinainkultra uppercase text-light-primary-text w-48
                    iphone6:text-[4vh] ipadpro12:text-[2.5vh] iphone6:pt-10 ipadpro12:pt-auto'>Complex Networks</h1>
                    <Image
                        src={complex_banner}
                        alt='complex logo on black background'
                    />
                    <div className="flex flex-col gap-2 mr-4">
                        <h3 className="font-montrealbold text-light-primary-text dark:text-dark-primary-text uppercase iphone6:text-[2.5vh] ipadpro12:text-[1.5vh] ">Background</h3>
                        <p className="font-montrealmedium text-light-primary-text dark:text-dark-primary-text iphone6:text[2vh]">during my tenure at complex networks i took up the task of dusting off an initiative that the design team had shelved. </p>
                        <h3 className="font-montrealbold text-light-primary-text dark:text-dark-primary-text uppercase iphone6:text-[2.5vh] ipadpro12:text-[1.5vh] ">purpose</h3>
                        <p className="font-montrealmedium text-light-primary-text dark:text-dark-primary-text">to design a mobile app (iOS) that would bring all of the complex networks brands and associated content together.</p>
                        <h3 className="font-montrealbold text-light-primary-text dark:text-dark-primary-text uppercase iphone6:text-[2.5vh] ipadpro12:text-[1.5vh] ">tools used</h3>
                        <p className="font-montrealmedium text-light-primary-text dark:text-dark-primary-text iphone6:text[2vh]">sketch, adobe creative cloud</p>
                        <h3 className="font-montrealbold text-light-primary-text dark:text-dark-primary-text uppercase iphone6:text-[2.5vh] ipadpro12:text-[1.5vh] ">typography</h3>
                        <Image
                            src={complex_font_light}
                            alt='fonts used for complex app, shows neue haas unica'
                            className="dark:hidden"
                        />
                        <Image
                            src={complex_font_dark}
                            alt='fonts used for complex app, shows neue haas unica'
                            className="hidden dark:block"
                        />
                        <h3 className="font-montrealbold text-light-primary-text uppercase iphone6:text-[2.5vh] ipadpro12:text-[1.5vh] ">Colors</h3>
                        <div className="grid grid-rows-2 grid-cols-3 gap-y-8">
                            <h5 className="h-24 w-24 p-2 bg-[#161616] font-montrealbold text-white ">#161616</h5>
                            <h5 className="h-24 w-24 p-2 bg-[#1E5CF1] font-montrealbold text-white ">#1E5CF1</h5>
                            <h5 className="h-24 w-24 p-2 bg-[#FFD200] font-montrealbold text-white ">#FFD200</h5>
                            <h5 className="h-24 w-24 p-2 bg-[#007AFF] font-montrealbold text-white ">#007AFF</h5>
                            <h5 className="h-24 w-24 p-2 bg-[#FF0000] font-montrealbold text-white ">#FF0000</h5>
                            <h5 className="h-24 w-24 p-2 bg-[#FFFFFF] font-montrealbold text-black ">#FFFFFF</h5>
                            <h5 className="h-24 w-24 p-2 bg-[#000000] font-montrealbold text-white ">#000000</h5>
                        </div>
                        <h3 className="font-montrealbold text-light-primary-text uppercase iphone6:text-[2.5vh] ipadpro12:text-[1.5vh] ">Screens</h3>
                        {/* <ImageSlider/> */}
                    </div>
                </div>
            </section>
        </>
    )
}