// import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineLeft } from '@react-icons/all-files/ai/AiOutlineLeft'
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import styles from './index.module.css'

import { EffectCards } from "swiper";




export default function ShopClassics() {


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
                    className="mySwiper"
                >
                    <SwiperSlide className="d-flex justify-content-center align-items-start pe-5">
                        <img src="/AZUL_LISTRA.png" alt="" height={400} />
                    </SwiperSlide>
                    <SwiperSlide className="d-flex justify-content-center align-items-start pe-5">
                        <img src="/AMARELO_LISTRA.png" alt="" height={400} />
                    </SwiperSlide>
                    <SwiperSlide className="d-flex justify-content-center align-items-start pe-5">
                        <img src="/BRANCA_LISTRA.png" alt="" height={400} />
                    </SwiperSlide>
                </Swiper>



            </div>

        </div>
    )
}