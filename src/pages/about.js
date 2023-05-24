import { Navbar } from '../components/navbar.js'
import { Footer } from '../components/footer.js'
import { Accordion } from 'flowbite'
import { ProcessAccordion} from '../components/accordion/process.js'
import { Philosophy } from '@/components/accordion/philosophy.js'

export default function about() {
    return (
        <>
            <Navbar/>
            <div className='flex justify-center items-center p-80 -z-10'>
                <h1 className='text-silver font-glacialbold text-5xl'>hi my name is devyn and i make cool things.</h1>
            </div>
            <ProcessAccordion/>
            <Philosophy/>
            <Footer/>
        </>
    )
}