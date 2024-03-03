import React from 'react'
import Image from 'next/image';
import styles from './ProductCard.module.scss'
const ProductCard = ({show_hot,product}:{show_hot?:boolean,product:any}) => {
    return (
        <div className={styles.cardContainer}>
            <Image
                src={product.image}
                alt="My SVG"
                width={299.5}
                height={272.5} />
            {
                show_hot && <span className={styles.hot}>HOT</span>
            }
            <h3>{product.title}</h3>
            <div className={styles.priceDetails}>
                <h4>${product.price}</h4>
                <span className={styles.originalPrice}>$534,33</span>
                <span className={styles.discount}>24% off</span>
            </div>
        </div>
    )
}

export default ProductCard