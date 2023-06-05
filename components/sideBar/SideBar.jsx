
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './SideBar.module.css'
import { faList, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function SideBar(props) {

    const [sideBarShow, setSideBarSHow] = useState(false)

    return (
        <div className={sideBarShow ? styles.mainShow : styles.mainHide}>
            {!sideBarShow && (
                <span
                    className={`p-3 fs-1 ${styles.hamb}`}
                    onClick={() => setSideBarSHow(true)}>
                    <FontAwesomeIcon icon={faList} />x
                </span>
            )}
            <div className="row">
                <div className="d-flex justify-content-end">
                    <span
                        className='p-3 fs-1'
                        onClick={() => setSideBarSHow(false)}>
                        <FontAwesomeIcon icon={faXmark} />x
                    </span>
                </div>
            </div>
        </div>
    )
}