import React from "react"
import Link from "next/link"
import Image from "next/image"
import covrproduct from '../../../public/images/covr.png'

export const Covr = () => {
    return( 
        <>
            <div className='bg-covrblue max-h-[50vh] p-12 flex flex-row justify-start items-start' id='projects'>
                <div>
                    <Link href='/' className='
                    group
                    text-[20vh] font-silkablack uppercase text-silver 
                    opacity-75
                    transition duration-300
                    hover:opacity-100 hover:ease-in-out'>
                    COVR
                    <span className="block h-2 max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-silver"/></Link>
                </div>
                <div className="flex justify-end items-end absolute right-80">
                    <Image 
                        src={covrproduct}
                        height={552}
                        width={552}
                        alt="COVR product image"
                    />
                </div>
            </div>
        </>
    )
}