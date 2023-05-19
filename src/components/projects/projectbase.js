import React from "react"
import Link from "next/link"

export const ProjectBase = () => {
    return( 
        <>
            <div className='bg-peach max-h-[50vh] p-12 flex flex-col justify-center items-start' id='projects'>
                <Link href='/' className='
                group
                text-[20vh] font-glacialbold uppercase text-blueberry 
                opacity-75
                transition duration-300
                hover:opacity-100 hover:ease-in-out'>Projects
                <span className="block h-2 max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blueberry"/></Link>
            </div>
        </>
    )
}