import Link from "next/link"

export const PageList = () => {
    return (
        <>
        <div className="flex justify-start align-start h-1/2">
            <div className="flex flex-col gap-4 w-96 m-auto">
                <Link href='/about' className='border-b-4 border-light-accent-color
                dark:border-dark-accent-color'>
                    <h1 className="font-machinainkultra uppercase text-light-primary-text
                    dark:text-dark-primary-text 
                    iphone6:text-[5vh] ipadpro12:text-[4vh]
                    ">about</h1>
                </Link>
                <Link href='/projects/' className='border-b-4 border-light-accent-color
                dark:border-dark-accent-color'>
                    <h1 className="font-machinainkultra uppercase text-light-primary-text
                    dark:text-dark-primary-text
                    iphone6:text-[5vh] ipadpro12:text-[4vh]
                    ">projects</h1>
                </Link>
                <Link href='/services' className='border-b-4 border-light-accent-color
                dark:border-dark-accent-color'>
                    <h1 className="font-machinainkultra uppercase text-light-primary-text
                    dark:text-dark-primary-text
                    iphone6:text-[5vh] ipadpro12:text-[4vh]
                    ">services</h1>
                </Link>
                <Link href='/contact' className='border-b-4 border-light-accent-color
                dark:border-dark-accent-color'>
                    <h1 className="font-machinainkultra uppercase text-light-primary-text
                    dark:text-dark-primary-text
                    iphone6:text-[5vh] ipadpro12:text-[4vh]
                    ">contact</h1>
                </Link>
            </div>
        </div>
        </>
    )
}