import { useState } from "react"



export default function MaintenanceTable(props) {

    const [status, setStatus] = useState('videos')



    return (
        <>

            <div className="row">
                <div className={`col-4 text-center px-2 ${status === 'videos' ? 'border-bottom' : ''}`}>
                    <span onClick={() => setStatus('videos')}
                        className={status === 'videos' ? 'fw-bold' : ''}><small>Vídeos</small></span>
                </div>
                <div className={`col-4 text-center px-2 ${status === 'ferramentas' ? 'border-bottom' : ''}`}>
                    <span onClick={() => setStatus('ferramentas')}
                        className={status === 'ferramentas' ? 'fw-bold' : ''}><small>Ferramentas</small></span>
                </div>
                <div className={`col-4 text-center px-2 ${status === 'pecas' ? 'border-bottom' : ''}`}>
                    <span onClick={() => setStatus('pecas')}
                        className={status === 'pecas' ? 'fw-bold' : ''}><small>Peças</small></span>
                </div>
            </div>
            <div style={{ overflow: 'scroll !important' }}>

                <div className="row  my-3">
                    <div className=" d-flex">

                        <div>
                            <img src="/MAINTENENCE_IMAGE_2.png" alt="" height={80} />
                        </div>
                        <div className="col px-2">
                            <div className="d-flex slign-items-top">
                                <span style={{ fontSize: '14px' }}>Troca de pastilhas de freio</span>
                            </div>
                            <div>
                                <span style={{ fontSize: '10px' }}>Nível Fácil</span>
                            </div>
                            <div>
                                <span style={{ fontSize: '10px' }}>2 min</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row  my-3">
                    <div className=" d-flex">

                        <div>
                            <img src="/MAINTENENCE_IMAGE_2.png" alt="" height={80} />
                        </div>
                        <div className="col px-2">
                            <div className="d-flex slign-items-top">
                                <span style={{ fontSize: '14px' }}>Troca de pastilhas de freio</span>
                            </div>
                            <div>
                                <span style={{ fontSize: '10px' }}>Nível Fácil</span>
                            </div>
                            <div>
                                <span style={{ fontSize: '10px' }}>2 min</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row  my-3">
                    <div className=" d-flex">

                        <div>
                            <img src="/MAINTENENCE_IMAGE_2.png" alt="" height={80} />
                        </div>
                        <div className="col px-2">
                            <div className="d-flex slign-items-top">
                                <span style={{ fontSize: '14px' }}>Troca de pastilhas de freio</span>
                            </div>
                            <div>
                                <span style={{ fontSize: '10px' }}>Nível Fácil</span>
                            </div>
                            <div>
                                <span style={{ fontSize: '10px' }}>2 min</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

        // <small>
        //     <table className="table table-dark">
        //         <thead>
        //             <tr>
        //                 <td className="text-center">Vídeos</td>
        //                 <td className="text-center">Ferramentas</td>
        //                 <td className="text-center">Peças</td>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             <tr className="d-flex" >
        //                 <td colSpan={3}>

        //                     <div className="col">
        //                         <img src="/MAINTENENCE_IMAGE_2.png" alt="" height={100} />
        //                     </div>
        //                     <div className="col  justify-content-between bg-light">
        //                         <div>
        //                             <span className="fs-5">Troca de pastilhas de freio</span>
        //                         </div>
        //                         <div>
        //                             <span>Nível Fácil</span>
        //                         </div>
        //                         <div>
        //                             <span>2 min</span>
        //                         </div>


        //                     </div>
        //                 </td>
        //             </tr>

        //         </tbody>

        //     </table>
        // </small>
    )
}