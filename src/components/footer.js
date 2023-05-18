import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/images/Logos/devynn.svg'
import React from 'react'
import party from 'party-js'

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
                    <ul className='flex flex-row gap-y-2 p-1'>
                    <li className='text-xl font-montrealmedium lowercase text-silver'>
                        Complex
                    </li>
                    <li className='text-xl font-montrealmedium lowercase text-silver'>
                        covr
                    </li>
                    <li className='text-xl font-montrealmedium uppercase text-silver'>
                        THEMANOR.
                    </li>
                    </ul>
                </ul>
                <ul>
                    <li className='text-3xl text-silver font-glacialbold uppercase'>
                    <h3>Contact</h3>
                    </li>
                </ul>
                </div>
            </div>
        </footer>
        </>
    )
}