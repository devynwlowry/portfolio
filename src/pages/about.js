import Image from 'next/image.js'
import Link from 'next/link.js'
import { Breadcrumbs } from '@/components/breadcrumbs.js'
import { Problem } from '@/components/problem'
import { BackButton } from '@/components/backbutton'
import devynadult from '../../public/images/devyn/devynadult.jpeg'
import devynyoung from '../../public/images/devyn/devynyoung.jpeg'

export default function about() {

    return (
        <>
            <Breadcrumbs />
            <section className='h-screen bg-light-primary-background
            flex flex-col
            dark:bg-dark-primary-background
            iphone6:overflow-scroll'>
                <div className='flex flex-col justify-start align-start ml-6 
                iphone6:pt-1 iphone6:pb-4 ipadpro12:pt-1.5 ipadpro12:pb-16 iphone6:w-3/4 ipadpro12:w-96'>
                    <BackButton/>
                </div>
                <div className='grid justify-start align-start mx-auto pl-2 w-96'>
                <h1 className='font-machinainkultra uppercase text-light-primary-text dark:text-dark-primary-text iphone6:text-[4vh] ipadpro12:text-[2.5vh]'>bio</h1>
                    <p className='font-montrealmedium text-light-primary-text dark:text-dark-primary-text whitespace-wrap iphone6:text-[2.5vh] ipadpro12:text-[1.5vh]'> hi my name is devyn lowry. i'm a <span className='font-montrealbold'>product designer</span> from connecticut living in <span className='font-montrealbold'>new york city</span>.</p>
                    <Image
                        src={devynadult}
                        width={368}
                        height={100}
                        className='mt-4 mb-4'
                        alt='picture of me as an adult. embraced my inner godfather for this pic'
                    />
                    <p className='font-montrealmedium text-light-primary-text dark:text-dark-primary-text whitespace-wrap iphone6:text-[2.5vh] ipadpro12:text-[1.5vh]'>since i was a little kid i have wanted to work in design. it was a passion that came from playing video games and seeing interactions happen in the worlds i played in. </p>
                    <Image
                        src={devynyoung}
                        width={368}
                        height={100}
                        className='mt-4 mb-4'
                        alt='picture of me as a kid'
                    />
                    <p className='font-montrealmedium text-light-primary-text dark:text-dark-primary-text whitespace-wrap iphone6:text-[2.5vh] ipadpro12:text-[1.5vh]'>since then, i have been striving to push pixels <span className='font-montrealsemiitalic'>further</span>; ensuring that every action, design, color palette, font, comes together to create a meaningful experience for users.</p>
                </div>
            </section>
            <Problem/>
        </>
    )
}