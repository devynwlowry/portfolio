import { Navbar } from '../components/navbar.js'
import { Footer } from '../components/footer.js'
import Image from 'next/image.js'
import Link from 'next/link.js'
import { ProjectBase } from '@/components/projects/projectbase.js'


export default function Home() {
  
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div className='flex justify-center items-center p-80 -z-10'>
      <h1 className='text-silver font-glacialbold text-5xl'>hi my name is devyn and i make cool things.</h1>
    </div>
    <ProjectBase/>
    <div className='bg-blueberry max-h-[50vh] p-12 flex flex-col justify-center items-start' id='aboutme'>
      <Link href='/about' className='
        group
        text-[20vh] font-glacialbold uppercase text-orangejuice 
        opacity-75
        transition duration-300
        hover:opacity-100 hover:ease-in-out'>About Me
          <span className="block h-2 max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orangejuice"/>
      </Link>
    </div>

    <div className='bg-orangejuice max-h-[50vh] p-12 flex flex-col justify-center items-start' id='contact'>
      <Link href='/contact' className='
          group
          text-[20vh] font-glacialbold uppercase text-peach 
          opacity-75
          transition duration-300
          hover:opacity-100 hover:ease-in-out'>Contact
            <span className="block h-2 max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-peach"/>
      </Link>
    </div>
    <Footer/>
    </>
  )
}