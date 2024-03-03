import React from 'react'
import styles from './BreadCrumbs.module.scss'
const BreadCrumbs = () => {
  return (
    <div className={styles.breadCrumbsContainer}>
        <div>
            <span className={styles.active}>Home <span className={styles.slash}>/</span> Hot Deal</span> <span className={styles.slash}>/</span> Nike Airmax 270 React
        </div>
    </div>
  )
}

export default BreadCrumbs