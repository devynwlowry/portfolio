import { Navbar } from '../components/navbar.js'
import { MyName } from '@/components/name.js'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default function Home() {
  return (
    <>
    <br/>
    <div>
      <Navbar/>
    </div>
    <body className='bg-[#F4F4FC] dark:bg-slate-950 bg-array bg-repeat dark:bg-arraywhite'>
      <div className='grid grid-cols-1 m-4' id="grid container">
        <div id="col1">
            <MyName/>
        </div>
      </div>
    </body>
    </>
  )
}