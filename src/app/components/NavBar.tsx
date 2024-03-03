import React from 'react'
import styles from './NavBar.module.scss'
import Image from 'next/image'
const NavBar = ({ is_logo }: { is_logo: boolean }) => {
  return (
    <div className={ is_logo ? styles.navbarContainer: "" }>
      {
        is_logo &&
        <div className={styles.logo}>
          <Image
            src="/navbar_logo.png"
            alt="My SVG"
            width={134}
            height={44} />
        </div>
      }
      <div className={styles.navbar}>
        <ul>
          <li className={styles.active}>HOME</li>
          <li>BAGS</li>
          <li>SNEAKERS</li>
          <li>BELT</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar