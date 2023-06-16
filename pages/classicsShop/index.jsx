
// import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineLeft } from '@react-icons/all-files/ai/AiOutlineLeft'
import { AiOutlineRight } from '@react-icons/all-files/ai/AiOutlineRight'
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

// import styles from './index.module.css'

import { EffectCards } from "swiper";

const data = [
    {
        name: 'Azul Tricolor',
        price: '7.500,00',
        img: "/AZUL_LISTRA.PNG"
    },
    {
        name: 'Amarelo Canarinho',
        price: '7.500,00',
        img: "/AMARELO_LISTRA.PNG"
    },
    {
        name: 'Branca Colorada',
        price: '7.500,00',
        img: "/BRANCA_LISTRA.PNG"
    },
    {
        name: 'Azul Piscina',
        price: '8.500,00',
        img: "/AZUL_LISTRA_AZUL.PNG"
    },
    {
        name: 'Azul Marítimo',
        price: '8.500,00',
        img: "/AZUL_LISTRAS.PNG"
    },
    {
        name: 'Vermelha Branca',
        price: '8.500,00',
        img: "/VERMELHA_LISTRAS.PNG"
    },
    {
        name: 'Vermelha Fogo',
        price: '8.500,00',
        img: "/VERMELHO_LARANJA.PNG"
    },
]

export default function Teste() {

    const [activeIndex, setActiveIndex] = useState(0)


    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null; // return this null to avoid hydration errors
    }


    return (
        <div className='fadeItem'>
            <div className="row d-flex py-3">
                <div className='text-light' style={{ position: 'absolute', display: 'flex', alignItems: 'center', left: '0', width: '50px' }}>

                    <Link href='/shopping' >

                        <AiOutlineLeft />
                    </Link>
                </div>
                <div className="col-12 d-flex justify-content-center">

                    <span className='text-light'>Clássicas</span>
                </div>
            </div>
            <div className="row">

                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className=""
                    onSlideChange={(props) => setActiveIndex(props.activeIndex)}
                >
                    {data.map(elem => {
                        return (
                            <SwiperSlide className="d-flex justify-content-center align-items-start pe-5">
                                <img src={elem.img} alt="" height={400} />
                            </SwiperSlide>

                        )
                    })}
                </Swiper>

            </div>
            <div className="row" style={{ height: '5vh' }}>
                <div className="col-12 d-flex justify-content-center align-items-center">

                    <span style={{ fontSize: '16px', fontWeight: '425' }} className='text-light'>
                        {data[activeIndex].name}
                    </span>
                </div>
            </div>
            <div className="row " style={{ height: '20vh' }}>
                <div className="col-12 d-flex justify-content-start align-items-start" style={{ overflow: 'scroll' }}>
                    <img src="/RIDE_ATTRIBUTES.png" alt="" style={{ height: '20vh' }} />
                </div>
            </div>

            <div className="row" style={{ height: '10vh' }}>
                <div className="col-12 d-flex justify-content-center align-items-center">

                    <span style={{ fontSize: '16px', fontWeight: '425' }} className='text-light'>
                        R$ {data[activeIndex].price}
                    </span>
                    <div className='text-light' style={{ position: 'absolute', display: 'flex', alignItems: 'center', right: '0', width: '50px' }}>

                        <Link href='/shopping' >

                            <AiOutlineRight />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}