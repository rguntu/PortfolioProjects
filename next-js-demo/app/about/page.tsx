"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
export const About = () => {
  const router = useRouter()
  return (
    <div>About Us
      <button className="bg-blue-500 text-white p-2" onClick={() => {
        return router.push('/')
      }}>GoHome</button>
    </div>
  )
}
export default About;
