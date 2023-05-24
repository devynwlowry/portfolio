import { Navbar } from '../components/navbar.js'
import { Footer } from '../components/footer.js'
import { Accordion } from 'flowbite'
import { ProcessAccordion} from '../components/accordion/process.js'

export default function about() {
    return (
        <>
            <Navbar/>
            <div className='flex items-center justify-center p-40' id='header'>
                <h1 className='font-glacialbold text-silver text-[2vh]'>i drink coffee and make rectangles look pretty while living in the best city in the world.</h1>
            </div>
            <ProcessAccordion/>     
            <Footer/>
        </>
    )
}