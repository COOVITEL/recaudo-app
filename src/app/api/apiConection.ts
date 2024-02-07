import axios from "axios";

export interface Datas {
    encabezadoArchivo: string
    encabezadoLote: string
    registroDetalle: string
    fecha: string
}

const registerApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/registers/api/v1/registers/'
})

export const createRegister = (dates: Datas) => registerApi.post('/', dates)

export const getAllRegisters = () => registerApi.post('/')