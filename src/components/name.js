import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/images/Logos/devyn.png'
import React, { useState, useEffect } from 'react'


export const MyName = () => {
    
    const fonts = ['monumentblack', 'adedisplay', 'futurastd', 'darkparadise'];
    const [currentFont, setCurrentFont] = useState(fonts[0]);

    useEffect (() => {
        const interval = setInterval(() => {
            const currentIndex = fonts.indexOf(currentFont);
            const nextIndex = (currentIndex + 1) % fonts.length;

            setCurrentFont(fonts[nextIndex]);
        }, 5000);

        return () => clearInterval(interval);
    }, [currentFont, fonts]);

    return (
        <>
        <h1 className={`text-[16vh] animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-${currentFont} uppercase 
            absolute bottom-0 
            sm:text-[8vh] md:text-[12vh] lg:text-[16vh] xl:text-[18vh] 2xl:text-[20vh]`}>
              devyn 
              <br/>
              lowry
        </h1>
        </>
    )
}