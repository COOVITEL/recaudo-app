import axios from "axios";

export interface HeaderLoteDatas {
    encabezadoLote: string
    encabezadoArchivo: number
}

const headerLoteApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/registers/api/v1/headerLote/'
})

export const createHeaderLote = (dates: HeaderLoteDatas) => headerLoteApi.post('/', dates)

export const getAllHeaderLote = () => headerLoteApi.get('/')