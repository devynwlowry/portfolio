import Image from "next/image";
import arrowlight from '../../public/images/Icons/arrowlight.svg'
import arrowdark from '../../public/images/Icons/arrowdark.svg'

export const ScrollButton = () => {
    return (
        <>
        <button
            onClick={() => {
              const nextSection = document.getElementById('second-section');
              nextSection.scrollIntoView({ behavior: 'smooth' });
            }}
          ><Image
            src={arrowlight}
            height={36}
            width={36}
            alt='arrow pointing down in a circle'
            className='dark:hidden'
          />
          <Image
            src={arrowdark}
            height={36}
            width={36}
            alt='arrow pointing down in a circle'
            className='hidden dark:block'
          />
          </button>
        </>
    );
}
