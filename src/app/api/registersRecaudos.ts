import axios from "axios";

export interface RegistersDates {
    encabezadoArchivo: string
    encabezadoLote: string
    registroDetalle: string
    fecha: string
}

const registerRecaudo = axios.create({
    baseURL: 'http://127.0.0.1:8000/registers/api/v1/registers/'
})

export const createRegister = (dates: RegistersDates) => registerRecaudo.post('/', dates)

export const getAllRegister = () => registerRecaudo.get('/')