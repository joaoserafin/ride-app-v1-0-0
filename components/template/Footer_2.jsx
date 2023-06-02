import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Footer.module.css'
import { faBicycle, faHouse, faMap, faMapLocation, faMapLocationDot, faShop, faShoppingCart, faWrench } from '@fortawesome/free-solid-svg-icons'
import { BsHouse } from '@react-icons/all-files/bs/BsHouse'
import { BsMap } from '@react-icons/all-files/bs/BsMap'
import { BsWrench } from '@react-icons/all-files/bs/BsWrench'

import { BiWrench } from '@react-icons/all-files/bi/BiWrench'
import { FiShoppingCart } from '@react-icons/all-files/fi/FiShoppingCart'
import Link from 'next/link'

export default function Footer() {


    return (
        <div className={`${styles.main} shadow text-light d-flex justify-content-around`} >
            <div className={`${styles.footerPosition} d-flex`}>


                <div className={`col-3 ${styles.iconsTag}`} style={{ height: '100%' }}>
                    <Link href='/myRide' className={`${styles.iconsTag}`}>
                        <div>
                            <BsHouse />
                        </div>
                    </Link>
                </div>
                <div className={`col-3 ${styles.iconsTag}`} style={{ height: '100%' }}>
                    <Link href='/map' className={`${styles.iconsTag}`}>
                        <div>
                            <BsMap />

                        </div>

                    </Link>
                </div>
                <div className={`col-3 ${styles.iconsTag}`} style={{ height: '100%' }}>
                    <Link href='/myRide' className={`${styles.iconsTag}`}>
                        <div>
                            <BiWrench />
                        </div>

                    </Link>
                </div>
                <div className={`col-3 ${styles.iconsTag}`} style={{ height: '100%' }}>
                    <Link href='/myRide' className={`${styles.iconsTag}`}>
                        <div>
                            <FiShoppingCart />
                        </div>

                    </Link>
                </div>


            </div>

        </div>
    )
}