import { Navbar } from '../components/navbar.js'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
      <div className='grid place-items-center grid-cols-3 grid-rows-9 gap-x-12 gap-y-16 m-12'>
        <div className='bg-white col-span-2 border-2 border-gray rounded-xl p-4 drop-shadow-2xl'>
          <p className='font-sans text-5xl font-bold w-auto text-black'>Hello! My name is Devyn 👋 I'm a Product Designer who has been coming up with cool ideas since high school.</p>
          <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className='flex justify-between align-center gap-4'>
              <button className='bg-black h-12 w-1/2 border-2 border-white rounded-full text-xl text-white font-semibold'>
                Let's Work!
                <Link href="" />
              </button>
              <div className='contents'>
                <div className='flex gap-4'>
                    <button className='rounded-full bg-black h-auto w-auto border-2 border-white'>
                    <Image
                      src="/../public/images/2021 Twitter logo - white.png"
                      height={32}
                      width={32}
                      alt="Check me out on twitter"
                      className='h-4 w-5 m-3'
                    />
                  </button>
                  <button className='rounded-full bg-black h-auto w-auto border-2 border-white'>
                    <Image
                      src="/../public/images/2021 Twitter logo - white.png"
                      height={32}
                      width={32}
                      alt="Check me out on linkedin"
                      className='h-4 w-5 m-3'
                    />
                  </button>
                  <button className='rounded-full bg-black h-auto w-auto border-2 border-white'>
                    <Image
                      src="/../public/images/2021 Twitter logo - white.png"
                      height={32}
                      width={32}
                      alt="Check me out on behance"
                      className='h-4 w-5 m-3'
                    />
                  </button>
                  <button className='rounded-full bg-black h-auto w-auto border-2 border-white'>
                    <Image
                      src="/../public/images/2021 Twitter logo - white.png"
                      height={32}
                      width={32}
                      alt="Check me out on dribbble"
                      className='h-4 w-5 m-3'
                    />
                  </button>
                  <button className='rounded-full bg-black h-auto w-auto border-2 border-white'>
                    <Image
                      src="/../public/images/2021 Twitter logo - white.png"
                      height={32}
                      width={32}
                      alt="Check me out on medium"
                      className='h-4 w-5 m-3'
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white grid-cols-3 border-2 border-gray rounded-xl p-4 shadow-2xl'>
          <h1 className='font-sans text-5xl font-bold w-auto text-black'>Skills</h1>
        </div>
      </div>
      </div>
      
    </>
  )
}