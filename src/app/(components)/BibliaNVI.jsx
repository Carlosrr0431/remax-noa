"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import DropdownCapitulos from './DropdownCapitulos'
import DropdownLibro from './DropdownLibro'
import { useAppContext } from '../(context)/AppWrapper'

const BibliaNVI = () => {

    const [libros, setLibros] = useState([])
    const [capitulo, setCapitulo] = useState("")
    const [array, setArray] = useState([])
    const [versiculos, setVersiculos] = useState([])
    const [showCapitulos, setShowCapitulos] = useState(true)
    const { isOpenBiblia, setIsOpenBiblia } = useAppContext()
    const [libroSelect, setLibroSelect] = useState("");
    const [versiculoSelect, setVersiculoSelect] = useState("");
    const [capituloSelected, setCapituloSelected] = useState("");



    

    const handleButton = async () => {

        const response = await axios.get('/api/biblia')

        setLibros(response.data)
    }

    useEffect(() => {
        handleButton()

    }, [versiculos])

    const handleClick = async (i) => {

        const response = await axios.get(`api/biblia/${capitulo}/${i}`)

        setCapituloSelected(i)
        setShowCapitulos(false)
        setVersiculos(response.data.vers)
    }


    const handleSelect = async (libro) => {

        if (libro == 'Elige tu versiculo') return setCapitulo(0)


        setLibroSelect(libro)
        setCapituloSelected()
        setShowCapitulos(true)

        const response = await axios.get(`api/biblia/${libro}`)

        setCapitulo(libro)

        let array = []
        for (let index = 0; index < response.data.chapters; index++) {
            array[index] = index + 1;

        }

        setArray(array)
    }

    return (
        <>
            {/* <div>
                <button onClick={handleButton} className='h-12 w-20  text-black bg-white'>Biblia</button>
            </div> */}

            {
                isOpenBiblia &&
                <div className='fixed inset-0 bg-white z-50 bg-opacity-75 backdrop-blur-sm flex  h-[80%] sm:w-[50%] w-[80%] mx-auto sm:mx-[25%] my-[5%] flex-col space-y-2 '>

                    <div className='flex w-full justify-center items-center gap-x-4 flex-wrap'>

                        <div>
                            <DropdownLibro libros={libros} handleSelect={handleSelect} />
                        </div>

                        {capitulo !== '' &&
                            <>

                                <div>
                                    <DropdownCapitulos array={array} handleClick={handleClick} />
                                </div>

                                <div className=''>
                                    <Dropdown versiculos={versiculos} setVersiculoSelect={setVersiculoSelect} />
                                </div>
                            </>
                        }


                    </div>

                    

                    <div className='flex justify-center w-full'>
                        <h2 className='mb-2 font-semibold -mt-4 text-2xl text-black'> {libroSelect}  {capituloSelected}</h2>
                    </div>



                    {
                        showCapitulos && <div className='flex justify-center items-start gap-y-4 mt-6 max-w-2xl  mx-auto flex-wrap space-x-2'>
                            {
                                array.length > 0 && array.map((elem, index) => {
                                    return (
                                        <div onClick={() => handleClick(index + 1)} key={index} className='p-1 border-2 border-solid items-start border-white cursor-pointer'>
                                            <h1 className='text-md text-black font-bold '>{elem}</h1>

                                        </div>
                                    )
                                }
                                )
                            }
                        </div>
                    }

                    {
                        !showCapitulos && versiculos.length > 0 && <div className='overflow-y-scroll mb-11'>
                            {
                                versiculos.map((elem, index) => {
                                    return (
                                        <h1 id={elem.number} key={index} className='mb-2 text-2xl montserrat text-black font-normal'><span className='font-bold'>{elem.number}. </span>{elem.verse}</h1>
                                    )
                                })
                            }
                        </div>

                    }

                </div>
            }
        </>
    )
}

export default BibliaNVI
