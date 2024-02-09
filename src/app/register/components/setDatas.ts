import HeaderFile from "./headerFile";
import HeaderLote from "./HeaderLote";
import RegisterDetail from "./registerDetail";
import { datePy } from "./datePython";
import { RegistersDates, createRegister } from "@/app/api/registersRecaudos";

interface DateParams {
    convenio: string;
    valuePay: string;
    factura: string;
}

export default async function setDatas({ convenio, valuePay, factura }: DateParams): Promise<boolean> {
    const registerDatas: RegistersDates = {
      "encabezadoArchivo": HeaderFile(),
      "encabezadoLote": HeaderLote(convenio),
      "registroDetalle": RegisterDetail(factura, valuePay),
      "fecha": datePy(),
    };
  
    try {
      await createRegister(registerDatas);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }