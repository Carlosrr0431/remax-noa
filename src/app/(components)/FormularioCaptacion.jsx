import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Beneficios } from "./Beneficios"
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
        message: "Username must be at least 2 characters.",
    }),

    email: z.string().min(2, {
        message: "Email must be at least 2 characters.",
    }),

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

export const FormularioCaptacion = ({ scrollRef }) => {


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
        <div className="max-w-full mx-auto p-6 bg-white   h-screen"  >
            <CardHeader className="mb-10">
                <CardTitle className="text-2xl font-bold text-center text-black">Únete a nuestro equipo de Agentes</CardTitle>
            </CardHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full  items-center justify-center">

                <motion.div


                    initial="initial"
                    variants={fadeInAnimationVariants}
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={1}
                    className="p-0 sm:p-6 sm:mb-[80px]">
                    <Form {...form} >
                        <form onSubmit={form.handleSubmit(onSubmit)} className="">
                            <Card className="w-full max-w-md mx-auto relative bottom-[50px] border-[1px] border-black/30">
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

                <Beneficios />
            </div>
        </div>
    )
}