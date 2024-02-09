import HeaderFile from "./headerFile";
import HeaderLote from "./HeaderLote";
import RegisterDetail from "./registerDetail";
import { datePy } from "./datePython";
import { RegistersDates, createRegister, getAllRegister } from "@/app/api/registersRecaudos";

interface DateParams {
    convenio: string;
    valuePay: string;
    factura: string;
}

export default async function setDatas({ convenio, valuePay, factura }: DateParams): Promise<Object> {
    const registerDatas: RegistersDates = {
      "encabezadoArchivo": HeaderFile(),
      "encabezadoLote": HeaderLote(convenio),
      "registroDetalle": RegisterDetail(factura, valuePay),
      "fecha": datePy(),
    };

    try {
      await createRegister(registerDatas);
      const res = await getAllRegister()
      const filterres = res.data.reverse()
      return {success: true, data: filterres[0]["id"]};
    } catch (error) {
      console.log(error);
      return {success: false, data: 'No se creo el registro'};
    }
  }
