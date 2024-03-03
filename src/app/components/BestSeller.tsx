import React from 'react'
import ProductCard from './ProductCard'
import styles from './BestSeller.module.scss'
async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products?limit=8')   
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  } 
  return res.json()
}
const BestSeller = async () => {
  const products = await getProducts()
  return (
    <>
    <div className={styles.bestSeller}>
    <h1>BEST SELLER</h1>
    <ul>
        <li className={styles.active}>All</li>
        <li>Bags</li>
        <li>Sneakers</li>
        <li>Belt</li>
        <li>Sunglasses</li>
    </ul>
    <div className={styles.gridContainer}>
      {
        products?.map((product:any,key:any)=>{
           return <ProductCard key={key} product={product} show_hot={key == 0 ? true :false}/>
        })
      }
    {/* <ProductCard show_hot="true"/>
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard /> */}
    </div>
</div>
</>
  )
}

export default BestSeller