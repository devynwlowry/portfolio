import { Navbar } from '../components/navbar.js'
import { CardIntro } from '../components/card_intro.js'
import { CardSkills } from '../components/card_skills.js'
import { Button } from '../components/button.js'
import { ButtonWhy } from '@/components/button_why.js'


export default function Home() {
  
  return (
    <>
      <section>
        <Navbar/>
      </section>
      <section className='flex justify-center items-center p-80'>
        <h1 className='text-[#333] font-montrealbold text-5xl'>Simplicity is the best tool in a Product Designers arsenal.</h1>
      </section>
      <section>
        <div className='flex flex-row justify-center items-center mx-auto px-24 gap-x-10 gap-y-10'>
          <CardIntro/>
          <CardSkills/>
        </div>
      </section>
    </>
  )
}