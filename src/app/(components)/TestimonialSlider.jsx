// testimonial data

import Imagen1 from '../public/t-avt-1.png'
import Imagen2 from '../public/t-avt-2.png'
import Imagen3 from '../public/t-avt-3.png'

import Jimena from '../public/JIMENA CORNEJO (1).jpg'
import Alejandro from '../public/ALEJANDRO 2 (1).jpg'
import Matias from '../public/MATIAS FRADEJAS (1).jpg'
import Alberto from '../public/ALBERTO (1).jpg'

const testimonialData = [

    {
        image: Jimena,
        name: "JIMENA CORNEJO LLORCA",
        position: "Agente Inmobilario",
        message:
            "Trabajar en Remax es pasión, simplemente pasión. Amo mi trabajo y eso me lleva a dar lo mejor de mí. Estoy constantemente acompañada por todo un equipo de agentes, staff y brokers. ",
    },
    {
        image: Alejandro,
        name: "ALEJANDRO RODRIGUEZ",
        position: "Agente Inmobilario",
        message:
            "Mi experiencia desde el primer momento en Remax fue transformadora. El ambiente de colaboración y apoyo constante me permitió desarrollar mi pasión por el servicio inmobiliario al máximo. ",
    },
    {
        image: Matias,
        name: "MATIAS FRADEJAS",
        position: "Agente Inmobilario",
        message:
            "En Remax encontré un espacio de desafío y crecimiento personal, donde puedo desarrollarme profesionalmente y formar parte de un equipo comprometido con altos valores.",
    },
    {
        image: Alberto,
        name: "ALBERTO NANTERNE",
        position: "Agente Inmobilario",
        message:
            "Es un trabajo individual en equipo, donde cada uno hace lo que mejor sabe hacer y se complementa con los demás para sinergizar relaciones de confianza y concretar sueños.",
    },
];

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useAppContext } from '../(context)/AppWrapper';
import { useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa'

const TestimonialSlider = () => {

    const { ancho, setAncho } = useAppContext()

    useEffect(() => {
        window?.addEventListener("resize", () => {
            setAncho(window.innerWidth);
        });
    })

    return (
        <Swiper
            navigation={true}
            pagination={{
                clickable: true,

            }}
            spaceBetween={100}
            slidesPerView={ancho < 950 ? 1 : 2}
            autoplay={{
                delay: 5000
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="sm:h-full  w-[100%] md:w-[80%] relative items-center flex justify-center sm:bottom-[80px] mb-[100px] bottom-[100px] h-[80%]"
        >

            {testimonialData.map((person, index) => {

                return (
                    <SwiperSlide key={index} >

                        <div className="flex flex-col space-x-6 items-center md:flex-row  h-full w-full px-28 ">

                            <div className=" w-full flex flex-col xl:justify-center items-center relative  mx-auto xl:mx-0 ">

                                <div className="mb-2 mx-auto">
                                    <Image
                                        src={person.image}
                                        alt=""
                                        width={100}
                                        height={100}
                                        className='imagenTestimonios'
                                    />
                                </div>

                                <div className="text-lg text-black text-center w-full mb-4">{person.name}</div>


                                <div className="text-[12px] text-black uppercase font-normal tracking-widest">{person.position}</div>

                                <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                                    <div className="mb-4">
                                        <FaQuoteLeft className="text-4xl xl:text-6xl text-black/20 mx-auto md:mx-0 " />
                                    </div>

                                    <div className="w-[600px] text-sm xl:w-[400px] xl:text-lg text-center md:text-left text-black">
                                        {person.message}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper >
    );
};

export default TestimonialSlider;