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
            <div className="col-3 pt-4">
                <Link href='/myRide'>
                    <div className='row d-flex justify-content-center'>
                        {/* <FontAwesomeIcon icon={faBicycle} className={styles.icons} /> */}
                        <BsHouse className={styles.icons} />
                    </div>
                    {/* <span className={`row d-flex justify-content-center mt-2 ${styles.font}`} >
                        Minha Ride
                    </span> */}
                </Link>
            </div>
            <div className="col-3 pt-4">
                <Link href='/myRide'>
                    <div className='row d-flex justify-content-center'>
                        <BsMap className={styles.icons} />
                        {/* <FontAwesomeIcon icon={faMapLocationDot} className={styles.icons} /> */}
                    </div>
                    {/* <span className={`row d-flex justify-content-center mt-2 ${styles.font}`} >
                        Mapa
                    </span> */}
                </Link>
            </div>
            <div className="col-3 pt-4">
                <div className='row d-flex justify-content-center'>
                    <BiWrench className={styles.icons} />
                    {/* <FontAwesomeIcon icon={faWrench} className={styles.icons} /> */}
                </div>
                {/* <span className={`row d-flex justify-content-center mt-2 ${styles.font}`} >
                    Manutenção
                </span> */}
            </div>
            <div className="col-3 pt-4">
                <div className='row d-flex justify-content-center'>
                    <FiShoppingCart className={styles.icons} />
                    {/* <FontAwesomeIcon icon={faShoppingCart} className={styles.icons} /> */}
                </div>
                {/* <span className={`row d-flex justify-content-center mt-2 ${styles.font}`} >
                    Shopping
                </span> */}
            </div>

        </div>
    )
}