'use client'
import React, { useState } from 'react'
import { useAppContext } from '../(context)/AppWrapper';

const DropdownLibro = ({ libros, handleSelect }) => {
    const {isOpenLibro, setIsOpenCapitulo, setIsOpenVersiculo, setIsOpenLibro} = useAppContext()

    const toggleDropdown = () => {
        setIsOpenLibro(!isOpenLibro);
        setIsOpenCapitulo(false)
        setIsOpenVersiculo(false)
    };

    const closeDropdown = () => {
        setIsOpenLibro(false);
        setIsOpenCapitulo(false)
        setIsOpenVersiculo(false)
    };

    return (
        <div className='w-1/2 py-6 pb-8 h-full'>
            <div className="relative inline-block h-full w-full">
                <button
                    type="button"
                    className="px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center"
                    onClick={toggleDropdown}
                >
                    Libro <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>

                {isOpenLibro && (
                    <div className=" absolute  mt-2 min-h-[200px] h-auto flex-wrap rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 mb-14 w-[350px]">
                        <ul role="menu" className='flex flex-wrap  ' aria-orientation="vertical" aria-labelledby="options-menu">

                            {
                                libros && libros.map((elem, index) => {
                                    return (
                                        <li key={index} onClick={() => handleSelect(elem.names[0])}>
                                            <a
                                                href='#'
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                onClick={closeDropdown}
                                            >
                                                {elem.names[0]}
                                            </a>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default DropdownLibro;
