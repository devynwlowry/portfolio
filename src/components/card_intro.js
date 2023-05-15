import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/images/Logos/devyn.png'

export const CardIntro = () => {
    return (
        <>
            <div className='flex basis-1/2 bg-[#F4F4FC] border-2 border-[#E9E9EC] rounded-xl p-4 text-3xl font-montrealbold text-[#333] col-span-1'>
                <h3>Hello! My name is Devyn 👋 I’m a Product Designer who has been coming up with cool ideas since high school.</h3>
            </div>
        </>
    )
}