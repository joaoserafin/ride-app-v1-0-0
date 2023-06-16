
// import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineLeft } from '@react-icons/all-files/ai/AiOutlineLeft'
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
        price: '7.500,00'
    },
    {
        name: 'Amarelo Canarinho',
        price: '7.500,00'
    },
    {
        name: 'Branca Colorada',
        price: '7.500,00'
    },
    {
        name: 'Azul Piscina',
        price: '8.500,00'
    },
    {
        name: 'Azul Marítimo',
        price: '8.500,00'
    },
    {
        name: 'Vermelha Branca',
        price: '8.500,00'
    },
    {
        name: 'Vermelha Fogo',
        price: '8.500,00'
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
            <div className="row d-flex py-3 ps-3">
                <div className="col-2">
                    <Link href='/shopping'>
                        <AiOutlineLeft />
                    </Link>
                </div>
                <div className="col-8 d-flex justify-content-center">

                    <span>Clássicas</span>
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
                    <SwiperSlide className="d-flex justify-content-center align-items-start pe-5">
                        <img src="/AZUL_LISTRA.PNG" alt="" height={400} />
                    </SwiperSlide>
                    <SwiperSlide className="d-flex justify-content-center align-items-start pe-5">
                        <img src="/AMARELO_LISTRA.PNG" alt="" height={400} />
                    </SwiperSlide>
                    <SwiperSlide className="d-flex justify-content-center align-items-start pe-5">
                        <img src="/BRANCA_LISTRA.PNG" alt="" height={400} />
                    </SwiperSlide>
                    <SwiperSlide className="d-flex justify-content-center align-items-start pe-5">
                        <img src="/AZUL_LISTRA_AZUL.PNG" alt="" height={400} />
                    </SwiperSlide>
                    <SwiperSlide className="d-flex justify-content-center align-items-start pe-5">
                        <img src="/AZUL_LISTRAS.PNG" alt="" height={400} />
                    </SwiperSlide>
                    <SwiperSlide className="d-flex justify-content-center align-items-start pe-5">
                        <img src="/VERMELHA_LISTRAS.PNG" alt="" height={400} />
                    </SwiperSlide>
                    <SwiperSlide className="d-flex justify-content-center align-items-start pe-5">
                        <img src="/VERMELHO_LARANJA.PNG" alt="" height={400} />
                    </SwiperSlide>
                </Swiper>



            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center mt-3">

                    <span style={{ fontSize: '16px', fontWeight: '425' }}>
                        {data[activeIndex].name}
                    </span>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <img src="/RIDE_ATTRIBUTES.png" alt="" height={100} style={{ overflow: 'scroll' }} />
                </div>
            </div>

            <div className="row">
                <div className="col-12 d-flex justify-content-center mt-3">

                    <span style={{ fontSize: '16px', fontWeight: '425' }}>
                        R$ {data[activeIndex].price}
                    </span>
                </div>
            </div>
        </div>
    )
}