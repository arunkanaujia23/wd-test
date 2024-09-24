import React from 'react'
import styles from './popular.module.scss'
import TitleHeading from '../common/titleHeading/TitleHeading'
import Heading from '../common/heading/Heading'
import SubHeading from '../common/subHeading/SubHeading'

const Popular = () => {
    return (
        <div className={styles.popular}>
            <div className='md:container md:mx-auto'>
                <TitleHeading title={'Explore Courses'} />
                <Heading>
                    Our Most <span>Popular</span> Courses
                </Heading>
                <SubHeading text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quidem.'} />

                <div className={styles?.popularCourses}>
                    <div className={styles?.popularCoursesCard}>
                        <div className={styles?.popularCoursesCardImage}><img src="https://images.pexels.com/photos/3330895/pexels-photo-3330895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
                        <div className={styles?.popularCoursesCardContent}>
                            <div className={styles?.popularCoursesCardTag}>Design</div>
                            <div className={styles?.linkContainer}>
                                <a href="#"> Lorem ipsum dolor sit amet</a>
                                <div className={styles?.arrow}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                                    </svg>

                                </div>


                            </div>
                            <p className={styles?.popularCoursesCardPara}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium impedit rerum velit. Incidunt obcaecati repudiandae omnis iusto. Culpa rem aspernatur, molestias sunt, officia tempore nulla temporibus deleniti, ut architecto iusto. </p>
                           

                            <div className={styles?.popularCoursesCardRating}>
                                <span className={styles?.rating}>4.5  <span className={styles?.ratingStar}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>

                                </span></span>
                               
                                <span className={styles?.totalRating}>(16,523)</span>
                            </div>

                            <div className={styles?.popularCoursesCardFooter}>
                                <div className={styles?.profile}>
                                    <div className={styles?.profileImage}>
                                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                    </div>
                                    <div className={styles?.profileText}>
                                        <div className={styles?.name}>John Doe</div>
                                        <div className={styles?.number}>320 Enrolled</div>
                                    </div>
                                </div>
                                <div className={styles?.price}>$17.84</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Popular