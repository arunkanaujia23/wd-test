import React from 'react'
import styles from './brand.module.scss'
const Brand = () => {
    return (
        <div className='md:container md:mx-auto py-4'>
            <div className={`${styles.brandText} text-center`}>Trusted by 1,000+ Companies Worldwide</div>
            <div className={`${styles.brandLogoContainer} `}>
                {
                    Array(6).fill().map((_, index) => <div key={index} className={`${styles.brandLogo}`}>
                        <img src="\assets\images\google.png" alt="" className='object-cover' height={100} width={150} />
                    </div>)
                }
            </div>
        </div>
    )
}

export default Brand