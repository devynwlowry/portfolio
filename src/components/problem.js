import Link from "next/link"

export const Problem = () => {

    return (
        <>
        <Link href='/'className="fixed h-auto bottom-0 right-3 transform rotate-90 origin-right m-auto">
            <p className='font-montrealbold text-light-accent-color
            iphone6:text-[1.3vh] ipadpro12:text-[1.25vh]
            dark:text-dark-accent-color'>DESIGN IS A PROBLEM.</p>
        </Link>
        </>
    )
}