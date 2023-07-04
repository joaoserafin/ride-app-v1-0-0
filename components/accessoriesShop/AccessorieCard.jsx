


export default function accessoriesCard(props) {



    return (
        <div class="card" style={{ backgroundColor: '#505050' }} >
            <div class="card-body d-flex" style={{ height: '100px', padding: '10px' }}>
                <div style={{ width: '75px', height: '75px', }} className="d-flex align-items-center rounded">
                    <img src={props.src} alt="border-radius" height={65} className="rounded" />
                </div>
                <div className="col">
                    <div className="row">
                        <span className="span fs-5 text-light">
                            {props.name}
                        </span>
                    </div>
                    <div className="row mt-2">
                        <span className="span text-light" style={{ fontSize: '12px' }}>
                            Valor: R$ {props.price}
                        </span>

                    </div>

                </div>
                <div className="col-1">
                    <div className="d-flex justify-content-end">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={(e) => props.handleChange(elem, e.target.checked)} checked={props.list.find(elem => elem._id === props._id)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}