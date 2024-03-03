import React from 'react'
import styles from "./MainHeader.module.scss";
import Image from 'next/image';
import Link from 'next/link';

const MainHeader = () => {
    return (
        <>
        <div className={styles.mainHeader}>
            <div className={styles.lngCur}>
                <ul>
                    <li>EN
                        <Image
                            src="arrow-down.svg"
                            alt="My SVG"
                            width={10}
                            height={10}
                        />
                    </li>
                    <li>USD
                        <Image
                            src="arrow-down.svg"
                            alt="My SVG"
                            width={10}
                            height={10}
                        />
                    </li>
                </ul>
            </div>
            <div className={styles.profile_section}>
                <ul>
                    <li><Image
                        src="profile_close_2.svg"
                        alt="My SVG"
                        width={20}
                        height={18} />
                        <span className={styles.marginLeft}>My profile</span>
                    </li>
                    <li className={styles.cart}>
                        <Link href="/cart">
                        <Image
                            src="cart.svg"
                            alt="My SVG"
                            width={20}
                            height={20} />
                        <Image
                            src="mark.svg"
                            alt="My SVG"
                            width={25}
                            height={25} 
                            className={styles.cartCount}
                            />
                        </Link>
                    </li>
                    <li>Items</li>
                    <li><span className={styles.price}>$0.00</span>
                        <Image
                            src="search-icon.svg"
                            alt="My SVG"
                            width={15}
                            height={15} />
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default MainHeader