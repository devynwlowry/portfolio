import complex_font_light from '../../../public/images/complex_font_light.svg'
import complex_font_dark from '../../../public/images/complex_font_dark.svg'
import covr_gif from '../../../public/images/covr_gif.gif'
import sketch_gif from '../../../public/images/sketch.gif'
import covr_logo from '../../../public/images/Logos/covr.svg'
import covr_font_dark from '../../../public/images/covr_font_dark.svg'
import covr_font_light from '../../../public/images/covr_font_light.svg'
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
import complex_shop from '../../../public/images/productshots/complexscreens/shop/shop.png'
import complex_shop_2 from '../../../public/images/productshots/complexscreens/shop/SHOPCONT.png'
import complex_item from '../../../public/images/productshots/complexscreens/shop/ITEM.png'
import complex_item_2 from '../../../public/images/productshots/complexscreens/shop/ITEMCont.png'
import complex_item_3 from '../../../public/images/productshots/complexscreens/shop/Itemincart.png'
import complex_fwf from '../../../public/images/productshots/complexscreens/FirstWeFeast/First We Feast.png'
import complex_fwf_2 from '../../../public/images/productshots/complexscreens/FirstWeFeast/First We Feast Cont.png'

import { BackButton } from "@/components/backbutton";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ScrollUpButton } from '@/components/scrollupbutton'
import Image from 'next/image'

export default function covr() {
    return (
        <>
        <Breadcrumbs/>
        <div className='h-[100vh] bg-light-primary-background
            flex flex-col'>
                <div id='top' className='flex flex-col justify-start align-start ml-6
                iphone6:pt-1 ipadpro12:pt-3 iphone6:w-3/4 ipadpro12:w-96'>
                    <BackButton/>
                </div>
                <div className='self-center' id='complex-networks'>
                    <h1 className='text-center font-machinainkultra text-light-primary-text uppercase
                    iphone6:text-2xl iphoneplus:text-3xl iphonex:text-2xl iphonexr:text-3xl iphonexrmax:text-3xl ipad:text-5xl ipadpro:text-5xl
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
                    <div className='flex place-content-around
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
                 <div className='bg-light-primary-background' id='tools-used'>
                    <h3 className='font-montrealbold text-light-primary-text uppercase
                    ml-6 mt-6
                    iphone6:text-2xl iphoneplus:text-3xl iphonex:text-2xl iphonexr:text-3xl iphonexrmax:text-3xl ipad:text-5xl ipadpro:text-5xl
                    '>colors</h3>
                    <p className='font-montrealmedium text-light-primary-text
                    ml-6 mt-4 mr-6
                    iphone6:text-md iphoneplus:text-md iphonex:text-md iphonexr:text-lg iphonexrmax:text-lg ipad:text-xl ipadpro:text-2xl
                    ipad:w-2/3
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
                                <h5 className="h-24 w-24 p-2 bg-covr-dark-accent-color font-montrealbold text-white ">#1E90FF</h5>
                                <h5 className='font-montrealmedium w-24'>accent-color</h5>
                            </div>
                            <div>
                                <h5 className="h-24 w-24 p-2 bg-covr-dark-secondary-text font-montrealbold text-light-primary-text ">#B7B7B7</h5>
                                <h5 className='font-montrealmedium w-24'>secondary-text</h5>
                            </div>
                        </div>
                        <h2 className='font-montrealbold text-xl'>Brand Colors</h2>
                        <div className="flex flex-col gap-4">
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
                {/* <div className='bg-dark-primary-background' id='background'>
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
                    '>it was really important that the content be the most important part of the app. thats why on every channel beginning with the home channel you are greeted with featured and popular content. </p>
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
                    <h3 className='font-montrealbold text-dark-primary-text uppercase
                    ml-6 mt-6
                    iphone6:text-lg iphoneplus:text-xl iphonex:text-lg iphonexr:text-xl iphonexrmax:text-xl ipad:text-3xl ipadpro:text-3xl
                    '>shop</h3>
                    <p className='font-montrealmedium text-dark-primary-text
                    ml-6 mt-4 mr-6
                    iphone6:text-md iphoneplus:text-md iphonex:text-md iphonexr:text-lg iphonexrmax:text-lg ipad:text-xl ipadpro:text-2xl
                    ipad:w-2/3
                    '>complex has amazing merch either designed in house or in collaboration with well known artists, the shop view was designed to put those pieces right in front of the users separated by brand. </p>
                    <div className='flex place-content-around
                    iphone6:flex-col iphoneplus:flex-col iphonex:flex-col iphonexr:flex-col iphonexrmax:flex-col ipad:flex-row ipadpro:flex-row
                    iphone6:p-10 iphone6:gap-8
                    '>
                        <div className='self-center justify-self-center'>
                            <Image
                                src={complex_shop}
                                alt='various screens of the complex mobile app'
                            />
                        </div>
                        <div className='self-center justify-self-center'>
                            <Image
                                src={complex_shop_2}
                                alt='various screens of the complex mobile app'
                            />
                        </div>
                        <div className='self-center justify-self-center'>
                            <Image
                                src={complex_item}
                                alt='various screens of the complex mobile app'
                            />
                        </div>
                        <div className='self-center justify-self-center'>
                            <Image
                                src={complex_item_2}
                                alt='various screens of the complex mobile app'
                            />
                        </div>
                        <div className='self-center justify-self-center'>
                            <Image
                                src={complex_item_3}
                                alt='various screens of the complex mobile app'
                            />
                        </div>
                    </div>
                    <h3 className='font-montrealbold text-dark-primary-text uppercase
                    ml-6 mt-6
                    iphone6:text-lg iphoneplus:text-xl iphonex:text-lg iphonexr:text-xl iphonexrmax:text-xl ipad:text-3xl ipadpro:text-3xl
                    '>Channels</h3>
                    <p className='font-montrealmedium text-dark-primary-text
                    ml-6 mt-4 mr-6
                    iphone6:text-md iphoneplus:text-md iphonex:text-md iphonexr:text-lg iphonexrmax:text-lg ipad:text-xl ipadpro:text-2xl
                    ipad:w-2/3
                    '>channels was a concept i came up with to organize the different brands into their own sections on the app. each brand getting its own channel; i did this because the idea of 
                    channels is a familiar concept to many users who are used to having the content that they care about easily accessible. every channel has its own set of channels (similar to stories) for each of their shows to share updates or exciting things that are coming soon.
                    <br/>
                    <br/>
                    in order to make the app feel more customizable, a user would be able to select a channel to be the default home view so the content they care about is easy to access. every time.</p>
                    <div className='flex place-content-around
                    iphone6:flex-col iphoneplus:flex-col iphonex:flex-col iphonexr:flex-col iphonexrmax:flex-col ipad:flex-row ipadpro:flex-row
                    iphone6:p-10 iphone6:gap-8
                    '>
                        <div className='self-center justify-self-center'>
                            <Image
                                src={complex_fwf}
                                alt='various screens of the complex mobile app'
                            />
                        </div>
                        <div className='self-center justify-self-center'>
                            <Image
                                src={complex_fwf_2}
                                alt='various screens of the complex mobile app'
                            />
                        </div>
                    </div>
    </div> */}
            <ScrollUpButton/>   
        </div>
        </>
    )
}