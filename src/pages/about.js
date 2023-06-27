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
            <BackButton/>
            <section className='bg-light-primary-background
            flex
            1440:h-screen
            ipad:flex-row 
            dark:bg-dark-primary-background'>
                <div className='flex flex-col w-96
                iphonese:m-6 iphone6:m-6 iphoneplus:m-6
                iphonese:mt-12 iphone6:mt-20 iphoneplus:mt-28 iphonexrmax:mt-36 ipad:mt-40 ipadpro:mt-32 ipadpro11:mt-36 ipadpro12:mt-44'>
                    <h1 className='font-machinainkultra uppercase text-light-primary-text 
                    dark:text-dark-primary-text
                    iphonese:text-3xl iphone6:text-3xl iphoneplus:text-4xl iphonexr:text-3xl iphonexrmax:text-3xl ipad:text-4xl ipadpro:text-4xl ipadpro12:text-5xl'>bio</h1>
                    <p className='font-montrealmedium text-light-primary-text dark:text-dark-primary-text whitespace-wrap
                    iphone6:text-sm iphoneplus:text-lg iphonexrmax:text-md ipad:text-lg ipadpro11:text-lg ipadpro12:text-xl'> hi my name is devyn lowry. i am a <span className='font-montrealbold'>product designer</span> from connecticut living in <span className='font-montrealbold'>new york city</span>.</p>
                    <Image
                        src={devynadult}
                        width={368}
                        height={100}
                        className='mt-4 mb-4'
                        alt='picture of me as an adult. embraced my inner godfather for this pic'
                    />
                    <p className='font-montrealmedium text-light-primary-text dark:text-dark-primary-text whitespace-wrap 
                    iphone6:text-sm iphoneplus:text-lg iphonexrmax:text-md ipad:text-lg ipadpro11:text-lg ipadpro12:text-xl'>since i was a little kid i have wanted to work in design. it was a passion that came from playing video games and seeing interactions happen in the worlds i played in. </p>
                    <Image
                        src={devynyoung}
                        width={368}
                        height={100}
                        className='mt-4 mb-4'
                        alt='picture of me as a kid'
                    />
                    <p className='font-montrealmedium text-light-primary-text dark:text-dark-primary-text whitespace-wrap 
                    iphone6:text-sm iphoneplus:text-lg iphonexrmax:text-md ipad:text-lg ipadpro11:text-lg ipadpro12:text-xl'>since then, i have been striving to push pixels <span className='font-montrealsemiitalic'>further</span>; ensuring that every action, design, color palette, font, comes together to create a meaningful experience for users.</p>
                </div>
            </section>
            <Problem/>
        </>
    )
}