import React from 'react'
import styles from './topHeader.module.scss'

const TopHeader = () => {
  return (
    <div className={styles.topHeader}>
        <div className='md:container md:mx-auto p-2 '>
            <div className='flex justify-center items-center text-white font-semibold relative'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ipsa quos odit Molestiae, nemo?  <div className='absolute  right-0 cursor-pointer'> X</div> </div>
           
        </div>
    </div>
  )
}

export default TopHeader