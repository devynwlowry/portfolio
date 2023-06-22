import Image from "next/image"
import Link from "next/link"
import complex_banner from '../../../public/images/complex_banner.svg'

export const Complex = () => {
    return (
        <>
        <div className='flex flex-col' id='complex'>
            <Link href='/projects/complex'>
            <Image 
                src={complex_banner}
                height={200}
                width={368}
                alt='complex app'
            />
            <h4 className='font-montrealbold text-light-secondary-text dark:text-dark-secondary-text'>CONCEPT //</h4>
            <h3 className='font-machinainkultra text-light-primary-text uppercase iphone6:text-[4vh] ipadpro12:text-[1.67vh] dark:text-dark-primary-text'>Complex networks</h3>
            </Link>
        </div>
        </>
    )
}