import Link from 'next/link'
import Image from 'next/image'

export const Navbar = () => {
    return (
        <>
            <nav className="grid grid-cols-5 bg-[#111] text-white p-4 border-b-2 border-b-white">
                <ul className='mb-4'>
                    <li className="mb-4 font-monumentblack text-2xl uppercase">
                        Home
                    </li>
                </ul>
                <ul className=''>
                    <li className="mb-4 font-monumentblack text-2xl uppercase">
                        About
                    </li>
                    <li className="mb-4 font-montrealmedium text-lg w-fit hover:rounded-lg hover:border-2 hover:border-[#F0F0F0] hover:p-2 hover:text-[#111] hover:bg-[#F0F0F0]">
                        why i design
                    </li>
                    <li className="mb-4 font-montrealmedium text-lg w-fit hover:rounded-lg hover:border-2 hover:border-[#F0F0F0] hover:p-2 hover:text-[#111] hover:bg-[#F0F0F0]">
                        process
                    </li>
                    <li className="mb-4 font-montrealmedium text-lg w-fit hover:rounded-lg hover:border-2 hover:border-[#F0F0F0] hover:p-2 hover:text-[#111] hover:bg-[#F0F0F0]">
                        philosophy
                    </li>
                </ul>
                <ul>
                    <li className="mb-4 font-monumentblack text-2xl uppercase">
                        Projects
                    </li>
                    <li className="mb-4 font-montrealmedium text-lg w-fit hover:rounded-lg hover:border-2 hover:border-[#F0F0F0] hover:p-2 hover:text-[#111] hover:bg-[#F0F0F0]">
                        covr
                    </li>
                    <li className="mb-4 font-montrealmedium text-lg w-fit hover:rounded-lg hover:border-2 hover:border-[#F0F0F0] hover:p-2 hover:text-[#111] hover:bg-[#F0F0F0]">
                        complex
                    </li>
                </ul>
                <ul>
                    <li className="mb-4 font-monumentblack text-2xl uppercase">
                        Socials
                    </li>
                    <li className="mb-4 font-montrealmedium text-lg w-fit hover:rounded-lg hover:border-2 hover:border-[#F0F0F0] hover:p-2 hover:text-[#111] hover:bg-[#F0F0F0]">
                        instagram
                    </li>
                    <li className="mb-4 font-montrealmedium text-lg w-fit hover:rounded-lg hover:border-2 hover:border-[#F0F0F0] hover:p-2 hover:text-[#111] hover:bg-[#F0F0F0]">
                        twitter
                    </li>
                    <li className="mb-4 font-montrealmedium text-lg w-fit hover:rounded-lg hover:border-2 hover:border-[#F0F0F0] hover:p-2 hover:text-[#111] hover:bg-[#F0F0F0]">
                        medium
                    </li>
                    <li className="mb-4 font-montrealmedium text-lg w-fit hover:rounded-lg hover:border-2 hover:border-[#F0F0F0] hover:p-2 hover:text-[#111] hover:bg-[#F0F0F0]">
                        dribbble
                    </li>
                </ul>
                <ul className='mb-4'>
                    <li className="font-monumentblack text-2xl uppercase">
                        My Favorite Links
                    </li>
                </ul>
            </nav>
        </>
    )
}