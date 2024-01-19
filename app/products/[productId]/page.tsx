import { Metadata } from 'next'
import React from 'react'

type Props = {
  params: {
    productId:string;
  }
}

export const generateMetadata = async({
  params,
}: Props): Promise<Metadata> =>{
  const title = await new Promise((resolve) => {
    setTimeout(()=>{
      resolve(`iPhone ${params.productId}`)
    }, 100);
  });
  return {
    title:`Product ${title}`
  }
}

const getData = async (productId:string) => {
 
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${productId}`)

  if(!response.ok) {
      throw new Error('failed to fetch user')
  }

  return response.json()

}

const ProductDetail = async (
    {params,}: Props) => {
      const product = await getData(params.productId);
    
  return (
    <div>
        <h1>Detail for {product.name}</h1>
    </div>
  )
}
export default ProductDetail;
