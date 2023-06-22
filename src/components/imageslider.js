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
            <motion.div ref={carousel} id='carousel'>
                <motion.div drag='x' id='inner-carousel' dragConstraints={{ right: 0, left: -width }} dragMomentum={false} whileTap={{ cursor: "grabbing" }}>
                    <motion.div id='item'>
                        <img src={complex_banner} className="w-full h-full pointer-events-none"></img>
                        <img src='../../public/images/complex_banner.svg' className="w-full h-full pointer-events-none"></img>
                        <img src='../../public/images/complex_banner.svg' className="w-full h-full pointer-events-none"></img>
                        <img src='../../public/images/complex_banner.svg' className="w-full h-full pointer-events-none"></img>
                        <img src='../../public/images/complex_banner.svg' className="w-full h-full pointer-events-none"></img>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    )

}