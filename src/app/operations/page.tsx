"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { RegistersDates, getAllRegister } from "../api/registersRecaudos"

interface countDates {
    headerLote: string[],
    allDates: RegistersDates
}

export default function Operations() {
    const [selectedDate, setSelectedDate] = useState('')
    const [registers, setRegisters] = useState<RegistersDates[]>([])
    const [filters, setFilters] = useState<RegistersDates[]>([])
    const [filterHeaderFile, setFilterHeaderFile] = useState<string[]>([])
    const [filterHeaderLote, setFilterHeaderLote] = useState<string[]>([])
    const [displayDates, setDisplayDates] = useState(false)
    const [sumValues, setSumValues] = useState({})
    const [sumTotal, setSumTotal] = useState(0)
    const zero = "0"

    useEffect(() => {
        async function callRegis() {
            const res = await getAllRegister()
            setRegisters(res.data)
        }
        callRegis()
    }, [])

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let date = event.target.value
        setDisplayDates(false)
        setFilters([])
        setFilterHeaderFile([])
        setFilterHeaderLote([])
        setSelectedDate(date)
    }

    function calculateValues(lotes: string[], registers: RegistersDates[]): Record<string, number> {
        const result: Record<string, number> = {}
        lotes.forEach(lote => {
            result[lote] = 0
            registers.forEach(regis => {
                if (regis.encabezadoLote == lote) {
                    console.log(regis.registroDetalle.substring(50, 66))
                    result[lote] += parseInt(regis.registroDetalle.substring(50, 66))
                }
            })
        })
        return result
    }

    function callRegister() {
            setDisplayDates(true)
            const filter = registers.filter((regis) => regis.fecha == selectedDate)
            setFilters(filter)
            const headerFile = filter.map((regis) => regis.encabezadoArchivo)
            const filterfiles = [...new Set(headerFile)]
            setFilterHeaderFile(filterfiles)
            const headerLote = filter.map((regis) => regis.encabezadoLote)
            const filterLotes = [...new Set(headerLote)]
            setFilterHeaderLote(filterLotes)
            const values = calculateValues(filterLotes, filter)
            setSumValues(values)
            setSumTotal(Object.values(values).reduce((total, value) => total + value, 0))
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-1">
            <h1 className="text-5xl font-medium m-6">Listado de Recaudos de Impuestos</h1>
            <div className="flex flex-col items-center justify-center bg-white px-10 py-2 rounded-xl">
                <h3 className="font-bold">Seleccione una fecha</h3>
                <div className="flex flex-wrap gap-5 m-2">
                    <input className="border-2 border-zinc-400 rounded-md" type="date" onChange={handleDateChange}/>
                    <button
                        className="text-white rounded-md hover:bg-[#2d2e83] transition duration-300 hover:scale-105 bg-[#007eb8] px-3 py-1"
                        onClick={() => {callRegister()}}
                        >Buscar
                    </button>
                </div>
                <div>
                    <h4>Fecha: {selectedDate}</h4>
                </div>
            </div>
            <div className={`m-5 p-5 bg-white rounded-lg shadow-gray-800 shadow-lg ${displayDates ? '' : 'hidden'}`}>
                <ul>
                    <li>{filterHeaderFile[0]}{zero.padEnd(107, "_")}</li>
                    {filterHeaderLote.map((lote, index) => {
                        let ind = index + 1
                        let count =  1;

                        return (
                            <>
                            <li key={`lote-${index}`}>{lote}{zero.padEnd(143, "_")}</li>
                            {filters.map((regis, indexx) => {
                                if (regis.encabezadoLote === lote) {
                                count++;
                                return <li key={`detalle-${indexx}`}>{regis.registroDetalle.slice(0, -1)}{count}</li>;
                                }
                                return null;
                            })}
                            <li>{`08${(count - 1).toString().padStart(9, "0")}${sumValues[lote].toString().padStart(18, "0")}${ind.toString().padStart(4, "0")}`}</li>
                            </>
                    );
                    })}
                    <li>09{filters.length.toString().padStart(9, "0")}{sumTotal.toString().padStart(18, "0")}</li>
                </ul>
            </div>
          <Link className="text-white text-2xl rounded-md hover:bg-[#2d2e83] transition duration-300 hover:scale-105 bg-[#007eb8] px-3 py-1 mt-5 mb-10" href={"/"}>Volver</Link>
        </main>
    )
}