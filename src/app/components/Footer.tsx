import React from 'react'
import styles from './Footer.module.scss'
import Image from 'next/image'
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.footerContainer}>
        <div className={styles.firstSection}>
            <div>
                <div className={styles.Ecomm}>

            <Image
                src="e-comm-logo.svg"
                alt="My SVG"
                width={38}
                height={25}
            />
                <h2>E-Comm</h2>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
            </div>
            <div>
                <h2>Follow Us</h2>
                <p>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                <div className={styles.socialMedia}>
                <Image
                src="facebook.svg"
                alt="My SVG"
                width={11}
                height={20}
            />
                  <Image
                src="twitter.svg"
                alt="My SVG"
                width={30}
                height={20}
            />
                </div>
            </div>
            <div>
                <h2>Contact Us</h2>
                <p>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
            </div>
        </div>
        <div className={styles.secondSection}>
            <div>
                <h2>Information</h2>
                <ul>
                    <li>About Us</li>
                    <li>Infomation</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
            <div>
                <h2>Service</h2>
                <ul>
                    <li>About Us</li>
                    <li>Infomation</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
            <div>
                <h2>My Account</h2>
                <ul>
                    <li>About Us</li>
                    <li>Infomation</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
            <div>
                <h2>Our Offers</h2>
                <ul>
                    <li>About Us</li>
                    <li>Infomation</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
        </div>
        <div className={styles.thirdSection}>
            <div className={styles.copyRight}>© {currentYear} Ecommerce theme by www.bisenbaev.com</div>
            <div className={styles.cards}>
            <Image
                src="master_card.svg"
                alt="My SVG"
                width={38}
                height={25}
            />
             <Image
                src="visa.svg"
                alt="My SVG"
                width={38}
                height={25}
            />
             <Image
                src="Western-union.svg"
                alt="My SVG"
                width={38}
                height={25}
            />
             <Image
                src="Paypal.svg"
                alt="My SVG"
                width={38}
                height={25}
            />
            </div>
        </div>
    </div>
  )
}

export default Footer