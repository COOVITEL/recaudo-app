"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { Datas, getAllRegisters } from "../api/headerFileApi"

export default function Operations() {
    const [selectedDate, setSelectedDate] = useState('')
    const [registers, setRegisters] = useState([])
    const [headerFiles, setHeaderFiles] = useState([])

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let date = event.target.value
        setSelectedDate(date)
    }

    useEffect(() => {
        async function callRegis() {
            const res = await getAllRegisters()
            setRegisters(res.data)
        }
        callRegis()
    }, [])

    function callRegister() {
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
                    {registers.map((regis: Datas) => {

                            return (
                                <li className="m-5">
                                <article>
                                    <h3>{regis.encabezadoArchivo.substring(0, 55)}</h3>
                                    <h3>{regis.fecha}</h3>
                                </article>
                            </li>
                        )
                    })}
                </ul>
            </div>
          <Link className="absolute text-white rounded-md hover:bg-[#2d2e83] transition duration-300 hover:scale-105 bg-[#007eb8] px-3 py-1 left-10 bottom-10" href={"/"}>Volver</Link>
        </main>
    )
}