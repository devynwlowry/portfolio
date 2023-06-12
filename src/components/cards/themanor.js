import Image from 'next/image'
import themanor_banner from '../../../public/images/themanor_banner.svg'
import Link from 'next/link'

export const Themanor = () => {
    return (
        <>
            <div className='flex flex-col' id='complex'>
                <Link href='/projects/themanor'>
                    <Image 
                        src={themanor_banner}
                        height={200}
                        width={368}
                        alt='covr app'
                    />
                    <h4 className='font-montrealbold text-light-secondary-text dark:text-dark-secondary-text'>COMPANY //</h4>
                    <h3 className='font-machinainkultra text-light-primary-text uppercase iphone6:text-[4vh] ipadpro12:text-[2.5vh] dark:text-dark-primary-text'>THEMANOR.</h3>
                </Link>
            </div>
        </>
    )
}