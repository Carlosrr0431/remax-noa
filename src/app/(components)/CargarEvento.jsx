"use client"
import { useState } from "react"

export const CargarEvento = ({ tipo }) => {

  const [file, setFile] = useState(null)
  const [fecha, setFecha] = useState(null)
  const [titulo, setTitulo] = useState("")

  // fixed inset-0  z-50 
  // flex items-center justify-center h-full w-full  
  return (
    <div className="flex flex-col justify-center ">
      <form onSubmit={async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('image', file)
        formData.append('titulo', titulo)
        formData.append('fecha', fecha)



        if (tipo == 'Eventos Oficiales') {
          const response = await fetch('/api/uploadOficial', {
            method: 'POST',
            body: formData
          })

          const data = await response.json()

          setImage(data.url)
        } else if (tipo == 'Eventos Especiales') {
          const response = await fetch('/api/uploadEspecial', {
            method: 'POST',
            body: formData
          })
        }
      }}>


        <input type="file" className="border-solid border-2 border-slate-800 text-black" onChange={(e) => {
          setFile(e.target.files[0])
        }} />

        <input type="date" className="border-solid border-2 border-slate-800 text-black" onChange={(e) => setFecha(e.target.value)} />
        <input type="text" className="border-solid border-2 border-slate-800 text-black" onChange={(e) => setTitulo(e.target.value)} placeholder="Ingrese el titulo" />


        <button type="submit" className="text-black text-sm bg-slate-700 p-2">Enviar</button>
      </form>

    </div>

  )
}
