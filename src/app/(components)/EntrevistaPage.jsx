import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProgramarEntrevista2 } from './ProgramarEntrevista2'
import Image from 'next/image'
import Degradado from '../public/0145 - 7H1A0377 B.jpg'
export const EntrevistaPage = () => {
    return (
        <div className="flex h-screen bg-gray-200">
            {/* Mitad izquierda */}
            {/* bg-gradient-to-br from-red-600 to-red-800 */}
            <div className="w-1/2  flex items-center justify-center p-8 ">

                <Image src={Degradado}
                    width={0}

                    height={0}
                    alt=""
                    className="w-1/2  h-full absolute z-20 inset-0 object-cover mix-blend-multiply" />
            </div>

            {/* Mitad derecha */}
            {/* bg-gradient-to-bl from-blue-500 to-blue-800 */}
            <div className="w-1/2  flex items-center justify-center p-8 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  relative" >
                <ProgramarEntrevista2 />
            </div>
        </div>
    )
}
