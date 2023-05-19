import Link from "next/link"
import React from "react"
import { useState, useEffect } from "react"
import { ProjectBase } from "./projects/projectbase"
import { Covr } from "./projects/covr"
import { THEMANOR } from "./projects/themanor"
import { Complex } from "./projects/complex"

export const Projects = () => {

    const components = [ProjectBase, Covr, Complex, THEMANOR];
    const [currentCompoenentIndex, setCurrentComponentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentComponentIndex((prevIndex) => (prevIndex + 1) % components.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [components.length]);

    const CurrentComponent = components[currentCompoenentIndex];

    return( 
        <>
            <div id='projects'>
                <CurrentComponent/>
            </div>
        </>
    )
}