"use client"

import { useState } from "react";

export default function Home() {

  const [code, setCode] = useState("")

  function ListenCode() {
    let currentCode = ""
    window.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        window.removeEventListener("keydown", () => {});
        return;
      }
      if (event.key != "Alt") {
        currentCode = currentCode + event.key
        setCode(currentCode)
      }
    })
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5">
      <h1 className="text-3xl m-12">Recaudos Impuestos</h1>
      <div onClick={ListenCode} className="p-5 border-2 rounded-lg border-gray-500 border-solid hover:scale-105 transition-all duration-200">
        <figure className="flex justify-center">
          <img src="codigo.png" alt="" />
        </figure>
        <h1>Escanear codigo</h1>
      </div>
      <div>
        <h3>Codigo: {code}</h3>
        <h3>Fecha:</h3>
        <h3>Monto:</h3>
        <h3>Convenio</h3>
      </div>
    </main>
  );
}
