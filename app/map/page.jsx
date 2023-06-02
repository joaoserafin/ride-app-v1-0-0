
'use client';

import dynamic from "next/dynamic"
import styles from './page.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faLeftLong } from "@fortawesome/free-solid-svg-icons";

const Map = dynamic(() => import('../../components/map/Map'), {
    loading: () => <p>loading...</p>,
    ssr: false
})



export default function MapPage() {



    return (
        <>
            <div className={`${styles.header}`} >
                <div className="row py-3 ">
                    {/* <div className="col d-flex justify-content-center">
                        <button className="btn btn-sm btn-secondary">
                            <FontAwesomeIcon icon={faLeftLong} className="p" />
                        </button>
                    </div> */}
                    <div className="col-9 d-flex justify-content-center ms-3">
                        <input type="text" className="form-control" placeholder="Para onde vamos?" />
                    </div>
                    <div className="col d-flex justify-content-center">
                        <button className="btn  btn-secondary">
                            <FontAwesomeIcon icon={faGear} />
                        </button>

                    </div>
                    {/* <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input> */}
                </div>


            </div>
            <Map />
        </>
    )



}