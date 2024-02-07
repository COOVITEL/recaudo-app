import axios from "axios";

export interface RegisterDetailDatas {
    registrodetalle: string
    encabezadoLote: number
}

const registroDetailApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/registers/api/v1/registerDetail/'
})

export const createRegisterDetail = (dates: RegisterDetailDatas) => registroDetailApi.post('/', dates)

export const getAllRegisterDetail = () => registroDetailApi.get('/')