import { Navbar } from '../components/navbar.js'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='grid grid-cols-2 gap-x-12 gap-y-16 content-evenly m-12'>
        <div className='bg-transparent col-span-1 row-span-auto border-2 border-white rounded-xl p-4'>
          <p>Hello! My name is Devyn 👋 I'm a Product Designer who has been coming up with cool ideas since high school.</p>
          <div>
            <br/>
            <div className='flex justify-between align-center gap-4'>
              <button className='bg-transparent h-12 w-72 border-2 border-white rounded-full'>
                Let's Work!
                <Link href="" />
              </button>
              <div className='contents'>
                <div className='flex gap-4'>
                    <button className='rounded-full bg-transparent h-auto w-auto border-2 border-white'>
                    <Image
                      src="/../public/images/2021 Twitter logo - white.png"
                      height={32}
                      width={32}
                      alt="Check me out on twitter"
                      className='h-4 w-5 m-3'
                    />
                  </button>
                  <button className='rounded-full bg-transparent h-auto w-auto border-2 border-white'>
                    <Image
                      src="/../public/images/2021 Twitter logo - white.png"
                      height={32}
                      width={32}
                      alt="Check me out on linkedin"
                      className='h-4 w-5 m-3'
                    />
                  </button>
                  <button className='rounded-full bg-transparent h-auto w-auto border-2 border-white'>
                    <Image
                      src="/../public/images/2021 Twitter logo - white.png"
                      height={32}
                      width={32}
                      alt="Check me out on behance"
                      className='h-4 w-5 m-3'
                    />
                  </button>
                  <button className='rounded-full bg-transparent h-auto w-auto border-2 border-white'>
                    <Image
                      src="/../public/images/2021 Twitter logo - white.png"
                      height={32}
                      width={32}
                      alt="Check me out on dribbble"
                      className='h-4 w-5 m-3'
                    />
                  </button>
                  <button className='rounded-full bg-transparent h-auto w-auto border-2 border-white'>
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
        <div className='bg-transparent col-span-1 row-span-auto border-2 border-white rounded-xl p-4'>
          <p>Hello! My name is Devyn 👋 I’m a Product Designer who has been coming up with cool ideas since high school.</p>
        </div>
      </div>
    </>
  )
}