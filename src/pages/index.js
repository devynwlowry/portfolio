import { Navbar } from '../components/navbar.js'
import Link from 'next/link'
import Image from 'next/image'


export default function Home() {
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <body className='bg-[#F4F4FC] dark:bg-[#111] bg-array bg-repeat dark:bg-arraywhite'>
      <div className='grid grid-cols-1 m-4' id="grid container">
        <div id="col1">
            <h1 className='text-[16vh] animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-monumentblack uppercase 
            absolute bottom-0 
            sm:text-[8vh] md:text-[12vh] lg:text-[16vh] xl:text-[18vh] 2xl:text-[20vh]'>
              devyn 
              <br/>
              lowry
            </h1>
        </div>
      </div>
    </body>
    
    </>
  )
}