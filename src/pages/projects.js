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
           <BackButton/>
            <section className='h-screen bg-light-primary-background overflow-scroll
            flex ipad:flex-row
            dark:bg-dark-primary-background'>
                <div id='cards' className='flex flex-col gap-y-8
                iphonese:m-6 iphone6:m-6 iphoneplus:m-6
                iphonese:mt-48 iphone6:mt-32 iphoneplus:mt-32 iphonexrmax:mt-40 ipad:mt-40 ipadpro12:mt-52'>
                    <h3 className='font-machinainkultra uppercase 
                    iphonese:text-3xl iphone6:text-2xl iphoneplus:text-3xl iphonex:text-2xl iphonexr:text-3xl iphonexrmax:text-3xl ipad:text-5xl ipadpro:text-5xl'>projects</h3>
                    <div className='flex gap-8
                    iphone6:gap-y-4
                    iphonese:flex-col iphone6:flex-col iphoneplus:flex-col iphonexrmax:flex-col ipad:flex-row ipadpro:flex-row ipadpro12:flex-row'>
                        <Complex/>
                        <Covr/>
                    </div>
                </div>
            </section>
            <Problem/>
        </>
    )
}