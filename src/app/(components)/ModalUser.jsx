"use client"
import { HiOutlineXMark } from 'react-icons/hi2';
import { adminUser, userAdmin } from '../action';
import { useState } from 'react';
import { toast } from 'sonner';

export const ModalUser = ({ setShowModal, info }) => {



    const [datos, setDatos] = useState({
        name: info.nombre,
        email: info.email,
        role: info.role,
        plan: info.plan,
        inicio: info.inicio,
        edad: info.edad,
        telefono: info.telefono,
        dni: info.dni

    })

    const [errorDni, setErrorDni] = useState("")
    const [errorTelefono, setErrorTelefono] = useState("")

    const handleError = (errores) => {

        console.log("dni error: " + errores[1]);
        
        setErrorDni(errores[1
        ])

        if (errores[0
        ] == "No responde a la plantilla")
            setErrorTelefono(errores[0]); else setErrorTelefono("")

    }
    const handleInputChange = (event) => {

        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }
    return (

        <div className={`fixed inset-0  z-50  bg-opacity-100 backdrop-blur-sm
        flex items-center justify-center h-full w-full  
        `}>
            <div className={`rounded-[10px] shadow-2xl  shadow-black/20 p-8 m-4 md:min-w-[700px] md:mx-auto bg-slate-800 `}>
                <div className="flex justify-center">
                    <h1 className="w-full text-center text-white items-center text-grey-darkest ">{info.tipo} Usuario</h1>

                    <div className="" onClick={() => setShowModal(false)}>
                        <HiOutlineXMark className="text-white w-[30px] h-[30px] cursor-pointer hover:scale-110" color="white" />
                    </div>
                </div>
                <form className="mb-4 py-4   w-full" action={async () => {
                    const result = await adminUser(datos, info.tipo, info.id)
                    console.log(result.message)

                    if (result.message == "Se agrego correctamente") {
                        toast.success('Se agrego correctamente sus datos!!!')

                        return setShowModal(false)
                    } else if (result.message == "Se actualizo correctamente") {
                        toast.success('Se actualizo correctamente sus datos!!!')

                        return setShowModal(false)
                    } else
                        return handleError(result.error)

                }} >

                    <div className='md:justify-center  md:grid md:grid-cols-2 md:gap-x-4 w-full'>
                        <div className="flex flex-col mb-4  relative">
                            <label for="name" class="absolute left-0 ml-1 -translate-y-3 bg-black rounded-md  px-2 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-0 text-white peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-sm">Nombre</label>
                            <input value={datos?.name} required className="border text-lg py-2 px-3 text-grey-darkest md:ml-0  focus:outline-none focus:bg-white/90 text-black focus:text-black rounded-[5px]" placeholder='Nombre' type="text" name="name" id="name" onChange={handleInputChange} />
                        </div>

                        <div className="flex flex-col mb-4  relative">
                            <label for="email" class="absolute left-0 ml-1 -translate-y-3 bg-black rounded-md  px-2 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-0 text-white peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-sm">Email</label>
                            <input value={datos?.email} required className="border text-lg py-2 px-3 text-grey-darkest md:ml-0  focus:outline-none focus:bg-white/90 text-black focus:text-black rounded-[5px]" placeholder='Email' type="text" name="email" id="email" onChange={handleInputChange} disabled />
                        </div>

                        <div className="flex flex-col mb-4 relative">

                            <label for="plan" class="absolute left-0 ml-1 -translate-y-3 bg-black rounded-md  px-2 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-0 text-white peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-sm">Plan</label>
                            <input value={datos?.plan} required className="border text-lg py-2 px-3 text-grey-darkest md:ml-0  focus:outline-none focus:bg-white/90 text-black focus:text-black rounded-[5px]" placeholder='Plan' type="text" name="plan" id="plan" onChange={handleInputChange} disabled />
                        </div>

                        <div className="flex flex-col mb-4  relative">
                            <h1 className='text-red-500 text-[15px] absolute w-full bottom-[45px] font-bold left-[95px]'>{errorDni}</h1>
                            <label for="dni" class="absolute left-0 ml-1 -translate-y-3 bg-black rounded-md  px-2 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-0 text-white peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-sm">Dni </label>
                            <input value={datos?.dni} required className="border text-lg py-2 px-3 text-grey-darkest md:ml-0  focus:outline-none focus:bg-white/90 text-black focus:text-black rounded-[5px]" placeholder='Dni' type="number" name="dni" id="dni" onChange={handleInputChange} />
                        </div>


                        <div className="flex flex-col mb-4 relative">

                            <label for="edad" class="absolute left-0 ml-1 -translate-y-3 bg-black rounded-md  px-2 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-0 text-white peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-sm">Edad</label>
                            <input value={datos?.edad} required  className="border text-lg py-2 px-3 text-grey-darkest md:ml-0  focus:outline-none focus:bg-white/90 text-black focus:text-black rounded-[5px]" placeholder='Edad' type="text" name="edad" id="edad" onChange={handleInputChange} />
                        </div>

                        <div className="flex flex-col mb-4 relative">

                            <h1 className='text-red-500 text-[15px] absolute w-full bottom-[45px] font-bold left-[95px]'>{errorTelefono}</h1>
                            <label for="telefono" class="absolute left-0 ml-1 -translate-y-3 bg-black rounded-md  px-2 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-0 text-white peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-sm">Telefono</label>
                            <input value={datos?.telefono} required className="border text-lg py-2 px-3 text-grey-darkest md:ml-0  focus:outline-none focus:bg-white/90 text-black focus:text-black rounded-[5px]" placeholder='Número de telefono' type="tel" name="telefono" id="telefono" onChange={handleInputChange} />
                        </div>



                    </div>


                    <button className="block bg-teal hover:bg-teal-dark border-[2px]  border-solid border-white text-white uppercase text-lg mx-auto p-2 rounded-[5px] hover:bg-white hover:text-black w-full" type="submit"  >Modificar </button>

                </form>


            </div>
        </div>
    )
}
