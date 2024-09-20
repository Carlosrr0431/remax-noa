import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ProgramarEntrevista2 } from './ProgramarEntrevista2'
import Image from 'next/image'

import Degradado from '../public/0145 - 7H1A0377 B.jpg'
import { FormularioCaptacion } from './FormularioCaptacion'
import { Input } from "@/components/ui/input"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"


const formSchema = z.object({
    username: z.string().min(2, {
        message: "El nombre debe contener al menos 4 letras",
    }),
    email: z
        .string()
        .min(1, { message: "El correo es invalido" })
        .email("Debe completar como ejemplo@ejem.com"),

    oficina: z.string({ required_error: "Es necesario seleccionar una oficina" }),

    telefono: z.string({ required_error: "Es necesario ingresar el telefono" })
})

import { motion } from "framer-motion";
import { guardarFomulario } from "../action"


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

export const EntrevistaPage = () => {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: ""
        },
    })

    function onSubmit(values) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        // alert(JSON.stringify(values))

        guardarFomulario(values)
    }

    return (
        <div className="flex h-screen  w-full">
            {/* Mitad izquierda */}
            {/* bg-gradient-to-br from-red-600 to-red-800 */}
            <div className="w-[100%] h-[40%] sm:w-1/2  flex items-center justify-center  ">

                <Image src={Degradado}
                    width={0}

                    height={0}
                    alt=""
                    className="w-[100%] h-[40%] sm:h-full sm:w-1/2   absolute z-20 inset-0 object-cover mix-blend-multiply" />
            </div>

            {/* Mitad derecha */}
            {/* bg-gradient-to-bl from-blue-500 to-blue-800 */}
            <div className="w-[100%]  h-[50%] sm:h-full sm:mt-0 sm:w-1/2  flex items-center justify-center p-8 sm:bg-gradient-to-r sm:from-indigo-500 sm:from-10% sm:via-sky-500 via-30% sm:to-emerald-500 sm:to-90%  relative" >
                <motion.div


                    initial="initial"
                    variants={fadeInAnimationVariants}
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={1}
                    className="p-0 mt-[1000px] sm:p-6  sm:mt-[100px] sm:mx-auto items-center">
                    <Form {...form} >
                        <form onSubmit={form.handleSubmit(onSubmit)} className="">
                            <Card className="w-full mb-[50px] max-w-md mx-auto relative bottom-[50px] border-[1px] border-black/30">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold text-center">Ingresá tus datos</CardTitle>
                                </CardHeader>

                                <CardContent className="space-y-4">
                                    {/* sm:space-x-2 sm:justify-center sm:items-center space-y-2 */}
                                    <div className="sm:flex sm:space-x-2 space-y-2 sm:space-y-0">
                                        <FormField
                                            control={form.control}
                                            name="username"
                                            id="username"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Nombre y Apellido</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Ingresar nombre" {...field} />
                                                    </FormControl>

                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="email"
                                            id="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Email</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Ingresar correo" {...field} />
                                                    </FormControl>

                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <FormField
                                            control={form.control}
                                            name="oficina"
                                            id="oficina"
                                            render={({ field }) => (
                                                <FormItem>

                                                    <FormLabel>Oficina</FormLabel>

                                                    <FormControl>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Seleccioná una oficina" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>

                                                                <SelectItem value="salta">Oficinas Salta</SelectItem>
                                                                <SelectItem value="jujuy">Oficinas Jujuy</SelectItem>
                                                            </SelectContent>
                                                        </Select>

                                                    </FormControl>

                                                    <FormMessage />



                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <FormField
                                            control={form.control}
                                            name="telefono"
                                            id="telefono"
                                            render={({ field }) => (
                                                <FormItem>

                                                    <FormLabel>Telefono</FormLabel>

                                                    <FormControl>

                                                        <InputOTP {...field} maxLength={10}>
                                                            <InputOTPGroup>
                                                                <InputOTPSlot index={0} />
                                                                <InputOTPSlot index={1} />
                                                                <InputOTPSlot index={2} />
                                                                <InputOTPSlot index={3} />
                                                            </InputOTPGroup>
                                                            <InputOTPSeparator />
                                                            <InputOTPGroup>
                                                                <InputOTPSlot index={4} />
                                                                <InputOTPSlot index={5} />
                                                                <InputOTPSlot index={6} />
                                                                <InputOTPSlot index={7} />
                                                                <InputOTPSlot index={8} />
                                                                <InputOTPSlot index={9} />
                                                            </InputOTPGroup>
                                                        </InputOTP>

                                                    </FormControl>

                                                    <FormMessage />



                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </CardContent>

                                <CardFooter>
                                    <Button className="w-full" type="submit">Enviar</Button>
                                </CardFooter>
                            </Card>

                        </form>
                    </Form>

                </motion.div>
            </div>
        </div>
    )
}
