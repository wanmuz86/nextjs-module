import React from 'react'

export default function Profile({params}: {params:{username:String}}) {
  return (
    <div>
        <h1>Profile Page for {params.username}</h1>
    </div>
  )
}

