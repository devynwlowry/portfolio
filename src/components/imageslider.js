import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";


import complex_banner from '../../public/images/complex_banner.svg'
import complex_font_light from '../../public/images/complex_font_light.svg'
import complex_font_dark from '../../public/images/complex_font_dark.svg'

export const ImageSlider = () => {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWdith - carousel.current.offsetWidth);
    }, []);


    return (
        <>
        <motion.div className='overflow-hidden bg-red-500 cursor-grab' ref={carousel} id='container' whileTap={{cursor:"grabbing"}}>
            <motion.div className='bg-blue-500 w-fit' id='slider' drag="x" dragMomentum={false} dragConstraints={{ right: 0, left:-width }}>
                <motion.div className="flex gap-8 min-w-[30rem] p-[40px]" id='item'>
                    <Image
                        src={complex_banner}
                        width={368}
                        height={368}
                        alt='complex banner'
                        className="pointer-events-none w-full h-full"
                    />
                    <Image
                        src={complex_font_light}
                        width={368}
                        height={368}
                        alt='complex banner'
                        className="pointer-events-none w-full h-full"
                    />
                    <Image
                        src={complex_banner}
                        width={368}
                        height={368}
                        alt='complex banner'
                        className="pointer-events-none w-full h-full"
                    />
                    <Image
                        src={complex_font_light}
                        width={368}
                        height={368}
                        alt='complex banner'
                        className="pointer-events-none w-full h-full"
                    />
                </motion.div>
            </motion.div>
        </motion.div>
        </>
    )

}