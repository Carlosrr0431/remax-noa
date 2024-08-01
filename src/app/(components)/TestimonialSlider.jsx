// testimonial data

import Imagen1 from '../public/t-avt-1.png'
import Imagen2 from '../public/t-avt-2.png'
import Imagen3 from '../public/t-avt-3.png'

const testimonialData = [

    {
        image: Imagen1,
        name: "Silvia Loaza",
        position: "Apostol",
        message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
    },
    {
        image: Imagen2,
        name: "Silvia Loaza",
        position: "Apostol",
        message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
    },
    {
        image: Imagen3,
        name: "Claudio Loaza",
        position: "Apostol",
        message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
    }

];

const testimonialData2 = [

    {
        image: Imagen1,
        name: "Silvia Loaza",
        position: "Apostol",
        message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
    },
    {
        image: Imagen2,
        name: "Silvia Loaza",
        position: "Apostol",
        message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
    },
    {
        image: Imagen3,
        name: "Claudio Loaza",
        position: "Apostol",
        message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
    },
    {
        image: Imagen2,
        name: "Silvia Loaza",
        position: "Apostol",
        message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
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
            className="h-[50%] w-[100%] md:w-[80%] relative top-[150px] intro2"
        >


            {testimonialData.map((person, index) => {



                return (
                    <SwiperSlide key={index} >

                        <div className="flex flex-col space-x-6 items-center md:flex-row  h-full w-full px-28 ">

                            {/* avatar, name y position */}
                            <div className=" w-full flex flex-col xl:justify-center items-center relative  mx-auto xl:mx-0 ">

                                {/* avatar */}
                                <div className="mb-2 mx-auto">
                                    {" "}
                                    <Image
                                        src={person.image}
                                        alt=""
                                        width={100}
                                        height={100}
                                    />{" "}
                                </div>
                                {/* name */}
                                <div className="text-lg text-center w-full mb-4">{person.name}</div>
                                {/* position */}
                                <div className="text-[10px] uppercase font-extralight tracking-widest text-center w-[200px]">{person.message}</div>


                            </div>


                        </div>

                    </SwiperSlide>
                );


            })}
        </Swiper>
    );
};

export default TestimonialSlider;