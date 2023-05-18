import { Navbar } from '../components/navbar.js'
import { Footer } from '../components/footer.js'
import Image from 'next/image.js'
import Link from 'next/link.js'


export default function Home() {
  
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div className='flex justify-center items-center p-80 -z-10'>
      <h1 className='text-silver font-glacialbold text-5xl'>hi my name is devyn and i make cool things.</h1>
    </div>
    <div className='bg-strawberry max-h-[50vh] p-12 flex flex-col justify-center items-start' id='projects'>
      <Link href='/' className='
      group
      text-[20vh] font-glacialbold uppercase text-blueberry 
      opacity-75
      transition duration-300
      hover:opacity-100 hover:ease-in-out'>Projects
      <span className="block h-2 max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blueberry"/></Link>
    </div>

    <div className='bg-blueberry max-h-[50vh] p-12 flex flex-col justify-center items-start' id='projects'>
      <Link href='/' className='
        group
        text-[20vh] font-glacialbold uppercase text-orangejuice 
        opacity-75
        transition duration-300
        hover:opacity-100 hover:ease-in-out'>About Me
          <span className="block h-2 max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orangejuice"/>
      </Link>
    </div>

    <div className='bg-orangejuice max-h-[50vh] p-12 flex flex-col justify-center items-start' id='projects'>
      <Link href='/' className='
          group
          text-[20vh] font-glacialbold uppercase text-strawberry 
          opacity-75
          transition duration-300
          hover:opacity-100 hover:ease-in-out'>Contact
            <span className="block h-2 max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-strawberry"/>
      </Link>
    </div>
    <Footer/>
    </>
  )
}