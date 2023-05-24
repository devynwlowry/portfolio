import Link from 'next/link'
import Image from 'next/image'
import covr from '../../public/images/Logos/covr.svg'
import complex from '../../public/images/logos/complex1.png'

export const Navbar = () => {

    return (
        <>
        <div className='relative z-10'>
            <nav className='bg-almostblack dark:bg-[#0B0B03]'>
                <div className='flex flex-wrap items-center justify-center gap-96 p-4'>
                    <div className='flex items-center justify-center'>
                        <Link className='self-center text-4xl font-glacialbold whitespace-nowrap text-silver uppercase transition ease-in-out duration-500 hover:text-orangejuice' href='/'>Devyn Lowry</Link>
                    </div>
                    <div className='flex justify-center items-center gap-24'>
                        <Link href='/about' className='font-glacialbold text-2xl uppercase text-silver transition ease-in-out duration-500 hover:text-orangejuice' id='aboutme'>
                            About Me
                        </Link>
                        
                        <Link href='/projects' className='group font-glacialbold text-2xl uppercase text-silver transition ease-in-out duration-500 hover:text-orangejuice p-4' id='projects'>
                            Projects
                            {/* <span className='flex cursor-default gap-1 items-center transition ease-in-out duration-500 hover:text-orangejuice'>Projects<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:invisible md:visible"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg></span> */}
                            {/* <div className='absolute -z-10 w-[50vh] p-8 bg-silver text-silver flex gap-4 justify-start items-center -translate-x-[80%] -translate-y-[150%] duration-300 group-hover:translate-y-[19%]'>
                                <Image 
                                    src={covr}
                                    height={72}
                                    width={72}
                                    alt='covr'
                                />
                                <Image 
                                    src={complex}
                                    height={72}
                                    width={72}
                                    alt='complex'
                                    className='rounded-xl'
                                />
                            </div> */}
                        </Link>

                        <Link href='/contact' className='font-glacialbold text-2xl uppercase text-silver transition ease-in-out duration-500 hover:text-orangejuice' id='contact'>
                            Contact
                        </Link>        

                        
                    </div>
                </div>
            </nav>
        </div>
        
        </>
    )
}