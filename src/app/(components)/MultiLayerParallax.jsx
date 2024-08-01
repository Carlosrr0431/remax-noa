import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import Degradado from '../public/capas.svg'
import Image from 'next/image'
import { Beneficios } from './Beneficios'
import { Sponsor } from './Sponsor'
import Semilla from '../(pages)/planes/page'
import TestimonialSlider from './TestimonialSlider'

// Little helpers ...
const url = (name, wrap = false) =>
    `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export const MultiLayerParallax = () => {
    const parallax = useRef(null)
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Parallax ref={parallax} pages={2} style={{ width: '100%', height: '100%', position: 'relative' }}>
                {/* <ParallaxLayer offset={1} speed={1} factor={3} style={{
                    backgroundColor: '#7b66c553'
                }}  >


            
                </ParallaxLayer> */}

                {/* <ParallaxLayer offset={2}
                    speed={0.1}

                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }} >  <div className='w-full h-full z-20'>
                        <TestimonialSlider /></div> </ParallaxLayer> */}

                <ParallaxLayer
                    offset={0}
                    speed={1}
                    factor={3}
                > 
                    {/* <Image src={Degradado}
                        width={0}
                        height={0}
                        alt=""
                        className="w-full absolute h-full inset-0 object-cover mix-blend-multiply" /> */}

                    <div className='mt-10'>
                        <Beneficios />

                        <Sponsor />
                        <div className='h-full w-full -mt-[80px]'>
                            <h1 className='flex mt-[100px] text-[40px] justify-center items-center text-white z-50 '>Nuestros testimonios</h1>
                            <TestimonialSlider />
                        </div>

                      
                    </div>

                </ParallaxLayer>

                {/* <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
         
                        <Image width={0} height={0} alt='' src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
           
                </ParallaxLayer> */}

                {/* <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                    <Image width={0} height={0} alt='' src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                    <Image width={0} height={0} alt='' src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
                </ParallaxLayer> */}
                {/* 
                <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1

                 }}>
                    <Image width={0} height={0} alt='' src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                    <Image width={0} height={0} alt='' src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                    <Image width={0} height={0} alt='' src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                    <Image width={0} height={0} alt='' src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
                </ParallaxLayer>
*/}
                {/* <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                    <Image width={0} height={0} alt='' src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
                    <Image width={0} height={0} alt='' src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                    <Image width={0} height={0} alt='' src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                    <Image width={0} height={0} alt='' src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                    <Image width={0} height={0} alt='' src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
                </ParallaxLayer>  */}

                {/* <ParallaxLayer
                    offset={2.5}
                    speed={-0.4}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pointerEvents: 'none',
                    }}>
                    <Image width={0} height={0} alt='' src={url('earth')} style={{ width: '60%' }} />
                </ParallaxLayer> */}

                {/* <ParallaxLayer
                    offset={2}
                    speed={-0.3}
                    style={{
                        backgroundSize: '80%',
                        backgroundPosition: 'center',
                        backgroundImage: url('clients', true),
                    }}
                /> */}

                <ParallaxLayer
                    offset={0}
                    speed={0.1}
                    onClick={() => parallax.current.scrollTo(1)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <div className={` text-center montserrat flex   flex-col justify-center xl:mx-auto w-full items-center  xl:text-center h-full container `}>
                        <h1

                            className=" h2  xl:w-[1200px] font-medium mx-auto items-center text-center fontMatroska"
                        >
                            <span className="texto-borde">movernos</span>, movernos SANAMENTE <br />
                        </h1>

                        <button class=" text-black  hover:bg-black/90  font-semibold hover:text-white py-0.5 px-4 bg-fondo1 hover:border-transparent ">
                            VER PLANES
                        </button>
                    </div>
                </ParallaxLayer>
                {/* 
                <ParallaxLayer
                    offset={1}
                    speed={0.1}
                    onClick={() => parallax.current.scrollTo(2)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Image width={0} height={0} alt='' src={url('bash')} style={{ width: '40%' }} />
                </ParallaxLayer> */}

                {/* <ParallaxLayer
                    offset={2}
                    speed={-0}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onClick={() => parallax.current.scrollTo(0)}>
                    <Image width={0} height={0} alt='' src={url('clients-main')} style={{ width: '40%' }} />
                </ParallaxLayer> */}
            </Parallax>
        </div >
    )
}
