import { Navbar } from '../components/navbar.js'


export default function Home() {
  
  return (
    <>
    <div>
      <Navbar/>
    </div>  
    <div className='flex justify-center items-center p-80 -z-10'>
      <h1 className='text-[#232323] dark:text-[#f4f4fc] font-montrealbold text-center text-5xl'>Simplicity is the best tool in a Product Designers arsenal.</h1>
    </div>
    </>
  )
}