"use client"

import { useEffect, useState } from "react";
import currentDate from "./date";
import Barcode from "./Barcode";

export default function Home() {

  const [code, setCode] = useState("")
  const [count, setCount] = useState(0)
  const [date, setDate] = useState("")
  const [valuePay, setValuePay] = useState("")
  const [factura, setFactura] = useState("")
  const [convenio, setConvenio] = useState("")
  const [styleCode, setStyleCode] = useState(false)
  const [span, setSpan] = useState(false)
  const [button, setButton] = useState(false)
 
  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      window.removeEventListener("keydown", handleKeyDown);
      setStyleCode(false)
      if (code != "") {
        setDate(code.substring(52, 60))
        const current = currentDate()
        if (parseInt(code.substring(52, 60)) < parseInt(current)) {
          setSpan(true)
        } else {
          setValuePay(code.substring(36 ,50))
          setFactura(code.substring(20, 32))
          setConvenio(code.substring(3, 16))
          setButton(true)
        }
      }
      return;
    }
    if (event.key !== "Alt" && event.key !== "(" && event.key != ")") {
      if ((count == 32 || count == 53) && event.key == "0") {
        setCount((prevCount) => prevCount + 1)
        return
      }
      if ((count == 33 || count == 54) && event.key == "2") {
        setCount((prevCount) => prevCount + 1)
        return
      }
      if ((count == 34 || count == 55) && event.key == "9") {
        setCount((prevCount) => prevCount + 1)
        return
      }else {
        setCode((prevCode) => prevCode + event.key);
        setCount((prevCount) => prevCount + 1)
      }
    }
  }

  useEffect(() => {
     if (styleCode) {
       window.addEventListener("keydown", handleKeyDown);
     } else {
       window.removeEventListener("keydown", handleKeyDown);
     }
     // Cleanup function to remove the event listener when the component unmounts
     return () => {
       window.removeEventListener("keydown", handleKeyDown);
     };
  }, [styleCode, count]);
 
  function ListenCode() {
    setCode("")
    setConvenio("")
    setCount(0)
    setValuePay("")
    setDate("")
    setFactura("")
    setSpan(false)
    setButton(false)
    setStyleCode((prevStyleCode) => !prevStyleCode);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-5xl font-mono m-6">Recaudos Impuestos</h1>
      <div
        onClick={ListenCode}
         className={`flex flex-col h-[300px] cursor-pointer justify-center mb-5 items-center border-2 rounded-lg border-gray-500 border-solid hover:scale-105 transition-all duration-300 ${!styleCode ? '' : 'bg-blue-400/50'}`}
        >
        <Barcode />
        <h1 className="text-center pb-5">Escanear codigo</h1>
      </div>
        <h4 className={`text-5xl text-red-600 ${span ? '' : 'hidden'}`}>La fecha de pago expiro</h4>
      <div>
        <h3><strong>Codigo:</strong> {code}</h3>
        <h3><strong>Fecha:</strong> {date}</h3>
        <h3><strong>Monto:</strong> {valuePay}</h3>
        <h3><strong>N. Factura:</strong> {factura}</h3>
        <h3><strong>Convenio:</strong> {convenio}</h3>
      </div>
      <button className={`cursor-pointer text-2xl px-4 py-2 rounded-md bg-[#007eb8] text-white border-2 hover:bg-[#2d2e83] transition duration-300 hover:scale-105 ${button ? '' : 'hidden'}`}>Enviar</button>
    </main>
  );
}
