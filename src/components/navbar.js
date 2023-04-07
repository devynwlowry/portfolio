import Link from 'next/link'
import Image from 'next/image'

export const Navbar = () => {
    return (
        <>
            <nav className="flex items-center flex-wrap bf-green-400 p-3 justify-center">
                <Link href="/" legacyBehavior>
                    <a className='inline-flex items-center p-2 mr-4'>
                        <Image 
                            src="/../public/images/devyn.png"
                            height={72}
                            width={72}
                            alt="logo"
                            className='h-32 w-32 mr-2'
                        />
                    </a>
                </Link>
            </nav>
        </>
    )
}