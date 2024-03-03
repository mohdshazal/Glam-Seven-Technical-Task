import React from 'react'
import styles from './FeaturedProduct.module.scss'
import Image from 'next/image'
const FeaturedProduct = ({product}:{product:any}) => {
    return (
        <div className={styles.featuredProductContainer}>
            <div className={styles.productImage}>
                <Image
                    src={product.image}
                    alt="My SVG"
                    width={152}
                    height={137}
                />
            </div>
            <div className={styles.productInfo}>
                <h2>{product.title}</h2>
                <Image
                    src="/rating.png"
                    alt="My SVG"
                    width={86}
                    height={11}
                />
                <div className={styles.prices}>
                <span className={styles.discountPrice}>${product.price}</span>
                <span className={styles.originalPrice}>$534,33</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProduct