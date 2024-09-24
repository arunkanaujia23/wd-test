import React from 'react'
import styles from './blog.module.scss'
import TitleHeading from '../common/titleHeading/TitleHeading'
import Heading from '../common/heading/Heading'
import SubHeading from '../common/subHeading/SubHeading'

const Blog = () => {
  return (
    <div className={styles.popular}>
        <div className='md:container md:mx-auto'> 
           <div className='text-center'>
           
            <Heading>
                 <span>Latest</span> News and Resources
            </Heading>
           <SubHeading text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quidem.'} />
           </div>
        </div>
    </div>
  )
}

export default Blog