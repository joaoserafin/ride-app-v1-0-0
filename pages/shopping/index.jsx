
import Link from 'next/link'
import styles from './index.module.css'


export default function Shopping(props) {



    return (
        <div className='fadeItem'>
            <Link href='/classicsShop' >
                <div className={`card text-bg-dark my-2 mx-3`}>
                    {/* <div className={`card text-bg-dark my-2 mx-3 ${styles.cardSize}`}> */}
                    <img src="./rideMaintenance_1.png" className="card-img" alt="..." />
                    <div className={`card-img-overlay ${styles.cardBackground} `} >
                        <h5 className="card-title fw-bold mt-3" >Clássicas</h5>
                        <p className="card-text">
                            Adquira a Ride clássica, combinando praticidade e estilo para tornar suas viagens urbanas mais sustentáveis.
                        </p>
                    </div>
                </div>
            </Link>
            {/* <div className={`card text-bg-dark my-2 mx-3`}>
                <div className={`card text-bg-dark my-2 mx-3 ${styles.cardSize}`}>
                <img src="./rideMaintenance_3.png" className="card-img" alt="..." />
                <div className={`card-img-overlay ${styles.cardBackground} `} >
                    <h5 className="card-title fw-bold mt-3" >Peças e Ferramentas</h5>

                    <p className="card-text">
                        Peças e ferramentas para a sua Ride em um só lugar.
                    </p>
                </div>
            </div>
            <div className={`card text-bg-dark my-2 mx-3`}>
                <div className={`card text-bg-dark my-2 mx-3 ${styles.cardSize}`}>
                <img src="./rideMaintenance_2.png" className="card-img" alt="..." />
                <div className={`card-img-overlay ${styles.cardBackground} `} >
                    <h5 className="card-title fw-bold mt-3" >Histórico de Manutenção</h5>

                    <p className="card-text">
                        Acompanhe todas as atividades de manutenção da sua Ride de forma organizada e prática
                    </p>
                </div>
            </div> */}

        </div>
    )
}