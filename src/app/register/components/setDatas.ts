import HeaderFile from "./headerFile";
import HeaderLote from "./HeaderLote";
import RegisterDetail from "./registerDetail";
import { Datas, createRegister } from "../../api/apiConection"
import { datePy } from "./datePython";

interface DateParams {
    convenio: string;
    valuePay: string;
    factura: string;
}

export default function setDatas({convenio, valuePay, factura}: DateParams) {
    const registerDatas: Datas = {
        "encabezadoArchivo": HeaderFile(),
        "encabezadoLote": HeaderLote(convenio),
        "registroDetalle": RegisterDetail(factura, valuePay),
        "fecha": datePy(),
    }
    async function createdRegister() {
        await createRegister(registerDatas)
    }
    createdRegister()
}
