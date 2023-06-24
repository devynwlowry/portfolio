import Image from "next/image";
import arrowlight from '../../public/images/Icons/arrowlight.svg'

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
        if (latestValue > 0.25) {
          controls.start('show');
        } else {
          controls.set('hide');
        }
      })
    })
  
    return (
        <>
        <motion.button className="flex drop-shadow-2xl fixed gap-2 p-1 bottom-10 right-10 bg-light-primary-background rounded-full"
            onClick={() => {
              const nextSection = document.getElementById('top');
              nextSection.scrollIntoView({ behavior: 'smooth' });
            }}
            initial='show'
            animate={controls}
            variants={ScrollToTopContainerVariants}
          >
          <Image
            src={arrowlight}
            height={36}
            width={36}
            alt='arrow pointing up in a circle'
            className='rotate-180'
          />
          <h5 className="self-center mr-2 font-montrealbold uppercase">scroll to top</h5>
          </motion.button>
        </>
    );
}
