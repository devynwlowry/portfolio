import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/images/Logos/devynn.svg'
import React from 'react'
import party from 'party-js'
import location from '../../public/images/location.svg'
import email from '../../public/images/message.svg'

export const Footer = () => {

    return (
        <>
        <footer className='bg-kindagrey max-h-[50vh]'>
            <div className='flex flex-row justify-between p-24'>
                <div>
                <ul>
                    <li className='span-2'>
                        <Image
                        src={logo}
                        height={512}
                        width={512}
                        alt='Devyn Lowry'
                        />
                    </li>
                </ul>
                </div>
                <div className='flex flex-row mx-auto gap-24'>
                <ul className='flex flex-col gap-y-3'>
                    <li className='text-3xl text-silver font-glacialbold uppercase'>
                    <h3>About</h3>
                    </li>
                    <ul className='flex flex-col gap-y-2 p-1'>
                    <li className='text-xl font-montrealmedium lowercase text-silver'>
                        Socials
                    </li>
                    <li className='text-xl font-montrealmedium lowercase text-silver'>
                        Resume
                    </li>
                    <li className='text-xl font-montrealmedium lowercase text-silver'>
                        Philosophy
                    </li>
                    <li className='text-xl font-montrealmedium lowercase text-silver'>
                        Process
                    </li>
                    <li className='text-xl font-montrealmedium lowercase'>
                        <button onClick={(e) => party.confetti(e.target)}> 
                            🎉
                        </button>
                    </li>
                    </ul>
                </ul>
                <ul className='flex flex-col gap-y-3'>
                    <li className='text-3xl text-silver font-glacialbold uppercase'>
                    <h3>Projects</h3>
                    </li>
                    <ul className='flex flex-col gap-y-2 p-1'>
                    <li className='text-xl font-montrealmedium lowercase text-silver'>
                        Complex
                    </li>
                    <li className='text-xl font-montrealmedium lowercase text-silver'>
                        covr
                    </li>
                    <li className='text-xl font-montrealmedium text-silver'>
                        THEMANOR.
                    </li>
                    </ul>
                </ul>
                <ul className='flex flex-col gap-y-3'>
                    <li className='text-3xl text-silver font-glacialbold uppercase'>
                    <h3>Contact</h3>
                    </li>
                    <ul className='flex flex-col gap-y-2 p-1 text-xl font-montrealmedium text-silver'>
                        <li className='flex gap-x-1'>
                            <Image src={location} height={24} width={24} alt='location pin'/> New York, NY
                        </li>
                        <li className='flex gap-x-1'>
                            <Image src={email} height={24} width={24} alt='email icon'/> <a href="mailto:devynwlowry@gmail.com">devynwlowry@gmail.com</a>
                        </li>
                    </ul>
                </ul>
                </div>
            </div>
        </footer>
        </>
    )
}