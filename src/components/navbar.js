import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/images/Logos/devyn.png'

export const Navbar = () => {
    return (
        <>
        <nav className='p-4 h-14 w-fit flex justify-center mx-auto rounded-xl my-auto
        bg-[#F4FCFC] drop-shadow-xl
        dark:bg-slate-800 dark:text-white'>
            <div className='flex flex-row justify-center items-center gap-24'>
                <button className='p-4 rounded-lg font-monumentblack uppercase'>
                    Home
                </button>
                <button data-collapse-toggle="navbar-dropdown" type='button' className='p-4 rounded-lg font-monumentblack uppercase'>
                    About Me
                </button>
                <button className='p-4 rounded-lg font-monumentblack uppercase'>
                    Projects
                </button>
                <button className='p-4 rounded-lg font-monumentblack uppercase'>
                    Contact
                </button>
                <button className='p-4 rounded-lg font-monumentblack uppercase'>
                    My Favorite Links
                </button>
            </div>
        </nav>
        </>
    )
}