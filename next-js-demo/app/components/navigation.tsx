"use client"
import React from 'react'
import Link from 'next/link'
import {usePathname} from "next/navigation"
function Navigation() {
    const pathname = usePathname()
  return (
    <nav>
        <Link href="/" className={pathname === "/" ? 'font-bold mr-4 text-white-500' : 'mr-4 text-blue-500'}>
        Home
        </Link>
        <Link href="/about" className='mr-4 text-blue-500'>
        About
        </Link>
        <Link href="/products/mac" className='mr-4 text-blue-500'>
        Products
        </Link>
    </nav>
  )
}

export default Navigation