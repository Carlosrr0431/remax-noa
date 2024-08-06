"use client"

import React, { useState, useRef, useEffect } from "react";




import { initMercadoPago } from "@mercadopago/sdk-react";

import { useRouter } from "next/navigation";

import { Toaster, toast } from 'sonner'
import { sendForm } from "../action.js";
import { HiOutlineXMark } from "react-icons/hi2";
import axios from "axios";
import { supabaseClient } from "@/supabase/client.js";
import { useSession } from "next-auth/react";


const ModalPlan = ({ setShowModal2 }) => {

    const { data: session } = useSession()
    const router = useRouter()
    const [planes, setPlanes] = useState("Basico")
    const [listaPrecios, setListaPrecios] = useState();


    const handlePlan = (plan) => {
        setPlanes(plan)
    }

    const handleSubmit = async (plan, monto) => {

        await createPreferenc(plan, monto)
    }

    const createPreferenc = async (plan, monto) => {

        try {

            const response = await axios.post(
                "/api/create_preference",

                {
                    title: planes,
                    quantity: 1,
                    price: 1,
                    name: session?.user.name,
                    description: session?.user.email
                    // price: monto,
                },

            );

            const { result } = response.data
            // router.replace(result.sandbox_init_point)
            router.replace(result.init_point)

        } catch (error) {
            console.log("El error es: " + error);
        }
    };

    useEffect(() => {
        const getSupabaseOficial = async () => {
            let data = await supabaseClient
                .from("planes")
                .select("*").order('id', { ascending: true })

            setListaPrecios(data.data)
        }


        getSupabaseOficial()


    }, [])


    return (


        <div className={`fixed inset-0  z-50 
             flex items-center justify-center h-full w-full 
             `}>


            <div className="w-[40%] bg-white p-8  text-center border border-gray-200 rounded-lg dark:border-gray-700">

                <div className="items-end relative left-[90%]" onClick={() => setShowModal2(false)}>
                    <HiOutlineXMark className="text-white w-[30px] h-[30px] cursor-pointer hover:scale-110" color="black" />
                </div>

                <div className="grid  w-full place-items-center overflow-x-scroll rounded-lg  lg:overflow-visible">
                    <div className="flex divide-x divide-gray-800 row">
                        <button
                            onClick={() => handlePlan("Basico")}
                            className={`${planes == 'Basico' ? 'bg-gray-400' : ''} align-middle  font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6    shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-r-none border-r-0 text-black `}
                            type="button">
                            Basico
                        </button>
                        <button
                            onClick={() => handlePlan("Semi Intenso")}
                            className={`${planes == 'Semi Intenso' ? 'bg-gray-400' : ''} align-middle  font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6    shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-r-none border-r-0 text-black `}
                            type="button">
                            Semi Intenso
                        </button>
                        <button
                            onClick={() => handlePlan("Super Intenso")}
                            className={`${planes == 'Super Intenso' ? 'bg-gray-400' : ''} align-middle  font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6    shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-r-none border-r-0 text-black `}
                            type="button">
                            Super Intenso
                        </button>
                    </div>
                </div>
                <p className="mt-2 sm:mt-4">
                    {
                        listaPrecios != undefined &&
                        <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> {planes == 'Basico' ? listaPrecios[0].precio : planes == "Semi Intenso" ? listaPrecios[1]?.precio : planes == 'Super Intenso' ? listaPrecios[2]?.precio : ''} </strong>
                    }

                    <span className="text-sm font-medium text-gray-700">/mes</span>
                </p>

                <p className="font-medium text-gray-500 dark:text-gray-300">{planes == 'Basico' ? "Incluye 2 clases por semana" : planes == "Semi Intenso" ? 'Incluye 3 clases por semana' : planes == 'Super Intenso' ? 'Incluye todos los dias' : ''}</p>

                <button onClick={() => {
                    let precio;

                    if (planes == "Basico") {
                        precio = Number((listaPrecios[0].precio.replace(/\s+/g, '')).replace(/[$.]/g, ''))
                    } else if (planes == "Semi Intenso") {
                        precio = Number((listaPrecios[1].precio.replace(/\s+/g, '')).replace(/[$.]/g, ''))
                    } else if (planes == "Super Intenso") {
                        precio = Number((listaPrecios[2].precio.replace(/\s+/g, '')).replace(/[$.]/g, ''))
                    }

                    return handleSubmit(planes, precio)
                }} className="w-full px-4 py-2 mt-10 tracking-wide text-black capitalize transition-colors duration-300 transform bg-fondo1 rounded-md hover:bg-black hover:text-yellow-500 focus:outline-none focus:bg-black focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    Comenzá ahora
                </button>
            </div>




        </div>





    );
};

export default ModalPlan;