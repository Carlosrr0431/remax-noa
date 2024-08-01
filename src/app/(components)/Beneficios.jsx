import React, { use, useRef, useState } from 'react'

import { FaWifi } from "react-icons/fa";
import { FaGlassWaterDroplet } from "react-icons/fa6";
import { FaShower } from "react-icons/fa6";
import { CgGym } from "react-icons/cg";
import Wifi from '../public/wifi-svgrepo-com (1).svg'
import Ducha from '../public/shower-svgrepo-com.svg'
import Vestuario from '../public/lockers-svgrepo-com.svg'
import Dispenser from '../public/water-dispenser-svgrepo-com.svg'
import Patologia from '../public/health-analyst-medical-diagnosis-body-wellness-check-up-svgrepo-com.svg'
import Prevencion from '../public/protect-svgrepo-com (1).svg'
import SalaAcondicionamiento from '../public/gym-svgrepo-com.svg'
import Recuperacion from '../public/exercise-gym-svgrepo-com.svg'
import AltoRendimiento from '../public/cyclist-svgrepo-com.svg'
import Image from 'next/image';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BoltIcon, RocketIcon, UsersIcon } from 'lucide-react';

export const Beneficios = ({ scrollNum }) => {



    gsap.registerPlugin(useGSAP, ScrollTrigger)
    const container = useRef()

    useGSAP(

        () => {

            gsap.to('l1', {
                x: 100,
                scrollTrigger: {
                    trigger: 'l1',
                    start: 'top bottom',
                    end: 'center center',
                    scrub: true
                },
                rotate: 360,
                duration: 3
            });



        },
        { scope: container }

    );





    return (
        <div ref={container} className='intro w-full h-full bg-rgb(178, 190, 181) overflow-y-hidden purple -mt-[100px]' >
            <div className='w-full h-full  '  >
                <h1 className='bg-rgb(178, 190, 181) text-center flex justify-center text-[20px] -mb-[120px]   md:mt-10 mx-auto'>NUESTROS BENEFICIOS</h1>

                <section className="py-20 bg-background mt-14">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
                            <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-card p-6 text-center shadow-lg transition-all duration-300 hover:scale-105">
                                <Image src={Wifi} width={0} height={0} alt='' className='w-[48px] h-[48px] sm:w-[50px] sm:h-[50px] text-primary fill-#005b82 ' color='#005b82' />
                                <h3 className="text-xl font-semibold text-gray-600">Innovation</h3>

                            </div>
                            <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-card p-6 text-center shadow-lg transition-all duration-300 hover:scale-105">
                                <Image src={Ducha} width={0} height={0} alt='' className='w-[48px] h-[48px] sm:w-[50px] sm:h-[50px]' />
                                <h3 className="text-xl font-semibold text-gray-600">Collaboration</h3>

                            </div>
                            <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-card p-6 text-center shadow-lg transition-all duration-300 hover:scale-105">
                                <Image src={Vestuario} width={0} height={0} alt='' className='w-[48px] h-[48px] sm:w-[50px] sm:h-[50px]' />
                                <h3 className="text-xl font-semibold text-gray-600">Efficiency</h3>

                            </div>
                            <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-card p-6 text-center shadow-lg transition-all duration-300 hover:scale-105">
                                <Image src={Dispenser} width={0} height={0} alt='' className='w-[48px] h-[48px] sm:w-[50px] sm:h-[50px]' />
                                <h3 className="text-xl font-semibold text-gray-600">Efficiency</h3>

                            </div>
                            <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-card p-6 text-center shadow-lg transition-all duration-300 hover:scale-105">
                                <Image src={Patologia} width={0} height={0} alt='' className='w-[48px] h-[48px] sm:w-[50px] sm:h-[50px]' />
                                <h3 className="text-xl font-semibold text-gray-600">Innovation</h3>

                            </div>
                            <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-card p-6 text-center shadow-lg transition-all duration-300 hover:scale-105">
                                <Image src={Prevencion} width={0} height={0} alt='' className='w-[48px] h-[48px] sm:w-[50px] sm:h-[50px]' />
                                <h3 className="text-xl font-semibold text-gray-600">Collaboration</h3>

                            </div>
                            <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-card p-6 text-center shadow-lg transition-all duration-300 hover:scale-105">
                                <Image src={SalaAcondicionamiento} width={0} height={0} alt='' className='w-[48px] h-[48px] sm:w-[50px] sm:h-[50px]' />
                                <h3 className="text-xl font-semibold text-gray-600">Efficiency</h3>

                            </div>
                            <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-card p-6 text-center shadow-lg transition-all duration-300 hover:scale-105">
                                <Image src={AltoRendimiento} width={0} height={0} alt='' className='w-[48px] h-[48px] sm:w-[50px] sm:h-[50px]' />
                                <h3 className="text-xl font-semibold text-gray-600">Efficiency</h3>

                            </div>
                        </div>
                    </div>
                </section>
                {/* <div className='grid grid-cols-2 sm:grid-cols-3 items-center  content-center w-full h-full place-items-center space-y-4 top-[70px] relative  mx-auto  '>
                    <div className='l1 items-center flex flex-col'>
                        <Image src={Wifi} width={0} height={0} alt='' className='w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]' />
                        <h2 className='mt-2 sm:text-[20] text-[18px]'>Wifi Gratis</h2>
                    </div>
                    <div className='circle items-center flex flex-col'>
                        <Image src={Ducha} width={0} height={0} alt='' className='w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]' />
                        <h2 className='mt-2 sm:text-[20] text-[18px]'>Duchas</h2>
                    </div>
                    <div className='circle items-center flex flex-col'>
                        <Image src={Vestuario} width={0} height={0} alt='' className='w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]' />
                        <h2 className='mt-2 sm:text-[20] text-[18px]'>Vestuario</h2>
                    </div>
                    <div className=' items-center flex flex-col'>
                        <Image src={Dispenser} width={0} height={0} alt='' className='w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]' />
                        <h2 className='mt-2 sm:text-[20] text-[18px]'>Dispenser</h2>
                    </div>

                    <div className=' items-center flex flex-col'>
                        <Image src={Patologia} width={0} height={0} alt='' className='w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]' />
                        <h2 className='mt-2 sm:text-[20] text-[18px]'>Patologias</h2>
                    </div>

                    <div className=' items-center flex flex-col'>
                        <Image src={Prevencion} width={0} height={0} alt='' className='w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]' />
                        <h2 className='mt-2 sm:text-[20] text-[18px] text-center'>Prevencion de lesiones</h2>
                    </div>

                    <div className=' items-center flex flex-col'>
                        <Image src={SalaAcondicionamiento} width={0} height={0} alt='' className='w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]' />
                        <h2 className='mt-2 ml-2 sm:text-[20] text-[18px] text-center'>Sala de acondicionamiento</h2>
                    </div>

                    <div className=' items-center flex flex-col'>
                        <Image src={Recuperacion} width={0} height={0} alt='' className='w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]' />
                        <h2 className='mt-2 text-center sm:text-[20] text-[18px]'>Recuperación deportiva</h2>
                    </div>


                    <div className=' items-center flex flex-col'>
                        <Image src={AltoRendimiento} width={0} height={0} alt='' className='w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]' />
                        <h2 className='mt-2 text-center sm:text-[20] text-[18px]'>Alto rendimiento</h2>
                    </div>


                </div> */}
            </div>
        </div>
    )
}
