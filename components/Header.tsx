import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <div>
        <h1>Hi, I'm Adam Zavadil</h1>
        <p>Front-end developer focused on creating beautiful and functional digital experiences with modern technologies.</p>
        <div>
            <Link href="/projects">View my projects</Link>
            <Link href="/contact">Contact me</Link>
        </div>
      </div>
    </div>
  )
}

export default Header
