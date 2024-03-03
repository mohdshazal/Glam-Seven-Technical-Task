import React from 'react'
import styles from './WhyUs.module.scss'
import Image from 'next/image';

const WhyUs = () => {
    return (
        <div className={styles.whyUs}>
            <h1>WHY US</h1>
            <div className={styles.images}>
                <div>
                <Image
                    src="shipping.svg"
                    alt="My SVG"
                    width={100}
                    height={60}
                />
                <h3>FREE SHIPPING</h3>
                </div>
                <div>
                <Image
                    src="refund.svg"
                    alt="My SVG"
                    width={100}
                    height={60}
                />
                <h3>100% REFUND</h3>
                </div>
                <div>
                <Image
                    src="customer_support.svg"
                    alt="My SVG"
                    width={100}
                    height={60}
                />
                <h3>SUPPORT 24/7</h3>
                </div>
            </div>
        </div>
    )
}

export default WhyUs