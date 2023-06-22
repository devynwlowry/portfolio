import { BackButton } from '@/components/backbutton'
import { Layout } from '@/components/layout'
import Image from 'next/image.js'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Problem } from '@/components/problem'
import Link from 'next/link.js'
import { Complex } from '@/components/cards/complex'
import { Covr } from '@/components/cards/covr'
import { Themanor } from '@/components/cards/themanor'

export default function projects() {
    return (
        <>
           <Breadcrumbs />
            <section className='h-screen bg-light-primary-background
            flex flex-col
            dark:bg-dark-primary-background
            iphone6:overflow-scroll'>
                <div className='flex flex-col justify-start align-start ml-6
                iphone6:pt-1 ipadpro12:pt-3 iphone6:w-3/4 ipadpro12:w-96'>
                    <BackButton/>
                </div>
                <div className='grid justify-center gap-8
                iphone6:pt-7 iphone6:ml-6 iphone6:w-80 ipadpro12:m-auto ipadpro12:w-96
                ' id='projects'>
                    <h1 className='font-machinainkultra uppercase text-light-primary-text 
                    dark:text-dark-primary-text
                    iphone6:text-[4vh] ipadpro12:text-[2.5vh]'>projects</h1>
                    <Complex/>
                    <Covr/>
                    <Themanor/>
                </div>
            </section>
            <Problem/>
        </>
    )
}