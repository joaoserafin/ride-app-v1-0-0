import styles from './index.module.css'


export default function MyRide() {



    return (
        <div>

            <div className={`row mt-4 mb-2`}>
                <img src="verde_tiffany.png" className="myRideImg" />

            </div>

            <div className="row">
                <div className="col-4 d-flex justify-content-center">
                    <div className={`${styles.statusTag}`}>
                        <div>
                            <p>100</p>
                            <p>100</p>
                            <p>100</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}