import React from 'react'

export default function ProductDetailsLayout({
    children,
}:{
    children:React.ReactNode
}) {
  return (
    <div>
        {children}
        <h2>Features  Product</h2>
    </div>
  )
}
