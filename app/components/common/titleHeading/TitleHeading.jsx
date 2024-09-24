import React from 'react'
import styles from './titleHeading.module.scss'

const TitleHeading = ({title}) => {
  return (
    <div className={styles.titleHeading}>
      <span>{title}</span>
    </div>
  )
}

export default TitleHeading

