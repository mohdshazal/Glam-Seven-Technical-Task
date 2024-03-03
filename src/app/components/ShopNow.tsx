import React from 'react'
import styles from './ShopNow.module.scss'
import Image from 'next/image';

const ShopNow = () => {
  return (
    <div className={styles.shopNowContainer}>
        <Image
                src="/adidas_shoe_image.png"
                alt="My SVG"
                width={700}
                height={600}
                className={styles.overlappingImage}
                />
        <h1>Adidas Men Running <br/>Sneakers</h1>
        <h3>Performance and design. Taken right to the edge.</h3>
        <h2><span className={styles.underline}>SHOP N</span>OW</h2>
    </div>
  )
}

export default ShopNow