import { BackButton } from '@/components/backbutton'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Problem } from '@/components/problem'
import { Layout } from '@/components/layout'
import Link from 'next/link.js'

export default function contact() {
    return (
        <>
            <Breadcrumbs />
            <section className='h-screen bg-light-primary-background
            flex flex-col
            dark:bg-dark-primary-background'>
                <div id='top' className=''>
                    <BackButton/>
                </div>
                <div className='flex flex-col justify-center align-center m-auto' id='projects'>
                    <Link href="mailto:devynwlowry@gmail.com" className='font-montrealbold underline text-light-primary-text dark:text-dark-primary-text'>CLICK ME.</Link>
                </div>
            </section>
            <Problem/>
        </>
    )
}