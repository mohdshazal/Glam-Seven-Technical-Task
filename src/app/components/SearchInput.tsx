import React from 'react'
import styles from './SearchInput.module.scss'
const SearchInput = () => {
  return (
    <div className={styles.searchInputContainer}>
        <input placeholder='Search query...'/>
        <button>Search</button>
    </div>
  )
}

export default SearchInput