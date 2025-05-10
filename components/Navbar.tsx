import React from 'react'
import Link from 'next/link'
import { Sun } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='sticky border-b-[1px]'>
      <div className='flex justify-between max-w-11/12 mx-auto my-6'>
        <Link href="/" className=''>Adam Zavadil</Link>
        <div className='flex flex-row gap-x-5'>
            <Link className="" href="">Home</Link>
            <Link className="" href="">Projects</Link>
            <Link className="" href="">About</Link>
            <Link className="" href="">Contact</Link>
            <button className=''><Sun /></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
