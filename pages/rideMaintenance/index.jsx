import SideBar from "@/components/sideBar/SideBar";
import styles from './index.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import InputGroup from 'react-bootstrap/InputGroup';
import { BsSearch } from '@react-icons/all-files/bs/BsSearch'
import MaintenanceTable from "@/components/rideMaintenance/MaintenanceTable";
import { useState } from "react";
import maintenanceVideos from '@/components/rideMaintenance/maintenanceVideos'



export default function RideMaintenance() {

    const [videoSelected, setVideoSelected] = useState(1)

    return (
        <div className={`bg-dark text-light ${styles.main}`}>
            <SideBar />
            <div className="row mb-2">
                <div className="col-11 mt-2 d-flex justify-content-end ms-3">
                    <div className="mx-3">

                    </div>
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        <span class="input-group-text" id="basic-addon1"><BsSearch /></span>
                    </div>

                </div>
            </div>
            {maintenanceVideos().filter(elem => elem.id === videoSelected).map(elem => {
                return (
                    <>
                        <div className="row p-2">
                            <img src={elem.image} alt="" />
                        </div>
                        <div className="row px-2">

                            <span>{elem.name}</span>
                        </div>
                        <div className="row px-2 my-2">
                            <div>
                                <span className="badge badge-outline rounded-pill text-bg-secondary"><small>Nível <strong>médio</strong></small></span>
                            </div>
                        </div>
                    </>
                )
            })}


            <div className="row px-3 my-3">
                <div>
                    <MaintenanceTable setVideoSelected={id => setVideoSelected(id)} videoSelected={videoSelected} />
                </div>
            </div>
        </div>
    )
}