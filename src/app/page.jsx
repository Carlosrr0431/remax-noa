"use client"

import { useRef, useState } from "react";
import TestimonialSlider from "./(components)/TestimonialSlider";
import Link from "next/link";
import Video from './public/video_convención 2024.mp4'
import { useAppContext } from "./(context)/AppWrapper";
import { FormularioCaptacion } from "./(components)/FormularioCaptacion";
import { AnimatedTextword } from "./(components)/AnimatedTextword";

import { motion } from "framer-motion";
import { VisionValores } from "./(components)/VisionValores";
import { VisionValores2 } from "./(components)/VisionValores2";
import { SwiperOficina } from "./(components)/SwiperOficinas";
import Logo from './public/LOGO REMAX.svg'
import Image from "next/image";
import Socials from "./(components)/Socials";
import Redes from "./(components)/Redes";
import { FooterSencillo } from "./(components)/FooterSencillo";

const fadeInAnimationVariants = {
  initial: (i) => ({
    opacity: 0,
    translateY: -50,
  }),
  animate: (i) => (
    {
      opacity: 1, translateX: 0, translateY: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.4,

      }
    }
  )
}

const Home = () => {

  const container = useRef()
  const { setCambioHeader } = useAppContext()
  const [scroll, setScroll] = useState(0)
  const scrollRef = useRef()

  const handleScroll = () => {

    setScroll(container.current.scrollTop);
    if (scroll >= 100 && scroll <= 150) {
      setCambioHeader(true)
    } else if (scroll <= 50) {
      setCambioHeader(false)
    }
  }

  return (

    <main main className="h-full  w-full relative overflow-y-auto overflow-x-hidden  " onScroll={handleScroll} ref={container} >

      <section className="w-full h-full  " id="inicio">
        <div className="w-full h-full   ">
          <div className={` text-center montserrat flex   flex-col justify-center xl:mx-auto w-full items-center  xl:text-center h-full container `}>
            {/* <h1

              className=" h2 text-[32px] xl:text-[45px] xl:w-[1100px] font-medium mx-auto items-center text-center fontMatroska"
            >
              <span className="">Únete al Éxito con</span> RE/MAX Noa Salta <br />
            </h1> */}

            <AnimatedTextword text="Únete al Éxito con RE/MAX NOA Salta" />

            <Link href={'#formulario'}>
              {/* <Button class="text-white  hover:bg-black/90  font-semibold hover:text-white py-0.5 px-4 bg-sky-950 hover:border-transparent rounded-sm" variant="outline">UNIRSE </Button> */}
              <motion.button initial="initial"
                variants={fadeInAnimationVariants}
                whileInView="animate"
                viewport={{ once: true }}
                custom={1} className="text-white  hover:bg-black/90  font-semibold hover:text-white py-0.5 px-4 bg-sky-950 hover:border-transparent rounded-sm mt-[40px]">
                UNIRSE
              </motion.button>
            </Link>
          </div>
        </div>


        <div className="brightness-50 xl:bg-right xl:bg-no-repeat w-full h-full  translate-z-50  absolute inset-0   -z-20">
          <video src={Video} autoPlay muted loop className="object-cover h-[100%] w-[100%]" />

          {/* <Image src={Degradado}
            width={0}

            height={0}
            alt=""
            className="w-full  h-full absolute z-20 inset-0 object-cover mix-blend-multiply" /> */}
        </div>

      </section>

      {/* <section className="h-[100%] w-[100%] bg-slate-800 ">

        <SwiperGym />
      </section> */}
      <section id="formulario" className="h-[100%] w-[100%] bg-slate-800" ref={scrollRef}>
        <FormularioCaptacion scrollRef={scrollRef} />
      </section>

      {/* <section className="h-[100%] w-[100%] bg-slate-800 ">
        <Beneficios />
      </section> */}

      {/* 

      <section className="h-[50%] w-[100%] bg-slate-600">
        <Sponsor />
      </section> */}



      <section id="nosotros" className="h-screen w-[100%] bg-white">
        <VisionValores />

      </section>


      <section className="h-screen w-[100%] bg-white mt-[600px] sm:mt-[60px]">
        <SwiperOficina />
      </section>


      <section id="testimonios" className="h-[60%] w-[100%] bg-gray-300 space-y-8 mt-[50px] sm:mt-0 sm:space-y-0 ">
        <h1 className='bg-rgb(178, 190, 181) text-center flex justify-center text-[40px]  bottom-[130px] sm:bottom-[80px] mx-auto relative text-black'>Nuestros Testimonios</h1>
        <TestimonialSlider />
      </section>

      <section className="mb-[80px] sm:mb-0">
        <FooterSencillo />
      </section>

      {/* <footer class="w-full bg-black max-h-[200px] relative sm:h-[150px]">

        <div className="flex flex-col">

          <div className="flex justify-center items-center relative bottom-[20px]">
            <Link href="/" className={`lg:mx-0 lg:start-1 lg:translate-y-6 lg:items-start lg:-translate-x-[280px]`}>
              <Image
                src={Logo}
                width={120}
                height={80}
                alt=""
                priority={true}

              /></Link>

            <ul class="text-lg text-center sm:flex items-center justify-center gap-14 lg:gap-10 xl:gap-14 transition-all duration-500 mt-[50px] -translate-x-[50px]">

              <li class="sm:my-0 my-2" ><a href="#" class="text-white hover:text-gray-400">Nosotros</a></li>
              <li ><a href="#" class="text-white hover:text-gray-400">Soporte</a></li>
              <li class="sm:my-0 my-2"><a href="#" class="text-white hover:text-gray-400">Ubicacion</a></li>
              <li ><a href="#" class="text-white hover:text-gray-400">Contactanos</a></li>
            </ul>
          </div>



          <div class=" border-t border-gray-700  ">
            <div class="flex items-center justify-center  relative top-[20px]">
              <Redes />
              <span class="text-gray-400 text-md -translate-x-[70px] ">©<a href="https://pagedone.io/">REMAX NOA IT</a> 2024, Todos los derechos reservados.</span>
            </div>
          </div>
        </div>

      </footer> */}


    </main >
  );
};

export default Home;