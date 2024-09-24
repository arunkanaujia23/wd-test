import React from 'react'
import styles from './timeline.module.scss'
import TitleHeading from '../common/titleHeading/TitleHeading'
import Heading from '../common/heading/Heading'
import SubHeading from '../common/subHeading/SubHeading'

const Timeline = () => {
  return (
    <div className={styles.popular}>
      <div className='md:container md:mx-auto'>
        <div className='text-center'>

          <Heading>
            All-In-One For <span>Your Child</span>
          </Heading>
          <SubHeading text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quidem.'} />
        </div>

        <div className={styles?.timelineCardContainer}>
          <div className={styles?.timelineCard}>
            <div className={styles?.timelineCardImage}>
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-file-earmark-break-fill" viewBox="0 0 16 16">
                <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V9H2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2zM2 12h12v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zM.5 10a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1z" />
              </svg>

            </div>
            <div className={styles?.timelineCardContent}>
              <div className={styles?.timelineCardHeading}>Lorem ipsum dolor sit amet</div>
              <div className={styles?.timelineCardPara}>Lorem ipsum dolor sit  Lorem ipsum dolor sit  amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Timeline