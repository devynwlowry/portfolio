import { BackButton } from '@/components/backbutton'
import { Layout } from '@/components/layout'
import Image from 'next/image.js'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Problem } from '@/components/problem'
import Link from 'next/link.js'
import { Complex } from '@/components/cards/complex'
import { Covr } from '@/components/cards/covr'
// import { Themanor } from '@/components/cards/themanor'

export default function projects() {
    return (
        <>
           <Breadcrumbs />
            <section className='h-screen bg-light-primary-background
            flex flex-col
            dark:bg-dark-primary-background'>
                <div className='flex flex-col justify-start align-start ml-6
                iphone6:pt-1 ipadpro12:pt-3 iphone6:w-3/4 ipadpro12:w-96'>
                    <BackButton/>
                </div>
                <div className='grid justify-center align-center gap-4
                iphone6:pb-20 iphone6:ml-6 iphone6:w-80 iphoneplus:m-auto ipad:m-auto ipadpro12:m-auto ipadpro12:w-96 ipad:pb-48
                ' id='projects'>
                    <h1 className='font-machinainkultra uppercase text-light-primary-text 
                    dark:text-dark-primary-text
                    iphone6:text-[3vh] ipadpro12:text-[2.5vh]'>projects</h1>
                    <Complex/>
                    <Covr/>
                    {/* <Themanor/> */}
                </div>
            </section>
            <Problem/>
        </>
    )
}