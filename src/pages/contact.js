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
            dark:bg-dark-primary-background'>
                <div className='flex flex-col justify-center align-start ml-6
                iphone6:pt-1 ipadpro12:pt-1.5 iphone6:w-3/4 ipadpro12:w-96'>
                    <BackButton/>
                </div>
                <div className='flex flex-col justify-center align-center m-auto' id='projects'>
                    <a href="mailto:devynwlowry@gmail.com" className='font-montrealbold underline text-light-primary-text dark:text-dark-primary-text'>CLICK ME.</a>
                </div>
            </section>
            <Problem/>
        </>
    )
}