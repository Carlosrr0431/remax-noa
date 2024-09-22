"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc";
import React, { Suspense, useEffect } from 'react'

import { signIn, useSession, signOut } from 'next-auth/react'
import { DashboardInicio } from '@/app/(components)/DashboardInicio';


const Dashboard = () => {


    const { data: session } = useSession()

    useEffect(() => {


        if (session?.user?.name != undefined) {

            setTimeout(async () => {
                await signOut({
                    callbackUrl: "/",
                })
            }, 600000);

        }
    }, [session])

    return (

        <>
            <DashboardInicio />
        </>

        // <div className="flex flex-col sm:flex-row h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        //     <div className="flex-1 flex flex-col items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-gray-300 ">
        //         <div className="mb-4 p-4 rounded-full bg-white shadow-lg">
        //             <FcGoogle className="w-16 h-16 text-red-500" />
        //         </div>
        //         <h2 className="text-2xl font-bold mb-4 text-gray-800">REMAX NOA <span className='text-red-500'>SALTA</span></h2>
        //         <Link href='/dashboard/administrador'>
        //             <Button onClick={() => {


        //                 // signIn('google', { search, callbackUrl: search })
        //                 signIn('google', { callbackUrl: '/dashboard/administrador' })
        //             }} className="bg-red-500 hover:bg-red-600 text-white">
        //                 ENTRAR
        //             </Button>
        //         </Link>

        //     </div>
        //     <div className="flex-1 flex flex-col items-center justify-center p-4 ">
        //         <div className="mb-4 p-4 rounded-full bg-white shadow-lg">
        //             <FcGoogle className="w-16 h-16 text-red-500" />
        //         </div>
        //         <h2 className="text-2xl font-bold mb-4 text-gray-800">REMAX NOA <span className='text-blue-700'>JUJUY</span></h2>
        //         <Link href='/dashboard/user'>
        //             <Button onClick={() => {


        //                 // signIn('google', { search, callbackUrl: search })
        //                 signIn('google', { callbackUrl: '/dashboard/user' })
        //             }} className="bg-blue-700 hover:bg-blue-900 text-white">
        //                 ENTRAR
        //             </Button>
        //         </Link>
        //     </div>
        // </div>



    )
}

export default Dashboard