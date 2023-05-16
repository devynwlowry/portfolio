import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/images/Logos/devyn.png'

export const Navbar = () => {

    return (
        <>
        <nav className='bg-almostblack dark:bg-[#0B0B03]'>
            <div className='flex flex-wrap items-center justify-between p-4'>
                <div className='flex items-center justify-center mx-auto'>
                    <Link href='/' className='px-4'> 
                        <Image 
                            src={logo}
                            width={48}
                            height={48}
                            alt="devyn lowry logo"
                        />
                    </Link>
                    <Link className='self-center text-3xl font-montrealbold whitespace-nowrap text-[#f4f4fc] uppercase transition ease-in-out duration-500 hover:text-white' href='/'>Devyn Lowry</Link>
                </div>
                <div className='flex justify-between mr-auto gap-24'>
                    <button className='font-montrealmedium text-silver transition ease-in-out duration-500 hover:text-white' id='aboutme'>
                        About Me
                    </button>

                    <button className='font-montrealmedium text-silver transition ease-in-out duration-500 hover:text-white' id='contact'>
                        Contact
                    </button>               
                    <button className='group font-montrealmedium text-silver hover:text-white p-4' id='projects'>
                        Projects
                        <div className='absolute -z-10 w-80 p-8 rounded-lg bg-almostblack shadow-2xl text-silver flex flex-col items-start -translate-y-[150%] duration-300 group-hover:translate-y-[19%]'>
                            <h5 className=''>
                                Complex
                            </h5>
                            <h5>
                                covr
                            </h5>
                            <h5>
                                themanor
                            </h5>
                        </div>
                    </button>
                </div>
            </div>
        </nav>
        </>
    )
}