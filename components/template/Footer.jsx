import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Footer.module.css'
import { faBicycle, faHouse, faMap, faMapLocation, faMapLocationDot, faShop, faShoppingCart, faWrench } from '@fortawesome/free-solid-svg-icons'
import { BsHouse } from '@react-icons/all-files/bs/BsHouse'
import { BsMap } from '@react-icons/all-files/bs/BsMap'
import { BsWrench } from '@react-icons/all-files/bs/BsWrench'

import { BiWrench } from '@react-icons/all-files/bi/BiWrench'
import { FiShoppingCart } from '@react-icons/all-files/fi/FiShoppingCart'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'


export default function Footer() {


    const router = useRouter()
    const newRoute = router.asPath
    const myRideRoute = newRoute === '/myRide'
    const mapRoute = newRoute === '/map'
    const maintenanceRoute = newRoute === '/rideMaintenance'
    const maintenanceTutorialsRoute = newRoute === '/tutorialsMaintenance'
    const shoppingRoute = newRoute === '/shopping'
    const shopClassicsRoute = newRoute === '/shopClassics'


    return (
        <div className={`${styles.main} shadow text-light `} >
            <div className={`${styles.footerPosition} d-flex justify-content-around`}>

                <div className={`${styles.iconsTag}`} style={{ height: '100%' }}>
                    <Link href='/myRide'>
                        <a className={`${styles.iconsTag} ${myRideRoute ? styles.iconSelected : ''}`}>

                            <div >
                                <BsHouse />
                            </div>
                        </a>
                    </Link>
                </div>
                <div className={`${styles.iconsTag}`} style={{ height: '100%' }}>
                    <Link href='/map'>
                        <a className={`${styles.iconsTag} ${mapRoute ? styles.iconSelected : ''}`}>
                            <div>
                                <BsMap />
                            </div>
                        </a>
                    </Link>
                </div>
                <div className={`${styles.iconsTag}`} style={{ height: '100%' }}>
                    <Link href='/rideMaintenance'>
                        <a className={`${styles.iconsTag} ${maintenanceRoute || maintenanceTutorialsRoute ? styles.iconSelected : ''}`}>

                            <div>
                                <BiWrench />
                            </div>
                        </a>

                    </Link>
                </div>
                <div className={`${styles.iconsTag}`} style={{ height: '100%' }}>
                    <Link href='/shopping' >
                        <a className={`${styles.iconsTag} ${shoppingRoute || shopClassicsRoute ? styles.iconSelected : ''}`}>
                            <div>
                                <FiShoppingCart />
                            </div>
                        </a>

                    </Link>
                </div>


            </div>

        </div>
    )
}