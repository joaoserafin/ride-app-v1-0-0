
'use client';

import dynamic from "next/dynamic"
import styles from './page.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGear, faLeftLong } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";

const Map = dynamic(() => import('../../components/map/Map'), {
    loading: () => <p>loading...</p>,
    ssr: false
})


import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';



export default function MapPage() {

    const [currentLocation, setCurrentLocation] = useState('')
    const [routeFilter, setRouterFilter] = useState('Rota mais rápida')

    useEffect(() => {
        getLocation()
    }, [])


    const getLocation = () => {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position.coords.latitude)
                setCurrentLocation(position.coords)

            })
        }
    }



    return (
        <>
            <div className={`${styles.header}`} >
                <div className="row py-3 ">
                    <div className="col-9 d-flex justify-content-center ms-3">
                        <InputGroup>
                            <DropdownButton class="btn bgSecondary text-light dropdown-toggle" type="button" variant="secondary" data-bs-toggle="dropdown" aria-expanded="false" title={<FontAwesomeIcon icon={faBars} />}>
                                <Dropdown.Item onClick={() => setRouterFilter('Rota inteligente')}>Rota inteligente</Dropdown.Item>
                                <Dropdown.Item onClick={() => setRouterFilter('Rota mais rápida')}>Rota mais rápida</Dropdown.Item>
                                <Dropdown.Item onClick={() => setRouterFilter('Rota turística')}>Rota turística</Dropdown.Item>
                            </DropdownButton>
                            <input type="text" className="form-control" placeholder="Para onde vamos?" />
                        </InputGroup>

                    </div>
                    <div className="col d-flex justify-content-center">
                        <button className=" btn btn-secondary text-light bgSecondary">
                            <FontAwesomeIcon icon={faGear} />
                        </button>

                    </div>
                    <small className="text-light ms-3">{routeFilter}.</small>
                </div>


            </div>
            {currentLocation && (
                <Map currentLocation={[currentLocation.latitude, currentLocation.longitude]} />

            )}
        </>
    )



}