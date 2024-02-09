"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { RegistersDates, getAllRegister } from "../api/registersRecaudos"

export default function Operations() {
    const [selectedDate, setSelectedDate] = useState('')
    const [registers, setRegisters] = useState<RegistersDates[]>([])
    const [filterRegister, setFilterRegister] = useState<RegistersDates[]>([])
    const [filterHeaderFile, setFilterHeaderFile] = useState([]) 

    useEffect(() => {
        async function callRegis() {
            const res = await getAllRegister()
            setRegisters(res.data)
        }
        callRegis()
    }, [])

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let date = event.target.value
        setSelectedDate(date)
    }

    function callRegister() {
        if (selectedDate != "") {
            const filter = registers.filter((regis) => regis.fecha == selectedDate)
            setFilterRegister(filter)
            const headerFile = filter.map((regis) => regis.encabezadoArchivo)
            const filterHeaderFilt = [...new Set(headerFile)]
            setFilterHeaderFile(filterHeaderFilt)
        }
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-1">
            <h1 className="text-3xl m-12 font-mono">Listado de Recaudos de Impuestos</h1>
                <h3>Seleccione una fecha</h3>
            <div className="flex flex-wrap gap-5">
                <input type="date" onChange={handleDateChange}/>
                <button
                    className="text-white rounded-md hover:bg-[#2d2e83] transition duration-300 hover:scale-105 bg-[#007eb8] px-3 py-1"
                    onClick={() => {callRegister()}}
                    >Buscar
                </button>
            </div>
            <div>
                <h4>Fecha: {selectedDate}</h4>
            </div>
            <div>
                <ul>
                    {filterRegister.map((regis, index) => (
                        <li key={index}>{regis.encabezadoArchivo}</li>
                    ))}
                </ul>
            </div>
          <Link className="absolute text-white rounded-md hover:bg-[#2d2e83] transition duration-300 hover:scale-105 bg-[#007eb8] px-3 py-1 left-10 bottom-10" href={"/"}>Volver</Link>
        </main>
    )
}