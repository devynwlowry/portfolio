import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/images/Logos/devyn.png'

export const Navbar = () => {
    return (
        <>
        <nav className='bg-[#F4F4FC]'>
            <div className='flex flex-wrap items-center justify-between p-4'>
                <div className='flex items-center justify-between'>
                    <Link href='/' className='px-4'> 
                        <Image 
                            src={logo}
                            width={72}
                            height={72}
                            alt="devyn lowry logo"
                        />
                    </Link>
                    <Link className='self-center text-3xl text-white font-montrealbold whitespace-nowrap text-[#333] uppercase' href='/'>Devyn Lowry</Link>
                </div>
                <div className='flex justify-between gap-8'>
                    <button className='font-montrealmedium text-white text-md bg-[#232323] w-32 h-10 rounded-2xl' id='aboutme'>
                        About Me
                    </button>

                    <button className='font-montrealmedium text-white bg-[#232323] w-32 h-10 rounded-2xl' id='contact'>
                        Contact
                    </button>

                    <button className='font-montrealmedium text-white bg-[#232323] w-32 h-10 rounded-2xl' id='projects'>
                        Projects
                    </button>
                </div>
            </div>
        </nav>
        </>
    )
}