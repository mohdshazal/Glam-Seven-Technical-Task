import React from 'react'
import styles from './FeaturedProducts.module.scss'
import FeaturedProduct from './FeaturedProduct'
import SearchInput from './SearchInput'
import Input from './Input'
async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products?limit=3')   
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  } 
  return res.json()
}
const FeaturedProducts = async () => {
  const products = await getProducts()
  return (
    <div className={styles.featuredProducts}>
        <h1>FEATURED PRODUCTS</h1>
        <div className={styles.featuredProductContainer}>
        {
        products?.map((product:any,key:any)=>{
           return <FeaturedProduct key={key} product={product}/>
        })
      }
        {/* <FeaturedProduct/>
        <FeaturedProduct/>
        <FeaturedProduct/> */}
        </div>
        <div className={styles.searchInput}>
            {/* <SearchInput/> */}
            <Input input_width="450px" input_height="58px" placeholder="Search query..." button_text="Search" button_width="127px"/>
        </div>
    </div>
  )
}

export default FeaturedProducts