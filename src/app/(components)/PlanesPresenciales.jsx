"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import Imagenfondo1 from '../public/exercise-weights-iron-dumbbell-with-extra-plates.jpg'

import { signIn, useSession, signOut } from 'next-auth/react'
import { supabaseClient } from '@/supabase/client'
import { useRouter } from "next/navigation";
import axios from 'axios'

import DotLoader from "react-spinners/DotLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};


export const PlanesPresenciales = () => {

    const [planes, setPlanes] = useState("Basico")
    const [listaPrecios, setListaPrecios] = useState();
    let [color, setColor] = useState("#000000");
    const router = useRouter()

    const { data: session } = useSession()


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
                    price: 10,
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

    // useEffect(() => {


    //     if (session?.user?.name != undefined) {

    //         setTimeout(async () => {
    //             await signOut({
    //                 callbackUrl: "/",
    //             })
    //         }, 600000000);

    //     }
    // }, [session])

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
        <div class="relative w-full h-full">
            <div class="my-10 xl:my-0 mx-auto px-2 py-8 z-40 relative w-full h-full">

                <div class="container mx-auto grid grid-cols-1 gap-8 mt-6 xl:mt-[150px] xl:gap-12 md:grid-cols-2 lg:grid-cols-2 w-full z-40">
                    <div class="w-full bg-white p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
                        <div class="grid  w-full place-items-center overflow-x-scroll rounded-lg  lg:overflow-visible">
                            <div class="flex divide-x divide-gray-800 row w-full">
                                <button
                                    onClick={() => handlePlan("Basico")}
                                    className={`${planes == 'Basico' ? 'bg-gray-400' : ''} align-middle  font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs px-2 md:px-6     shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-r-none border-r-0 text-black `}
                                    type="button">
                                    Basico
                                </button>
                                <button
                                    onClick={() => handlePlan("Semi Intenso")}
                                    className={`${planes == 'Semi Intenso' ? 'bg-gray-400' : ''} align-middle  font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-2 md:px-6    shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-r-none border-r-0 text-black `}
                                    type="button">
                                    Semi Intenso
                                </button>
                                <button
                                    onClick={() => handlePlan("Super Intenso")}
                                    className={`${planes == 'Super Intenso' ? 'bg-gray-400' : ''} align-middle  font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-2 md:px-6    shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-r-none border-r-0 text-black `}
                                    type="button">
                                    Super Intenso
                                </button>
                            </div>
                        </div>
                        <p class="mt-2 sm:mt-4">

                            {listaPrecios != undefined ? <div>
                                <strong class="text-3xl font-bold text-gray-900 sm:text-4xl"> {planes == 'Basico' ? listaPrecios != undefined && listaPrecios[0].precio : planes == "Semi Intenso" ? listaPrecios != undefined && listaPrecios[1].precio : planes == 'Super Intenso' ? listaPrecios != undefined && listaPrecios[2].precio : ''} </strong>

                                <span class="text-sm font-medium text-gray-700">/mes</span></div> : <DotLoader
                                color={color}
                                loading={true}
                                cssOverride={override}
                                size={25}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />}

                        </p>

                        <p class="font-medium text-gray-500 dark:text-gray-300">{planes == 'Basico' ? "Incluye 2 clases por semana" : planes == "Semi Intenso" ? 'Incluye 3 clases por semana' : planes == 'Super Intenso' ? 'Incluye todos los dias' : ''}</p>
                        {
                            session?.user?.name == undefined ? <button onClick={() => {
                                signIn('google', {
                                    callbackUrl: "/planes"
                                })
                            }} class="w-full px-4 py-2 mt-10 tracking-wide text-black capitalize transition-colors duration-300 transform bg-fondo1 rounded-md hover:bg-black hover:text-yellow-500 focus:outline-none focus:bg-black focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                Ingresá para avanzar (Gmail)
                            </button> : <button onClick={() => {
                                let precio;

                                if (planes == "Basico") {
                                    precio = Number((listaPrecios[0].precio.replace(/\s+/g, '')).replace(/[$.]/g, ''))
                                } else if (planes == "Semi Intenso") {
                                    precio = Number((listaPrecios[1].precio.replace(/\s+/g, '')).replace(/[$.]/g, ''))
                                } else if (planes == "Super Intenso") {
                                    precio = Number((listaPrecios[2].precio.replace(/\s+/g, '')).replace(/[$.]/g, ''))
                                }

                                return handleSubmit(planes, precio)
                            }} class="w-full px-4 py-2 mt-10 tracking-wide text-black capitalize transition-colors duration-300 transform bg-fondo1 rounded-md hover:bg-black hover:text-yellow-500 focus:outline-none focus:bg-black focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                Enviar
                            </button>
                        }

                    </div>

                    <div class="w-full mb-[100px] sm:mb-0 p-8 space-y-8 text-center bg-white rounded-lg">
                        <p class="font-medium text-gray-800 uppercase text-center">Combinado</p>

                        <p class="mt-2 sm:mt-4">
                            <strong class="text-3xl font-bold text-center text-gray-900 sm:text-4xl"> $34300 </strong>

                            <span class="text-sm font-medium text-gray-700">/mes</span>
                        </p>

                        <p class="font-medium text-gray-500 dark:text-gray-300">Incluye 2 clases por semana</p>

                        {
                            session?.user?.name == undefined ? <button onClick={() => {
                                signIn('google', {
                                    callbackUrl: "/planes"
                                })
                            }} class="w-full px-4 py-2 mt-10 tracking-wide text-black capitalize transition-colors duration-300 transform bg-fondo1 rounded-md hover:bg-black hover:text-yellow-500 focus:outline-none focus:bg-black focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                Ingresá para avanzar (Gmail)
                            </button> : <button onClick={() => {


                                return handleSubmit("Combinado", 34000)
                            }} class="w-full px-4 py-2 mt-10 tracking-wide text-black capitalize transition-colors duration-300 transform bg-fondo1 rounded-md hover:bg-black hover:text-yellow-500 focus:outline-none focus:bg-black focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                Enviar
                            </button>
                        }

                    </div>




                </div>
                <Image src={Imagenfondo1}
                    width={0}
                    height={0}
                    alt=""
                    className="w-full  h-full fixed -z-10 opacity-50  inset-0 object-cover " />
            </div>

        </div>
    )
}



