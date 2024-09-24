import React, { Children } from 'react'
import styles from './heading.module.scss'

const Heading = ({ children}) => {
  return (
    <div className={styles.heading}>
        {children}
    </div>
  )
}

export default Heading