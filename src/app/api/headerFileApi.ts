import axios from "axios";

export interface HeaderFileDatas {
    encabezadoArchivo: string
    fecha: string
}

const headerFileApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/registers/api/v1/headerFile/'
})

export const createHeaderFile = (dates: HeaderFileDatas) => headerFileApi.post('/', dates)

export const getAllHeaderFile = () => headerFileApi.get('/')