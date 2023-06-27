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
            <h3 className='font-machinainkultra text-light-primary-text uppercase 
            iphonese:text-xl iphone6:text-2xl iphoneplus:text-2xl iphonexrmax:text-2xl ipad:text-3xl ipadpro:text-2xl ipadpro12:text-3xl
            dark:text-dark-primary-text'>Complex networks</h3>
            </Link>
        </div>
        </>
    )
}