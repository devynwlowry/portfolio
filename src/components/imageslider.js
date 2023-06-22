import React from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const ImageSlider = () => {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWdith - carousel.current.offsetWidth);
    }, []);


    return (
        <>
            <motion.div className='cursor-grab overflow-hidden' ref={carousel} id='carousel'>
                <motion.div drag='x' id='inner-carousel' dragConstraints={{ right: 0, left: -width }} dragMomentum={false} whileTap={{ cursor: "grabbing" }}>
                    <motion.div className='flex bg-blue-500 w-full p-[40px]' id='item'>
                        <img src='/images/complex_banner.png/' className="w-full h-full pointer-events-none"></img>
                        <img src='/images/complex_font_dark.svg' className="w-full h-full pointer-events-none"></img>
                        <img src='/images/complex_banner.svg' className="w-full h-full pointer-events-none"></img>
                        <img src='/images/complex_font_light.svg' className="w-full h-full pointer-events-none"></img>
                        <img src='/images/complex_banner.svg' className="w-full h-full pointer-events-none"></img>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    )

}