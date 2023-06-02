import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Footer.module.css'
import { faBicycle, faHouse, faMap, faMapLocation, faMapLocationDot, faShop, faShoppingCart, faWrench } from '@fortawesome/free-solid-svg-icons'
import { BsHouse } from '@react-icons/all-files/bs/BsHouse'
import { BsMap } from '@react-icons/all-files/bs/BsMap'
import { BsWrench } from '@react-icons/all-files/bs/BsWrench'

import { BiWrench } from '@react-icons/all-files/bi/BiWrench'
import { FiShoppingCart } from '@react-icons/all-files/fi/FiShoppingCart'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {


    const pathname = usePathname()
    const myRideRoute = pathname === '/myRide'
    const mapRoute = pathname === '/map'
    const maintenanceRoute = pathname === '/maintenance'
    const shopRoute = pathname === '/shop'




    return (
        <div className={`${styles.main} shadow text-light `} >
            <div className={`${styles.footerPosition} d-flex justify-content-around`}>

                <div className={`${styles.iconsTag}`} style={{ height: '100%' }}>
                    <Link href='/myRide' className={`${styles.iconsTag} ${myRideRoute ? styles.iconSelected : ''}`}>
                        <div >
                            <BsHouse />
                        </div>
                    </Link>
                </div>
                <div className={`${styles.iconsTag}`} style={{ height: '100%' }}>
                    <Link href='/map' className={`${styles.iconsTag} ${mapRoute ? styles.iconSelected : ''}`}>
                        <div>
                            <BsMap />

                        </div>

                    </Link>
                </div>
                <div className={`${styles.iconsTag}`} style={{ height: '100%' }}>
                    <Link href='/myRide' className={`${styles.iconsTag} ${maintenanceRoute ? styles.iconSelected : ''}`}>
                        <div>
                            <BiWrench />
                        </div>

                    </Link>
                </div>
                <div className={`${styles.iconsTag}`} style={{ height: '100%' }}>
                    <Link href='/myRide' className={`${styles.iconsTag} ${shopRoute ? styles.iconSelected : ''}`}>
                        <div>
                            <FiShoppingCart />
                        </div>

                    </Link>
                </div>


            </div>

        </div>
    )
}