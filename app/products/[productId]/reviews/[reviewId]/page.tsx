import { notFound } from 'next/navigation'
import React from 'react'

export default function ReviewDetail(
    {params,}: {
        params: {
            productId:string,
            reviewId:string
        }
    }) {

      const random = Math.floor(Math.random() * 2);
      
      if (random === 1){
        throw new Error("Error loading review")
      }

      if (parseInt(params.reviewId)> 1000){
        notFound();
      }
  return (
    <div>
        <h1>Review {params.reviewId} for {params.productId}</h1>
    </div>
  )
}
