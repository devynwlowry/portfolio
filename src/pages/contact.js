import { BackButton } from '@/components/backbutton'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Problem } from '@/components/problem'
import { Layout } from '@/components/layout'
import Image from 'next/image.js'
import Link from 'next/link.js'

export default function contact() {
    return (
        <>
            <Breadcrumbs />
            <section className='h-screen bg-light-primary-background
            flex flex-col
            dark:bg-dark-primary-background
            iphone6:overflow-scroll'>
                <div className='flex flex-col justify-center align-start ml-6
                iphone6:pt-1 ipadpro12:pt-1.5 iphone6:w-3/4 ipadpro12:w-96'>
                    <BackButton/>
                </div>
                <div className='grid iphone6:justify-start iphone6:ml-6 ipadpro12:justify-center ipadpro12:w-96 ipadpro12:pl-2 ipadpro12:mx-auto' id='projects'>
                    <h1 className='font-machinainkultra uppercase text-light-primary-text 
                    dark:text-dark-primary-text 
                    iphone6:text-[4vh] ipadpro12:text-[2.5vh] iphone6:pt-7 ipadpro12:pt-auto'>Contact</h1>
                    <h1 className='font-montrealbold'>CLICK ME.</h1>
                    <h1 className='font-montrealbold'>CLICK ME.</h1>
                    <h1 className='font-montrealbold'>CLICK ME.</h1>
                    <h1 className='font-montrealbold'>CLICK ME.</h1>
                    <a href="mailto:devynwlowry@gmail.com" className='font-montrealbold underline text-light-primary-text dark:text-dark-primary-text'>CLICK ME.</a>
                    <h1 className='font-montrealbold'>CLICK ME.</h1>
                    <h1 className='font-montrealbold'>CLICK ME.</h1>
                    <h1 className='font-montrealbold'>CLICK ME.</h1>
                    <h1 className='font-montrealbold'>CLICK ME.</h1>
                    <h1 className='font-montrealbold'>CLICK ME.</h1>

                </div>
            </section>
            <Problem/>
        </>
    )
}