import Image from 'next/image.js'
import Link from 'next/link.js'
import ScrollButton from '../../src/components/scrollbutton.js'
import { Breadcrumbs } from '@/components/breadcrumbs.js'
import { Problem } from '@/components/problem.js'
import { Layout } from '@/components/layout.js'
import { PageList } from '@/components/pagelist.js'
import { AutoScroll } from '@/components/autoscroll.js'

export default function Home() {
  
  return (
    <>

      {/* Bottom right side text/breadcrumbs */}
      <Layout/>

      {/* Section 1 */}
      <div className='flex flex-col align-center justify-center h-screen 
      bg-light-primary-background
      dark:bg-dark-primary-background' id='first section'>
        <div className='m-auto'>
          <h1 className='font-machinainkultra uppercase text-light-primary-text
          mt-20
          iphone6:text-[5vh] ipadpro12:text-[6vh]
          dark:text-dark-primary-text'>
            devyn lowry
          </h1>
        </div>
        <div className='flex justify-center align-center mb-10'>
          <ScrollButton/>
        </div>
      </div>

      {/* Section 2 */}
      <div id='second-section' className='h-screen 
      bg-light-primary-background
      overflow-x-hidden
      dark:bg-dark-primary-background'>
        <div className='flex flex-col align-center justify-center h-screen'>
          <AutoScroll/>
          <PageList/>
        </div>
      </div>
    </>
  )
}