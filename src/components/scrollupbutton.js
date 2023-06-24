import Image from "next/image";
import arrowlight from '../../public/images/Icons/arrowlight.svg'
import arrowdark from '../../public/images/Icons/arrowdark.svg'

import {motion, useScroll, useAnimationControls} from 'framer-motion';
import { useEffect } from "react";

const ScrollToTopContainerVariants = {
  hide: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

export const ScrollUpButton = () => {

    const { scrollYProgress } = useScroll();
    const controls = useAnimationControls();

    useEffect(() => {
      return scrollYProgress.on('change', (latestValue) => {
        if (latestValue > 0.5) {
          controls.start('show');
        } else {
          controls.set('hide');
        }
      })
    })
  
    return (
        <>
        <motion.button className="flex drop-shadow-2xl bg-light-accent-color rounded-full
        fixed gap-2 p-1 bottom-10 right-10 
        iphone6:bottom-5 iphone6:right-5 iphoneplus:bottom-5 iphoneplus:right-5 iphonexrmax:bottom-5 iphonexrmax:right-5 ipad:bottom-10 ipad:right-10
        dark:bg-dark-accent-color"
            onClick={() => {
              const nextSection = document.getElementById('top');
              nextSection.scrollIntoView({ behavior: 'smooth' });
            }}
            initial='hide'
            animate={controls}
            variants={ScrollToTopContainerVariants}
          >
          <Image
            src={arrowdark}
            height={36}
            width={36}
            alt='arrow pointing up in a circle'
            className='hidden dark:block rotate-180'
          />
          <Image
            src={arrowlight}
            height={36}
            width={36}
            alt='arrow pointing up in a circle'
            className='dark:hidden rotate-180'
          />
          <h5 className="self-center mr-2 font-montrealbold text-light-primary-text dark:text-dark-primary-text uppercase 
          iphone6:hidden iphoneplus:hidden iphonexrmax:hidden ipad:block">scroll to top</h5>
          </motion.button>
        </>
    );
}
