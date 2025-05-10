import React from 'react'
import Link from 'next/link'
import { Sun } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='sticky border-b-[1px]'>
      <div className='flex justify-between max-w-11/12 mx-auto my-6'>
        <Link href="/" className=''>Adam Zavadil</Link>
        <div className='flex flex-row gap-x-5'>
            <Link href="">Home</Link>
            <Link href="">Projects</Link>
            <Link href="">About</Link>
            <Link href="">Contact</Link>
            <button><Sun /></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
