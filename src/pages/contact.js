import { BackButton } from '@/components/backbutton'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Problem } from '@/components/problem'
import { Layout } from '@/components/layout'
import Link from 'next/link.js'

export default function contact() {
    return (
        <>
            <Breadcrumbs />
            <BackButton/>
            <section className='h-screen bg-light-primary-background
            flex flex-col
            dark:bg-dark-primary-background'>
                <div className='flex flex-col gap-8 justify-center align-center m-auto' id='projects'>
                    <Link href="mailto:devyn@devynlowry.com" className='font-montrealbold underline text-light-primary-text dark:text-dark-primary-text text-center'>CLICK ME.</Link>
                    <div className='flex flex-row gap-4'>
                        <a target="_blank" href="https://www.linkedin.com/in/devyn-lowry-489a3810a/" className='font-montrealbold underline uppercase text-light-primary-text dark:text-dark-primary-text'>linkedin.</a>
                        <a target="_blank" href="https://twitter.com/devynwlowry" className='font-montrealbold underline uppercase text-light-primary-text dark:text-dark-primary-text'>twitter.</a>
                        <a target="_blank" href="https://medium.com/@devynwlowry" className='font-montrealbold underline uppercase text-light-primary-text dark:text-dark-primary-text'>medium.</a>
                    </div>
                </div>
            </section>
            <Problem/>
        </>
    )
}