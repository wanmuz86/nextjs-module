import React from 'react'
import Link from "next/link"
import Image from "next/image"
import {lusitana} from "../ui/fonts"
import styles from './styles.module.css'
import { Suspense } from "react";

const getData = async () => {
  const res = await fetch("https://dummyjson.com/products")

  if (!res.ok){
    throw new Error("Something is wrong")
  }
  return res.json();  
} 

const ProductList = async () => {
const products = await getData();
 
  return (
    <div className={styles.products}>
    <Image
     src="/images/pricing.jpeg" 
     height={300} 
     width={300}
     alt="Your Name"
   />     
        <Link href="/">Home</Link>
        <h1 className={lusitana.className}>Product List</h1>
        {
          products.products.map(val=>(
          
            <h2 key={val.id}>
              <Link href={`products/${val.id}`}>{val.title}</Link></h2>
         
          ))
        }
       
    </div>
  )
}
export default ProductList;

