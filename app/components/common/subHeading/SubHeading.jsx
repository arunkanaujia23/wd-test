import React from 'react'
import styles from './subHeading.module.scss'
const SubHeading = ({text}) => {
  return (
    <div className={styles.subHeading}>{text}</div>
  )
}

export default SubHeading