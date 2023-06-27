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
            <BackButton/>
            <section className='h-screen bg-light-primary-background
            flex flex-col
            dark:bg-dark-primary-background'>
                <div className='flex flex-col gap-y-8
                iphonese:m-6 iphone6:m-6 iphoneplus:m-6
                iphonese:mt-48 iphone6:mt-32 iphoneplus:mt-32 iphonexrmax:mt-40 ipad:mt-40 ipadpro12:mt-52' id='projects'>
                    <h1 className='font-machinainkultra uppercase text-light-primary-text 
                    dark:text-dark-primary-text 
                    iphonese:text-3xl iphone6:text-2xl iphoneplus:text-3xl iphonex:text-2xl iphonexr:text-3xl iphonexrmax:text-3xl ipad:text-5xl ipadpro:text-4xl ipadpro12:text-5xl
                    '>services</h1>
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