"use client"
import React, { useEffect, useState } from 'react'


import Image from "next/image"
import Home from "../../public/PORTADA.jpg"
import { fetchEventos, fetchEventosEspeciales } from '@/app/lib/data';
import BibliaNVI from '@/app/(components)/BibliaNVI';
import Dropdown from '@/app/(components)/Dropdown';
// import { supabase } from '@/supabase/client';
// import { createBrowserClient } from '@supabase/ssr'
// import { createClient } from '@supabase/supabase-js'
import { supabaseClient } from '@/supabase/client';


const aboutData = [
    {
        title: "Eventos Oficiales",
        info: [
            {
                id: 1,
                title: "Reunión de los Viernes",
                subtitle: "Ven a adorar al Señor"

            },
            {
                id: 2,
                title: "Reunión de los Domingos",
                subtitle: "Ven a adorar al Señor"

            },

            {
                id: 3,
                title: "Discipulado de los Lunes",
                subtitle: "Ven a adorar al Señor"

            },


            {
                id: 4,
                title: "Reunion de jovenes",
                subtitle: "Ven a adorar al Señor"

            },
        ],
    },

    {
        title: "Eventos Especiales",
        info: [
            {
                id: 1,
                title: "Bautismo",
                subtitle: "Ven a adorar al Señor"

            },
            {
                id: 2,
                title: "Santa Cena",
                subtitle: "Ven a adorar al Señor"

            },

            {
                id: 3,
                title: "Te de Damas",
                subtitle: "Ven a adorar al Señor"

            },
        ],
    },


];


const Eventos = () => {

    const [index, setIndex] = useState(0);
    const [contenido, setContenido] = useState()
    const [contenidoEspecial, setContenidoEspecial] = useState()

    // const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL,
    //     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,)

    useEffect(() => {

        const getSupabaseOficial = async () => {
            let { data: eventosOficiales, error } = await supabaseClient
                .from('eventosOficiales')
                .select('*')


            setContenido(eventosOficiales)
        }


        // const getEventos = async () => {




        //     const datos = await fetchEventos()

        //     setContenido(datos)
        // }

        const getEventosEspeciales = async () => {
            let { data: eventosEspeciales, error } = await supabaseClient
                .from('eventosEspeciales')
                .select('*')

            setContenidoEspecial(eventosEspeciales)
        }

        getSupabaseOficial()
        getEventosEspeciales()


        supabaseClient
            .channel('eventosOficiales')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'eventosOficiales' }, (payload) => {

                if (payload.eventType == "INSERT") {
                    return setContenido((antContenido) => [...antContenido, payload.new])
                }
                // getSupabaseOficial()

                // return getSupabaseOficial()
                // return setContenido((antContenido) => [...antContenido, payload.new])
            })
            .subscribe()

        supabaseClient
            .channel('eventosEspeciales')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'eventosEspeciales' }, (payload) => {

                if (payload.eventType == "INSERT") {
                    return setContenidoEspecial((antContenido) => [...antContenido, payload.new])
                }
                // getSupabaseOficial()

                // return getSupabaseOficial()
                // return setContenidoEspecial((antContenido) => [...antContenido, payload.new])
            })
            .subscribe()



    }, [])

    return (
        <div

            className="flex flex-col montserrat w-full xl:max-w-[100%] overflow-y-scroll h-full mx-auto items-center  bg-slate-800 relative"
        >



            <div className="flex gap-x-4 xl:gap-x-12 mx-auto xl:mx-0 mb-4 my-[5%]">
                {aboutData.map((item, itemIndex) => {
                    return (
                        <div
                            onClick={() => setIndex(itemIndex)}
                            key={itemIndex}
                            className={`${index == itemIndex &&
                                "text-accent-[#ffffff] font-bold after:w-[100%] after:bg-white after:transition-all after:duration-300"
                                }  cursor-pointer capitalize xl:text-2xl relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 montserrat after:left-0`}
                        >
                            {item.title}
                        </div>
                    );
                })}
            </div>

            <div className="py-2 xl:py-6 xl:grid-cols-2 md:grid-cols-1 justify-center  justify-items-center  gap-y-2  grid  mb-16 xl:gap-y-4   gap-x-8 lg:mx-auto relative ">
                {(contenido && index == 0) ? contenido.map((item, i) => {
                    return (
                        //  min-w-[24rem] min-h-[400px]
                        <div
                            key={i}
                            class=" flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md max-h-[400px]">
                            <div class="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border min-w-[24rem] min-h-[400px]">
                                <Image
                                    src={item.imagenUrl}
                                    className='object-cover h-full w-full'
                                    alt="ui/ux review check"
                                    width={500}
                                    height={500} />
                            </div>
                            <div className='absolute bottom-0 flex mx-[70px] rounded-xl bg-white/70 h-[150px] w-[250px] z-150 -my-10'>
                                <div className='flex flex-col justify-evenly p-4'>
                                    <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        {item.titulo}
                                    </h4>

                                    <h3 className="block font-sans  font-normal leading-relaxed text-gray-700 antialiased text-md mt-4">
                                        <span className=' font-bold'>Fecha</span>: {item.fecha.slice(2, 10).split('-').reverse().join('/')}
                                    </h3>
                                </div>
                            </div>

                        </div>



                    );
                }) : (contenidoEspecial && index == 1) ? contenidoEspecial.map((item, i) => {
                    return (
                        <div
                            key={i}
                            class=" flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md max-h-[400px]">
                            <div class="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border min-w-[24rem] min-h-[400px]">
                                <Image
                                    src={item.imagenUrl}
                                    className='object-cover h-full w-full'
                                    alt="ui/ux review check"
                                    width={500}
                                    height={500} />
                            </div>
                            <div className='absolute bottom-0 flex mx-[70px] rounded-xl bg-white/70 h-[150px] w-[250px] z-150 -my-10'>
                                <div className='flex flex-col justify-evenly p-4'>
                                    <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        {item.titulo}
                                    </h4>

                                    <h3 className="block font-sans  font-normal leading-relaxed text-gray-700 antialiased text-md mt-4">
                                        <span className=' font-bold'>Fecha</span>: {item.fecha.slice(2, 10).split('-').reverse().join('/')}
                                    </h3>
                                </div>
                            </div>

                        </div>



                    );
                }) : null
                }
            </div>
        </div>
    )
}

export default Eventos
