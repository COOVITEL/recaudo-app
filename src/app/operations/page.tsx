"use client"

import React, { useState } from "react"
import Link from "next/link"

export default function Operations() {
    const [selectedDate, setSelectedDate] = useState('')

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let date = event.target.value
        let setDate = date.replace(/-/g, '')
        setSelectedDate(setDate)
    }

    function callRegister() {
        async function callRegis() {

        }
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-5">
            <h1 className="text-3xl m-12 font-mono">Listado de Recaudos de Impuestos</h1>
                <h3>Seleccione la fecha a revisar</h3>
            <div className="flex flex-wrap gap-5">
                <input type="date" onChange={handleDateChange}/>
                <button
                    className="text-white rounded-md hover:bg-[#2d2e83] transition duration-300 hover:scale-105 bg-[#007eb8] px-3 py-1"
                    onClick={() => {}}
                    >Buscar
                </button>
            </div>
            <div>
                <h4>Fecha: {selectedDate}</h4>
            </div>
          <Link className="absolute text-white rounded-md hover:bg-[#2d2e83] transition duration-300 hover:scale-105 bg-[#007eb8] px-3 py-1 left-10 bottom-10" href={"/"}>Volver</Link>
        </main>
    )
}