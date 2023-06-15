
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './SideBar.module.css'
import { faBars, faList, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { FaBars } from '@react-icons/all-files/fa/FaBars'
import { HiOutlineX } from '@react-icons/all-files/hi/HiOutlineX'


export default function SideBar(props) {

    const [sideBarShow, setSideBarSHow] = useState(false)

    return (
        <div className={`${sideBarShow ? styles.mainShow : styles.mainHide} shadow px-3 py-0`}>
            {!sideBarShow && (
                <span
                    className={`py-3 px-3 ${styles.hamb} fadeItem text-light`}
                    onClick={() => setSideBarSHow(true)}>
                    <FaBars />
                    {/* <FontAwesomeIcon icon={faBars} /> */}
                </span>
            )}
            <div className="row">
                <div className="d-flex justify-content-end">
                    <span
                        className='py-3 px-3 fs-3 text-dark' type='button'
                        onClick={() => setSideBarSHow(false)}>
                        <HiOutlineX />
                    </span>
                </div>
            </div>
            <div className="row">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item py-4">Roda Dianteira</li>
                    <li className="list-group-item py-4">Roda Traseira</li>
                    <li className="list-group-item py-4">Controlador</li>
                    <li className="list-group-item py-4">Bateria</li>
                    <li className="list-group-item py-4">Freios</li>
                    <li className="list-group-item py-4">Acessórios</li>
                </ul>
            </div>
        </div>
    )
}