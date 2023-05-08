import { Navbar } from '../components/navbar.js'
import Link from 'next/link'
import Image from 'next/image'


export default function Home() {
  return (
    <>
    <div>
      <Navbar />
    </div>
    <div className='grid grid-cols-1 m-4 items-end overflow-hidden' id="grid container">
      <div id="col1">
          <h1 className='text-[16vh] text-white font-monumentblack uppercase absolute bottom-0'>
            devyn 
            <br/>
            lowry
          </h1>
      </div>
    </div>
    </>
  )
}