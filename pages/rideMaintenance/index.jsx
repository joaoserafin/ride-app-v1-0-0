
import Link from 'next/link'
import styles from './index.module.css'


export default function RideMaintenance(props) {



    return (
        <div className='fadeItem'>
            <Link href='/tutorialsMaintenance' >
                <div class={`card text-bg-dark my-2 mx-3`}>
                    {/* <div class={`card text-bg-dark my-2 mx-3 ${styles.cardSize}`}> */}
                    <img src="./rideMaintenance_1.png" class="card-img" alt="..." />
                    <div class={`card-img-overlay ${styles.cardBackground} `} >
                        <h5 class="card-title fw-bold mt-3" >Tutoriais</h5>

                        <p class="card-text">
                            Tutoriais detalhados que fornecem instruções passo a passo sobre como realizar a manutenção de sua Ride
                        </p>
                    </div>
                </div>
            </Link>
            <div class={`card text-bg-dark my-2 mx-3`}>
                {/* <div class={`card text-bg-dark my-2 mx-3 ${styles.cardSize}`}> */}
                <img src="./rideMaintenance_3.png" class="card-img" alt="..." />
                <div class={`card-img-overlay ${styles.cardBackground} `} >
                    <h5 class="card-title fw-bold mt-3" >Peças e Ferramentas</h5>

                    <p class="card-text">
                    Peças e ferramentas para a sua Ride em um só lugar.
                    </p>
                </div>
            </div>
            <div class={`card text-bg-dark my-2 mx-3`}>
                {/* <div class={`card text-bg-dark my-2 mx-3 ${styles.cardSize}`}> */}
                <img src="./rideMaintenance_2.png" class="card-img" alt="..." />
                <div class={`card-img-overlay ${styles.cardBackground} `} >
                    <h5 class="card-title fw-bold mt-3" >Histórico de Manutenção</h5>

                    <p class="card-text">
                    Acompanhe todas as atividades de manutenção da sua Ride de forma organizada e prática
                    </p>
                </div>
            </div>

        </div>
    )
}