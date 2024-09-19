import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"


import { signIn, useSession, signOut } from 'next-auth/react'
import { useEffect } from "react"


export const DashboardInicio = () => {

    const { data: session } = useSession()
    const search = '/dashboard/user'

    useEffect(() => {


        if (session?.user?.name != undefined) {

            setTimeout(async () => {
                await signOut({
                    callbackUrl: "/",
                })
            }, 600000);

        }
    }, [session])

    const GoogleIcon = () => (
        <svg
            className="mr-2 h-4 w-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
        >
            <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
        </svg>
    )

    return (
        <div className="flex h-screen bg-gray-200">
            {/* Mitad izquierda */}
            {/* bg-gradient-to-br from-red-600 to-red-800 */}
            <div className="w-1/2  flex items-center justify-center p-8 border-b sm:border-b-0 sm:border-r border-black/30">
                <Card className="w-full max-w-md">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl font-bold text-center">REMAX NOA <span className='text-red-500'>SALTA</span></CardTitle>
                        {/* <CardDescription className="text-center">
                            Inicia sesión con Google aquí
                        </CardDescription> */}
                    </CardHeader>


                    <CardContent>
                        <Button
                            onClick={() => {

                                signIn('google', { search, callbackUrl: 'dashboard/administrador' })

                            }}
                            variant="outline"
                            className="w-full bg-white text-black hover:bg-gray-100"

                        >
                            <GoogleIcon />

                            Iniciar sesión con Google
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Mitad derecha */}
            {/* bg-gradient-to-bl from-blue-500 to-blue-800 */}
            <div className="w-1/2  flex items-center justify-center p-8">
                <Card className="w-full max-w-md">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl font-bold text-center">REMAX NOA <span className='text-blue-700'>JUJUY</span></CardTitle>
                        {/* <CardDescription className="text-center">
                            O inicia sesión con Google aquí
                        </CardDescription> */}
                    </CardHeader>
                    <CardContent>
                        <Button
                            variant="outline"
                            className="w-full bg-white text-black hover:bg-gray-100"
                            onClick={() => {


                                // signIn('google', { search, callbackUrl: search })
                                signIn('google', { callbackUrl: '/dashboard/user' })
                            }}
                        >
                            <GoogleIcon />
                            Iniciar sesión con Google
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}