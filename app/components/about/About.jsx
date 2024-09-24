import React from 'react'
import styles from './about.module.scss'
import TitleHeading from '../common/titleHeading/titleHeading'
import Heading from '../common/heading/Heading'

const About = () => {
    return (
        <div className={`${styles.aboutContainer}`}>
            <div className='md:container md:mx-auto'>
                <div className={`${styles.about}`}>
                    <div className={`${styles.aboutImageWarper}`}>
                        <div className={`${styles.aboutImageBig}`}>
                            <img src="https://images.pexels.com/photos/3330895/pexels-photo-3330895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                        <div className={`${styles.aboutImageSmallWrapper}`}>
                            <div className={`${styles.aboutImageSmall}`}>
                            <img src="https://images.pexels.com/photos/3330895/pexels-photo-3330895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </div>
                            <div className={`${styles.aboutImageSmall}`}>
                            <img src="https://images.pexels.com/photos/3330895/pexels-photo-3330895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.aboutTextWrapper}`}>
                        <TitleHeading title={'About Us'} />
                        <Heading>
                            <span>Who</span> We Are ?
                        </Heading>
                        <p className={`${styles.para}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum eaque voluptatum at aperiam eveniet nihil, quas esse aliquam perferendis! Nihil, laborum! A, obcaecati asperiores ipsam amet soluta fuga nostrum sunt!</p>
                        <p className={`${styles.para}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum eaque voluptatum at aperiam eveniet nihil, quas esse aliquam perferendis! Nihil, laborum! A, obcaecati asperiores ipsam amet soluta fuga nostrum sunt!</p>

                        <div className={`${styles.btnWrapper}`}>
                            <button className={`${styles.btn}`}>
                                <span>Know More</span>

                                <div className={`${styles.btnIcon}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg>

                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About