import AccessoriesCard from "@/components/accessoriesShop/AccessorieCard";
import Link from "next/link";
import { AiOutlineLeft } from '@react-icons/all-files/ai/AiOutlineLeft'
import { AiOutlineRight } from '@react-icons/all-files/ai/AiOutlineRight'
import ShoppingCart from "@/components/accessoriesShop/ShoppingCart";
import AccessoriesData from "@/components/accessoriesShop/AccessoriesData";
import { useState } from "react";



export default function AccessoriesShop() {

    const data = AccessoriesData()

    const [list, setList] = useState([])

    const handleChange = (obj, checked) => {


        console.log('ckecked', checked)


    }

    return (
        <div className="fadeItem">
            <div className="row d-flex py-3">
                <div className='text-light' style={{ position: 'absolute', display: 'flex', alignItems: 'center', left: '0', width: '50px' }}>

                    <Link href='/shopping' >

                        <AiOutlineLeft />
                    </Link>
                </div>
                <div className="col-12 d-flex justify-content-center">

                    <span className='text-light'>Acessórios</span>
                </div>
            </div>


            <ShoppingCart bike_id={'1'} list={[]} />



            <div className="px-3  " style={{ overflowY: 'scroll', height: '300px' }} >
                {data.map(elem => {
                    return (
                        <div className="row my-2 "  >
                            <AccessoriesCard
                                src={elem.img}
                                name={elem.name}
                                price={elem.price}
                                handleChange={(value, checked) => handleChange(value, checked)}
                                list={list} />
                        </div>
                    )
                })}


            </div>
            <div style={{ height: '5vh', width: '100%', position: 'absolute', bottom: '0' }}>
                <div className="col-12 d-flex justify-content-center align-items-center">
                    <span className='text-light span'>
                        Finalizar compra
                    </span>

                </div>
            </div>
            <div className='text-light ' style={{ position: 'absolute', display: 'flex', alignItems: 'center', right: '0', bottom: '5px', width: '50px', height: '5vh' }}>

                <Link href='/accessoriesShop' >
                    <div>

                        <AiOutlineRight />
                    </div>
                </Link>
            </div>
        </div >

    )
}