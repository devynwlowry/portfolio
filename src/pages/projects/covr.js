import devynlowry from '../../../public/images/Logos/devynlowry.svg'
import covr_gif from '../../../public/images/covr_gif.gif'
import covr_screens from '../../../public/images/covr_screens.gif'
import sketch_gif from '../../../public/images/sketch_gif.gif'
import covr_logo from '../../../public/images/Logos/covr.svg'
import covr_font_dark from '../../../public/images/covr_font_dark.svg'
import covr_font_light from '../../../public/images/covr_font_light.svg'
import covr_onboarding_1 from '../../../public/images/productshots/covr-screens/Flats/Onboarding/Onboarding/Sign-Up: Email/01_welcome.png'
import covr_onboarding_2 from '../../../public/images/productshots/covr-screens/Flats/Onboarding/Onboarding/Sign-Up: Email/02_introducing_covr.png'
import covr_onboarding_3 from '../../../public/images/productshots/covr-screens/Flats/Onboarding/Onboarding/Sign-Up: Email/03_introducing_covr_2.png'
import covr_onboarding_4 from '../../../public/images/productshots/covr-screens/Flats/Onboarding/Onboarding/Sign-Up: Email/04_account_creation.png'
import covr_onboarding_5 from '../../../public/images/productshots/covr-screens/Flats/Onboarding/Onboarding/Sign-Up: Email/05_location.png'
import covr_onboarding_6 from '../../../public/images/productshots/covr-screens/Flats/Onboarding/Onboarding/Sign-Up: Email/06_field.png'
import covr_onboarding_7 from '../../../public/images/productshots/covr-screens/Flats/Onboarding/Onboarding/Sign-Up: Email/07_experience.png'
import covr_onboarding_8 from '../../../public/images/productshots/covr-screens/Flats/Onboarding/Onboarding/Sign-Up: Email/08_add_more.png'
import covr_onboarding_9 from '../../../public/images/productshots/covr-screens/Flats/Onboarding/Onboarding/Sign-Up: Email/09_pfp.png'
import covr_onboarding_10 from '../../../public/images/productshots/covr-screens/Flats/Onboarding/Onboarding/Sign-Up: Email/10_congrats.png'

import { BackButton } from "@/components/backbutton";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ScrollUpButton } from '@/components/scrollupbutton'
import Image from 'next/image'
import Link from 'next/link'

export default function covr() {

    return (
        <>
        
        <BackButton/>
        <div className='h-[100vh] bg-light-primary-background
        dark:bg-dark-primary-background
            flex flex-col'>
                <div id='top'>
                    <Breadcrumbs/>
                </div>
                <div className='self-center mt-16' id='complex-networks'>
                    <h1 className='text-center font-machinainkultra text-light-primary-text uppercase
                    iphone6:text-2xl iphoneplus:text-3xl iphonex:text-2xl iphonexr:text-3xl iphonexrmax:text-3xl ipad:text-5xl ipadpro:text-5xl
                    dark:text-dark-primary-text
                    '>covr</h1>
                    <Image 
                        src={covr_gif}
                        height={600}
                        width={800}
                        alt='gif of several screens from covr app.'
                        className='p-4'
                    />
                </div>
                <div className='bg-covr-primary-blue' id='background'>
                    <h3 className='font-montrealbold text-dark-primary-text uppercase
                    ml-6 mt-6
                    iphone6:text-2xl iphoneplus:text-3xl iphonex:text-2xl iphonexr:text-3xl iphonexrmax:text-3xl ipad:text-5xl ipadpro:text-5xl
                    '>background</h3>
                    <p className='font-montrealmedium text-dark-primary-text
                    ml-6 mt-4 mr-6
                    ipad:w-2/3
                    iphone6:text-md iphoneplus:text-md iphonex:text-md iphonexr:text-lg iphonexrmax:text-lg ipad:text-xl ipadpro:text-2xl
                    '>the frustration of finding a job is hard enough. companies are competing for job postings across dozens of job boards, but it seems not one of those companies are accountable for their own hiring process leaving the applicant left in the dust.
                    unanswered applications, automatic rejections, and interview processees that seem to go on forever.
                    <br/>
                    <br/>
                    enter covr. the first job board that puts the needs of the applicant above all else.
                    <br/>
                    </p>
                    <div className='flex justify-center
                    iphone6:flex-col iphoneplus:flex-col iphonex:flex-col iphonexr:flex-col iphonexrmax:flex-col ipad:flex-row ipadpro:flex-row
                    iphone6:p-6 ipad:p-10 iphone6:gap-8
                    '>
                        <div>
                            <Image
                                src={covr_logo}
                                height={256}
                                width={256}
                                alt='row of all brand logos that complex owns, from left to right: sole collector, first we feast, pigeons and planes, and complex con'
                            />
                        </div>
                    </div>
                </div>
                <div className='bg-light-primary-background dark:bg-dark-primary-background' id='tools-used'>
                    <h3 className='font-montrealbold text-light-primary-text uppercase
                    ml-6 mt-6
                    iphone6:text-2xl iphoneplus:text-3xl iphonex:text-2xl iphonexr:text-3xl iphonexrmax:text-3xl ipad:text-5xl ipadpro:text-5xl
                    dark:text-dark-primary-text
                    '>tools used</h3>
                    <p className='font-montrealmedium text-light-primary-text
                    ml-6 mt-4 mr-6
                    iphone6:text-md iphoneplus:text-md iphonex:text-md iphonexr:text-lg iphonexrmax:text-lg ipad:text-xl ipadpro:text-2xl
                    dark:text-dark-primary-text
                    '>along with all of my other projects, i designed this app in <span className='font-montrealbold'>sketch.</span></p>
                    <div className='flex justify-center align-center
                    iphone6:flex-col iphoneplus:flex-col iphonex:flex-col iphonexr:flex-col iphonexrmax:flex-col ipad:flex-row ipadpro:flex-row
                    iphone6:p-10 iphone6:gap-8
                    '>
                        <div>
                            <Image
                                src={sketch_gif}
                                height={600}
                                width={800}
                                alt='sketch app icon'
                            />
                        </div>
                    </div>
                </div>
                <div className='bg-covr-primary-blue' id='background'>
                    <h3 className='font-montrealbold text-dark-primary-text uppercase
                    ml-6 mt-6
                    iphone6:text-2xl iphoneplus:text-3xl iphonex:text-2xl iphonexr:text-3xl iphonexrmax:text-3xl ipad:text-5xl ipadpro:text-5xl
                    '>typography</h3>
                    <p className='font-montrealmedium text-dark-primary-text
                    ml-6 mt-4 mr-6
                    iphone6:text-md iphoneplus:text-md iphonex:text-md iphonexr:text-lg iphonexrmax:text-lg ipad:text-xl ipadpro:text-2xl
                    ipad:w-2/3
                    '>i try to limit font usage to one while utilizing different weights across the interface. covr uses <span className='font-montrealbold'>PP Neue Montreal</span> in the Medium and <span className='font-montrealbold'>Bold</span> font weights.</p>
                    <div className='flex place-content-center
                    iphone6:flex-col iphoneplus:flex-col iphonex:flex-col iphonexr:flex-col iphonexrmax:flex-col ipad:flex-row ipadpro:flex-row
                    iphone6:p-10 iphone6:gap-8
                    '>
                        <div>
                            <Image
                                src={covr_font_light}
                                alt='font used in complex app, light background'
                            />
                        </div>
                        <div>
                            <Image
                                src={covr_font_dark}
                                alt='font used in complex app, light background'
                            />
                        </div>
                    </div>
                </div>
                 <div className='bg-light-primary-background dark:bg-dark-primary-background' id='tools-used'>
                    <h3 className='font-montrealbold text-light-primary-text uppercase
                    ml-6 mt-6
                    iphone6:text-2xl iphoneplus:text-3xl iphonex:text-2xl iphonexr:text-3xl iphonexrmax:text-3xl ipad:text-5xl ipadpro:text-5xl
                    dark:text-dark-primary-text
                    '>colors</h3>
                    <p className='font-montrealmedium text-light-primary-text
                    ml-6 mt-4 mr-6
                    iphone6:text-md iphoneplus:text-md iphonex:text-md iphonexr:text-lg iphonexrmax:text-lg ipad:text-xl ipadpro:text-2xl
                    ipad:w-2/3
                    dark:text-dark-primary-text
                    '>the goal for this app is to make the job application process as straightforward as process, so the colors had to be just as straightforward. i stuck with industry colors, only tweaking them slightly.</p>
                    <div className='flex justify-center align-center
                    iphone6:flex-col iphoneplus:flex-col iphonex:flex-col iphonexr:flex-col iphonexrmax:flex-col ipad:flex-row ipadpro:flex-row
                    iphone6:p-10 iphone6:gap-8
                    '>
                        <h2 className='font-montrealbold text-xl'>Light Mode</h2>
                        <div className="flex flex-wrap gap-4">
                            <div>
                                <h5 className="h-24 w-24 p-2 bg-covr-light-primary-bg border-4 border-light-accent-color font-montrealbold text-light-primary-text ">#F5F5F5</h5>
                                <h5 className='font-montrealmedium w-24'>primary-background</h5>
                            </div>
                            <div>
                                <h5 className="h-24 w-24 p-2 bg-covr-light-primary-text font-montrealbold text-white ">#333333</h5>
                                <h5 className='font-montrealmedium w-24'>primary-text</h5>
                            </div>

                            <div>
                                <h5 className="h-24 w-24 p-2 bg-covr-light-accent-color font-montrealbold text-white ">#0000FF</h5>
                                <h5 className='font-montrealmedium w-24'>accent-color</h5>
                            </div>
                            <div>
                                <h5 className="h-24 w-24 p-2 bg-covr-light-secondary-text font-montrealbold text-light-primary-text ">#B7B7B7</h5>
                                <h5 className='font-montrealmedium w-24'>secondary-text</h5>
                            </div>    
                        </div>
                        <h2 className='font-montrealbold text-xl'>Dark Mode</h2>
                        <div className="flex flex-wrap gap-4">
                            <div>
                                <h5 className="h-24 w-24 p-2 bg-covr-dark-primary-bg font-montrealbold text-dark-primary-text ">#333333</h5>
                                <h5 className='font-montrealmedium w-24'>primary-background</h5>
                            </div>
                            <div>
                                <h5 className="h-24 w-24 p-2 bg-covr-dark-primary-text border-4 border-light-accent-color font-montrealbold text-light-primary-text ">#F5F5F5</h5>
                                <h5 className='font-montrealmedium w-24'>primary-text</h5>
                            </div>

                            <div>
                                <h5 className="h-24 w-24 p-2 bg-covr-light-accent-color font-montrealbold text-white ">#0000FF</h5>
                                <h5 className='font-montrealmedium w-24'>accent-color</h5>
                            </div>
                            <div>
                                <h5 className="h-24 w-24 p-2 bg-covr-dark-secondary-text font-montrealbold text-light-primary-text ">#B7B7B7</h5>
                                <h5 className='font-montrealmedium w-24'>secondary-text</h5>
                            </div>
                        </div>
                        <h2 className='font-montrealbold text-xl'>Brand Colors</h2>
                        <div className="flex flex-row gap-4">
                            <div>
                                <h5 className="h-24 w-24 p-2 bg-covr-primary-blue font-montrealbold text-dark-primary-text ">#0080FF</h5>
                                <h5 className='font-montrealmedium w-24'>covr-blue</h5>
                            </div>
                            <div>
                                <h5 className="h-24 w-24 p-2 bg-covr-primary-green font-montrealbold text-light-primary-text ">#00FF80</h5>
                                <h5 className='font-montrealmedium w-24'>covr-green</h5>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='bg-covr-primary-blue' id='background'>
                    <h3 className='font-montrealbold text-dark-primary-text uppercase
                    ml-6 mt-6
                    iphone6:text-2xl iphoneplus:text-3xl iphonex:text-2xl iphonexr:text-3xl iphonexrmax:text-3xl ipad:text-5xl ipadpro:text-5xl
                    '>screens</h3>
                    <p className='font-montrealmedium text-dark-primary-text
                    ml-6 mt-4 mr-6
                    iphone6:text-md iphoneplus:text-md iphonex:text-md iphonexr:text-lg iphonexrmax:text-lg ipad:text-xl ipadpro:text-2xl
                    ipad:w-2/3
                    '>covr is proving to be a unique app to design. as this is a work in progress there are changes that are being made constantly.</p>
                    <div className='flex place-content-around
                    iphone6:flex-col iphoneplus:flex-col iphonex:flex-col iphonexr:flex-col iphonexrmax:flex-col ipad:flex-row ipadpro:flex-row
                    iphone6:p-10 iphone6:gap-8
                    '>
                        <div>
                            <Image
                                src={covr_screens}
                                height={600}
                                width={800}
                                alt='various screens of the covr mobile app'
                            />
                        </div>
                    </div>
                    <h3 className='font-montrealbold text-dark-primary-text uppercase
                    ml-6 mt-6
                    iphone6:text-lg iphoneplus:text-xl iphonex:text-lg iphonexr:text-xl iphonexrmax:text-xl ipad:text-3xl ipadpro:text-3xl
                    '>Onboarding</h3>
                    <h3 className='font-montrealbold text-dark-primary-text uppercase
                    ml-8 mt-6
                    iphone6:text-md iphoneplus:text-lg iphonex:text-md iphonexr:text-lg iphonexrmax:text-lg ipad:text-2xl ipadpro:text-2xl
                    '>Launch Screen</h3>
                    <p className='font-montrealmedium text-dark-primary-text
                    ml-8 mt-4 mr-6
                    iphone6:text-sm iphoneplus:text-sm iphonex:text-sm iphonexr:text-md iphonexrmax:text-md ipad:text-lg ipadpro:text-xl
                    ipad:w-2/3
                    '>these are the views that the user will go through before inputting the information for their profile</p>
                    <div className='flex place-content-center
                    iphone6:flex-col iphoneplus:flex-col iphonex:flex-col iphonexr:flex-col iphonexrmax:flex-col ipad:flex-row ipadpro:flex-row
                    iphone6:p-10 iphone6:gap-8
                    '>
                        <div className='self-center justify-self-center'>
                            <Image
                                src={covr_onboarding_1}
                                width={220}
                                height={428.6591}
                                alt='covr onboarding screen, before signup launch screen.'
                            />
                        </div>
                        <div className='self-center justify-self-center'>
                            <Image
                                src={covr_onboarding_2}
                                width={220}
                                height={428.6591}
                                alt='covr onboarding screen, before signup launch screen.'
                            />
                        </div>
                        <div className='self-center justify-self-center'>
                            <Image
                                src={covr_onboarding_3}
                                width={220}
                                height={428.6591}
                                alt='covr onboarding screen, before signup launch screen.'
                            />
                        </div>
                    </div>
                    <h3 className='font-montrealbold text-dark-primary-text uppercase
                    ml-8 mt-6
                    iphone6:text-md iphoneplus:text-lg iphonex:text-md iphonexr:text-lg iphonexrmax:text-lg ipad:text-2xl ipadpro:text-2xl
                    '>Onboarding: email signup method</h3>
                    <p className='font-montrealmedium text-dark-primary-text
                    ml-8 mt-4 mr-6
                    iphone6:text-sm iphoneplus:text-sm iphonex:text-sm iphonexr:text-md iphonexrmax:text-md ipad:text-lg ipadpro:text-xl
                    ipad:w-2/3
                    '>these screens are first level steps for inputting use profile information.</p>
                    <div className='flex place-content-center
                    iphone6:flex-col iphoneplus:flex-col iphonex:flex-col iphonexr:flex-col iphonexrmax:flex-col ipad:flex-row ipadpro:flex-row
                    iphone6:p-10 iphone6:gap-8
                    '>
                        <div className='self-center justify-self-center'>
                            <Image
                                src={covr_onboarding_4}
                                width={220}
                                height={428.6591}
                                alt='covr onboarding screen, before signup launch screen.'
                            />
                        </div>
                        <div className='self-center justify-self-center'>
                            <Image
                                src={covr_onboarding_5}
                                width={220}
                                height={428.6591}
                                alt='covr onboarding screen, before signup launch screen.'
                            />
                        </div>
                        <div className='self-center justify-self-center'>
                            <Image
                                src={covr_onboarding_6}
                                width={220}
                                height={428.6591}
                                alt='covr onboarding screen, before signup launch screen.'
                            />
                        </div>
                        <div className='self-center justify-self-center'>
                            <Image
                                src={covr_onboarding_7}
                                width={220}
                                height={428.6591}
                                alt='covr onboarding screen, before signup launch screen.'
                            />
                        </div>
                        <div className='self-center justify-self-center'>
                            <Image
                                src={covr_onboarding_8}
                                width={220}
                                height={428.6591}
                                alt='covr onboarding screen, before signup launch screen.'
                            />
                        </div>
                        <div className='self-center justify-self-center'>
                            <Image
                                src={covr_onboarding_9}
                                width={220}
                                height={428.6591}
                                alt='covr onboarding screen, before signup launch screen.'
                            />
                        </div>
                        <div className='self-center justify-self-center'>
                            <Image
                                src={covr_onboarding_10}
                                width={220}
                                height={428.6591}
                                alt='covr onboarding screen, before signup launch screen.'
                            />
                        </div>
                    </div>
                </div>
                {/* <div className='bg-light-primary-background' id='tools-used'>
                    <h3 className='font-montrealbold text-light-primary-text uppercase
                    ml-6 mt-6
                    iphone6:text-2xl iphoneplus:text-3xl iphonex:text-2xl iphonexr:text-3xl iphonexrmax:text-3xl ipad:text-5xl ipadpro:text-5xl
                    '>wrap it up</h3>
                    <p className='font-montrealmedium text-light-primary-text
                    ml-6 mt-4 mr-6
                    iphone6:text-md iphoneplus:text-md iphonex:text-md iphonexr:text-lg iphonexrmax:text-lg ipad:text-xl ipadpro:text-2xl
                    '>all in all designing an app for complex was an excellent exercise. this project turned out to be one im most proud of. i was given the opportunity to work across all of the different brands i love and add fresh perspective to an old project.
                    <br/>while this app did not launch (and may never) i learned a great deal working through this.
                    <br/>
                    <br/>
                    if you want to check out more of this project or chat about it, send me an <span className='font-montrealbold underline'><Link href='mailto:devyn@devynlowry.com'>email</Link></span>.

                    <br/>
                    <br/>
                    Catch you later,

                    </p>
                    <div className='flex justify-start align-start
                    iphone6:flex-col iphoneplus:flex-col iphonex:flex-col iphonexr:flex-col iphonexrmax:flex-col ipad:flex-row ipadpro:flex-row
                    iphone6:p-10 iphone6:gap-8
                    '>
                        <div>
                            <Image
                                src={devynlowry}
                                height={200}
                                width={400}
                                alt='devyn lowry'
                            />
                        </div>
                    </div>
                </div> */}
            <ScrollUpButton/>   
        </div>
        </>
    )
}