import complex_font_light from '../../../public/images/complex_font_light.svg'
import complex_font_dark from '../../../public/images/complex_font_dark.svg'
import complex_gif from '../../../public/images/complex_gif.gif'
import sketch_gif from '../../../public/images/sketch.gif'
import complex_logos from '../../../public/images/complex_logos.png'
import complex_screens from '../../../public/images/complex_screens.gif'
import complex_home from '../../../public/images/productshots/complexscreens/Home/Home.png'
import complex_home_2 from '../../../public/images/productshots/complexscreens/Home/Home, Sidebar.png'
import complex_reading from '../../../public/images/productshots/complexscreens/Home/Reading.png'
import complex_reading_2 from '../../../public/images/productshots/complexscreens/Home/Reading cont.png'
import complex_all_shows from '../../../public/images/productshots/complexscreens/AllShows/All Shows.png'
import complex_all_shows_2 from '../../../public/images/productshots/complexscreens/AllShows/All Shows cont.png'
import complex_show_details from '../../../public/images/productshots/complexscreens/AllShows/Show Details.png'
import complex_episode from '../../../public/images/productshots/complexscreens/AllShows/Episode View.png'
import complex_episode_2 from '../../../public/images/productshots/complexscreens/AllShows/Episode View Cont.png'

import Image from "next/image";
import { BackButton } from "@/components/backbutton";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ScrollUpButton } from '@/components/scrollupbutton'


export default function complex() {
    return (
        <>
        <Breadcrumbs/>
        <div className='h-[100vh] bg-light-primary-background
            flex flex-col
            dark:bg-dark-primary-background
            iphone6:overflow-scroll'>
                <div id='top' className='flex flex-col justify-start align-start ml-6
                iphone6:pt-1 ipadpro12:pt-3 iphone6:w-3/4 ipadpro12:w-96'>
                    <BackButton/>
                </div>
                <div className='self-center' id='complex-networks'>
                    <h1 className='text-center font-machinainkultra text-light-primary-text uppercase
                    iphone6:text-2xl iphoneplus:text-3xl iphonex:text-2xl iphonexr:text-3xl iphonexrmax:text-3xl ipad:text-5xl ipadpro:text-5xl
                    dark:text-dark-primary-text
                    '>complex networks</h1>
                    <Image 
                        src={complex_gif}
                        height={600}
                        width={800}
                        alt='gif of several screens from complex networks app. From left to right, shop view, article view, launch screen view, sign in view, home view'
                        className='p-4'
                    />
                </div>
                <div className='bg-dark-primary-background' id='background'>
                    <h3 className='font-montrealbold text-dark-primary-text uppercase
                    ml-6 mt-6
                    iphone6:text-2xl iphoneplus:text-3xl iphonex:text-2xl iphonexr:text-3xl iphonexrmax:text-3xl ipad:text-5xl ipadpro:text-5xl
                    '>background</h3>
                    <p className='font-montrealmedium text-dark-primary-text
                    ml-6 mt-4 mr-6
                    ipad:w-2/3
                    iphone6:text-md iphoneplus:text-md iphonex:text-md iphonexr:text-lg iphonexrmax:text-lg ipad:text-xl ipadpro:text-2xl
                    '>during my tenure at complex networks i took up the task of dusting off an initiative that the design team had shelved. the purpose of the project was to bring the complex family of brands and their content under one app for all users to enjoy.</p>
                    <div className='flex justify-center
                    iphone6:flex-col iphoneplus:flex-col iphonex:flex-col iphonexr:flex-col iphonexrmax:flex-col ipad:flex-row ipadpro:flex-row
                    iphone6:p-10 iphone6:gap-8
                    '>
                        <div>
                            <Image
                                src={complex_logos}
                            />
                        </div>
                    </div>
                </div>
                <div className='bg-light-primary-background' id='tools-used'>
                    <h3 className='font-montrealbold text-light-primary-text uppercase
                    ml-6 mt-6
                    iphone6:text-2xl iphoneplus:text-3xl iphonex:text-2xl iphonexr:text-3xl iphonexrmax:text-3xl ipad:text-5xl ipadpro:text-5xl
                    '>tools used</h3>
                    <p className='font-montrealmedium text-light-primary-text
                    ml-6 mt-4 mr-6
                    iphone6:text-md iphoneplus:text-md iphonex:text-md iphonexr:text-lg iphonexrmax:text-lg ipad:text-xl ipadpro:text-2xl
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
                <div className='bg-dark-primary-background' id='background'>
                    <h3 className='font-montrealbold text-dark-primary-text uppercase
                    ml-6 mt-6
                    iphone6:text-2xl iphoneplus:text-3xl iphonex:text-2xl iphonexr:text-3xl iphonexrmax:text-3xl ipad:text-5xl ipadpro:text-5xl
                    '>typography</h3>
                    <p className='font-montrealmedium text-dark-primary-text
                    ml-6 mt-4 mr-6
                    iphone6:text-md iphoneplus:text-md iphonex:text-md iphonexr:text-lg iphonexrmax:text-lg ipad:text-xl ipadpro:text-2xl
                    ipad:w-2/3
                    '>Neue Haas Unica is the backbone of this project being used for the entire project, luckily, it is also the font used for the complex logo which helped create a unified look and feel across the entire interface.</p>
                    <div className='flex place-content-around
                    iphone6:flex-col iphoneplus:flex-col iphonex:flex-col iphonexr:flex-col iphonexrmax:flex-col ipad:flex-row ipadpro:flex-row
                    iphone6:p-10 iphone6:gap-8
                    '>
                        <div>
                            <Image
                                src={complex_font_dark}
                            />
                        </div>
                        <div>
                            <Image
                                src={complex_font_light}
                            />
                        </div>
                    </div>
                </div>
                <div className='bg-light-primary-background' id='tools-used'>
                    <h3 className='font-montrealbold text-light-primary-text uppercase
                    ml-6 mt-6
                    iphone6:text-2xl iphoneplus:text-3xl iphonex:text-2xl iphonexr:text-3xl iphonexrmax:text-3xl ipad:text-5xl ipadpro:text-5xl
                    '>colors</h3>
                    <p className='font-montrealmedium text-light-primary-text
                    ml-6 mt-4 mr-6
                    iphone6:text-md iphoneplus:text-md iphonex:text-md iphonexr:text-lg iphonexrmax:text-lg ipad:text-xl ipadpro:text-2xl
                    ipad:w-2/3
                    '>the colors for this project were very straightforward, taking the primary colors from the branding of each of the complex brands. also including, black and white for text, red for notifications, and a royal blue for links.</p>
                    <div className='flex justify-center align-center
                    iphone6:flex-col iphoneplus:flex-col iphonex:flex-col iphonexr:flex-col iphonexrmax:flex-col ipad:flex-row ipadpro:flex-row
                    iphone6:p-10 iphone6:gap-8
                    '>
                        <div className="flex flex-wrap gap-4">
                            <h5 className="h-24 w-24 p-2 bg-[#161616] font-montrealbold text-white ">#161616</h5>
                            <h5 className="h-24 w-24 p-2 bg-[#1E5CF1] font-montrealbold text-white ">#1E5CF1</h5>
                            <h5 className="h-24 w-24 p-2 bg-[#FFD200] font-montrealbold text-white ">#FFD200</h5>
                            <h5 className="h-24 w-24 p-2 bg-[#007AFF] font-montrealbold text-white ">#007AFF</h5>
                            <h5 className="h-24 w-24 p-2 bg-[#FF0000] font-montrealbold text-white ">#FF0000</h5>
                            <h5 className="h-24 w-24 p-2 bg-[#FFFFFF] font-montrealbold text-black ">#FFFFFF</h5>
                            <h5 className="h-24 w-24 p-2 bg-[#000000] font-montrealbold text-white ">#000000</h5>
                        </div>
                    </div>
                </div>
                <div className='bg-dark-primary-background' id='background'>
                    <h3 className='font-montrealbold text-dark-primary-text uppercase
                    ml-6 mt-6
                    iphone6:text-2xl iphoneplus:text-3xl iphonex:text-2xl iphonexr:text-3xl iphonexrmax:text-3xl ipad:text-5xl ipadpro:text-5xl
                    '>screens</h3>
                    <p className='font-montrealmedium text-dark-primary-text
                    ml-6 mt-4 mr-6
                    iphone6:text-md iphoneplus:text-md iphonex:text-md iphonexr:text-lg iphonexrmax:text-lg ipad:text-xl ipadpro:text-2xl
                    ipad:w-2/3
                    '>designing the screens for this app was exciting. complex being one of my favorite brands i designed the app with pixel perfect percision. with inspiration gathered from popular news apps, the complex site, and by asking complex fans what they would want from a mobile app. </p>
                    <div className='flex place-content-around
                    iphone6:flex-col iphoneplus:flex-col iphonex:flex-col iphonexr:flex-col iphonexrmax:flex-col ipad:flex-row ipadpro:flex-row
                    iphone6:p-10 iphone6:gap-8
                    '>
                        <div>
                            <Image
                                src={complex_screens}
                                height={600}
                                width={800}
                                alt='various screens of the complex mobile app'
                            />
                        </div>
                    </div>
                    <h3 className='font-montrealbold text-dark-primary-text uppercase
                    ml-6 mt-6
                    iphone6:text-lg iphoneplus:text-xl iphonex:text-lg iphonexr:text-xl iphonexrmax:text-xl ipad:text-3xl ipadpro:text-3xl
                    '>key screens</h3>
                    <p className='font-montrealmedium text-dark-primary-text
                    ml-6 mt-4 mr-6
                    iphone6:text-md iphoneplus:text-md iphonex:text-md iphonexr:text-lg iphonexrmax:text-lg ipad:text-xl ipadpro:text-2xl
                    ipad:w-2/3
                    '>it was really important that the content be the most important part of the app. thats why on every ‘channel’ beginning with the home channel you are greeted with featured and popular content. </p>
                    <div className='flex place-content-around
                    iphone6:flex-col iphoneplus:flex-col iphonex:flex-col iphonexr:flex-col iphonexrmax:flex-col ipad:flex-row ipadpro:flex-row
                    iphone6:p-10 iphone6:gap-8
                    '>
                        <div className='self-center justify-self-center'>
                            <Image
                                src={complex_home}
                                alt='various screens of the complex mobile app'
                            />
                        </div>
                        <div className='self-center justify-self-center'>
                            <Image
                                src={complex_home_2}
                                alt='various screens of the complex mobile app'
                            />
                        </div>
                        <div className='self-center justify-self-center'>
                            <Image
                                src={complex_reading}
                                alt='various screens of the complex mobile app'
                            />
                        </div>
                        <div className='self-center justify-self-center'>
                            <Image
                                src={complex_reading_2}
                                alt='various screens of the complex mobile app'
                            />
                        </div>
                    </div>
                    <h3 className='font-montrealbold text-dark-primary-text uppercase
                    ml-6 mt-6
                    iphone6:text-lg iphoneplus:text-xl iphonex:text-lg iphonexr:text-xl iphonexrmax:text-xl ipad:text-3xl ipadpro:text-3xl
                    '>navigation</h3>
                    <p className='font-montrealmedium text-dark-primary-text
                    ml-6 mt-4 mr-6
                    iphone6:text-md iphoneplus:text-md iphonex:text-md iphonexr:text-lg iphonexrmax:text-lg ipad:text-xl ipadpro:text-2xl
                    ipad:w-2/3
                    '>for navigation i felt that a sidebar would be the best way for the user to navigate. its tucked away until you need it which means that there is not the clutter that you might sometimes find with a tab bar.</p>
                    <div className='flex place-content-around
                    iphone6:flex-col iphoneplus:flex-col iphonex:flex-col iphonexr:flex-col iphonexrmax:flex-col ipad:flex-row ipadpro:flex-row
                    iphone6:p-10 iphone6:gap-8
                    '>
                        <div className='self-center justify-self-center'>
                            <Image
                                src={complex_home_2}
                                alt='various screens of the complex mobile app'
                            />
                        </div>
                    </div>
                    <h3 className='font-montrealbold text-dark-primary-text uppercase
                    ml-6 mt-6
                    iphone6:text-lg iphoneplus:text-xl iphonex:text-lg iphonexr:text-xl iphonexrmax:text-xl ipad:text-3xl ipadpro:text-3xl
                    '>Editorial Content</h3>
                    <p className='font-montrealmedium text-dark-primary-text
                    ml-6 mt-4 mr-6
                    iphone6:text-md iphoneplus:text-md iphonex:text-md iphonexr:text-lg iphonexrmax:text-lg ipad:text-xl ipadpro:text-2xl
                    ipad:w-2/3
                    '>article views needed to be clean, easy to read, and intuitive. all of the writers information and header image are at the top and the content is at the bottom. no breaks in the middle for ads just the article. 
                    <br/>
                    <br/>
                    the choice to not have ads in the middle of the content makes it easier for the user to read and absorb the content without forcing them to break their focus.</p>
                    <div className='flex place-content-around
                    iphone6:flex-col iphoneplus:flex-col iphonex:flex-col iphonexr:flex-col iphonexrmax:flex-col ipad:flex-row ipadpro:flex-row
                    iphone6:p-10 iphone6:gap-8
                    '>
                        <div className='self-center justify-self-center'>
                            <Image
                                src={complex_reading}
                                alt='various screens of the complex mobile app'
                            />
                        </div>
                        <div className='self-center justify-self-center'>
                            <Image
                                src={complex_reading_2}
                                alt='various screens of the complex mobile app'
                            />
                        </div>
                    </div>
                    <h3 className='font-montrealbold text-dark-primary-text uppercase
                    ml-6 mt-6
                    iphone6:text-lg iphoneplus:text-xl iphonex:text-lg iphonexr:text-xl iphonexrmax:text-xl ipad:text-3xl ipadpro:text-3xl
                    '>Video Content</h3>
                    <p className='font-montrealmedium text-dark-primary-text
                    ml-6 mt-4 mr-6
                    iphone6:text-md iphoneplus:text-md iphonex:text-md iphonexr:text-lg iphonexrmax:text-lg ipad:text-xl ipadpro:text-2xl
                    ipad:w-2/3
                    '>finding your favorite shows from complex needed to be extremely straightforward. the all shows category layed out all of the shows that complex has for the user to choose from.
                    <br/>
                    <br/>
                    once they find a show they want to watch they simply select it and then are brought to a list of episodes to choose from.</p>
                    <div className='flex place-content-around
                    iphone6:flex-col iphoneplus:flex-col iphonex:flex-col iphonexr:flex-col iphonexrmax:flex-col ipad:flex-row ipadpro:flex-row
                    iphone6:p-10 iphone6:gap-8
                    '>
                        <div className='self-center justify-self-center'>
                            <Image
                                src={complex_all_shows}
                                alt='various screens of the complex mobile app'
                            />
                        </div>
                        <div className='self-center justify-self-center'>
                            <Image
                                src={complex_all_shows_2}
                                alt='various screens of the complex mobile app'
                            />
                        </div>
                        <div className='self-center justify-self-center'>
                            <Image
                                src={complex_show_details}
                                alt='various screens of the complex mobile app'
                            />
                        </div>
                        <div className='self-center justify-self-center'>
                            <Image
                                src={complex_episode}
                                alt='various screens of the complex mobile app'
                            />
                        </div>
                        <div className='self-center justify-self-center'>
                            <Image
                                src={complex_episode_2}
                                alt='various screens of the complex mobile app'
                            />
                        </div>
                    </div>
                </div>
            <ScrollUpButton/>   
        </div>
        
        </>
    )
}