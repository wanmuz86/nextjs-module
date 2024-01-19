'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AuthGroupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" }
  ]
  const [message, setMessage] = useState('')
  return (
    <div>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <h2>Inner layout</h2>
      <ul>
      {
      navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href)
      
        return (
          <li><Link href={link.href}
            key={link.name}
            style={{color : isActive ? "green" : "blue"}}
          >{link.name} 
          </Link>
          </li>
        )
      })}
      </ul>
      {children}

    </div>
  )
}
