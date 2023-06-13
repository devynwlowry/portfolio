import { BackButton } from '@/components/backbutton'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Problem } from '@/components/problem'
import { Accordion } from 'flowbite'
import { Layout } from '@/components/layout'
import Image from 'next/image.js'
import Link from 'next/link.js'
import { FAQ } from '@/components/faq'

export default function services() {
    return (
        <>
            <Breadcrumbs />
            <section className='h-screen bg-light-primary-background
            flex flex-col
            dark:bg-dark-primary-background
            iphone6:overflow-scroll'>
                <div className='flex flex-col justify-start align-start ml-6
                iphone6:pt-1 ipadpro12:pt-1.5 iphone6:w-3/4 ipadpro12:w-96'>
                    <BackButton/>
                </div>
                <div className='grid justify-center w-96 gap-8 pl-2 mx-auto' id='projects'>
                    <h1 className='font-machinainkultra uppercase text-light-primary-text 
                    dark:text-dark-primary-text 
                    iphone6:text-[4vh] ipadpro12:text-[2.5vh] iphone6:pt-7 ipadpro12:pt-auto'>services</h1>
                    <p className='font-montrealmedium text-light-primary-text whitespace-wrap iphone6:text-[2.5vh] ipadpro12:text-[1.5vh] dark:text-dark-primary-text'>i offer a wide variety of creative services. from branding to web design to ux research and accessibility audits.</p>
                    <p className='font-montrealmedium text-light-primary-text whitespace-wrap iphone6:text-[2.5vh] ipadpro12:text-[1.5vh] dark:text-dark-primary-text'>if you need a website or just want to <a href = "mailto:devynwlowry@gmail.com" className='underline font-montrealbold'>chat</a>, shoot me an email and i’ll get in touch.</p>
                    <h3 className='font-montrealbold text-light-primary-text iphone6:text-[3vh] ipadpro12:text-[2vh] dark:text-dark-primary-text'>FAQ</h3>
                    <FAQ/>
                </div>
            </section>
            <Problem/>
        </>
    )
}