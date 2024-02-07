import HeaderFile from "./headerFile";
import HeaderLote from "./HeaderLote";
import RegisterDetail from "./registerDetail";
import { HeaderFileDatas, createHeaderFile, getAllHeaderFile } from "../../api/headerFileApi"
import { datePy } from "./datePython";
import { HeaderLoteDatas, createHeaderLote, getAllHeaderLote } from "@/app/api/headerLote";
import { RegisterDetailDatas } from "@/app/api/registerDetail";

interface DateParams {
    convenio: string;
    valuePay: string;
    factura: string;
}

export default async function setDatas({ convenio, valuePay, factura }: DateParams) {
    const registerHeaderFileDatas: HeaderFileDatas = {
        "encabezadoArchivo": HeaderFile(),
        "fecha": datePy(),
    };

    try {
        const resHeaderFile = await createdHeaderFileRegister(registerHeaderFileDatas);
        const dateas: HeaderLoteDatas = {
            "encabezadoArchivo": resHeaderFile,
            "encabezadoLote": HeaderLote(convenio)
        }
        const resHeaderLote = await createdHeaderLogoRegister(dateas)
        const datasDetail: RegisterDetailDatas = {
            "encabezadoLote": resHeaderLote,
            "registrodetalle": RegisterDetail(factura, valuePay),
        }
        
        
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

async function createdDetail(dates: RegisterDetailDatas) {
    
}

async function createdHeaderFileRegister(registerDatas: HeaderFileDatas) {
    let res = await getAllHeaderFile();
    let headerFileData = res.data;
    let id =  0;
    const headersFiles = headerFileData.map((header: HeaderFileDatas) => header.encabezadoArchivo);

    if (!headersFiles.includes(registerDatas.encabezadoArchivo)) {
        try {
            await createHeaderFile(registerDatas);
            res = await getAllHeaderFile();
            headerFileData = res.data;
            const currentHeaderFile = headerFileData.filter((regis: HeaderFileDatas) => regis.encabezadoArchivo == registerDatas.encabezadoArchivo);
            id = currentHeaderFile[0].id
        } catch (error) {
            console.log(error)
        }
    } else {
        res = await getAllHeaderFile();
        headerFileData = res.data;
        const currentHeaderFile = headerFileData.filter((regis: HeaderFileDatas) => regis.encabezadoArchivo == registerDatas.encabezadoArchivo);
        id = currentHeaderFile[0].id
    }
    return id;
}

async function createdHeaderLogoRegister(dateas: HeaderLoteDatas) {
    let res = await getAllHeaderLote();
    let headerLoteData = res.data;
    let id =  0;
    const headersLotes = headerLoteData.map((header: HeaderLoteDatas) => header.encabezadoLote);
    console.log(headersLotes)
    if (!headersLotes.includes(dateas.encabezadoLote)) {
        try {
            await createHeaderLote(dateas);
            res = await getAllHeaderLote();
            headerLoteData = res.data;
            const currentHeaderLote = headerLoteData.filter((regis: HeaderLoteDatas) => regis.encabezadoLote ==dateas.encabezadoLote);
            id = currentHeaderLote[0].id
        } catch (error) {
            console.log(error)
        }
    } else {
        res = await getAllHeaderLote();
        headerLoteData = res.data;
        const currentHeaderFile = headerLoteData.filter((regis: HeaderLoteDatas) => regis.encabezadoLote == dateas.encabezadoLote);
        id = currentHeaderFile[0].id
    }
    return id;
}