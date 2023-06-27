import Image from "next/image"
import covr_banner from '../../../public/images/covr_banner.svg'
import Link from "next/link"

export const Covr = () => {
    return (
        <>
        <div className='flex flex-col' id='complex'>
            <Link href='/projects/covr'>
                <Image 
                    src={covr_banner}
                    height={200}
                    width={368}
                    alt='covr app'
                />
                <h4 className='font-montrealbold text-light-secondary-text dark:text-dark-secondary-text'>CONCEPT // WIP //</h4>
                <h3 className='font-machinainkultra text-light-primary-text uppercase 
                iphonese:text-xl iphone6:text-2xl iphoneplus:text-2xl iphonexrmax:text-2xl ipad:text-3xl ipadpro:text-2xl ipadpro12:text-3xl
                dark:text-dark-primary-text'>COVR</h3>
            </Link>
        </div>
        </>
    )
}