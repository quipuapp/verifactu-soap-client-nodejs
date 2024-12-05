import { Client as SoapClient, createClientAsync as soapCreateClientAsync, IExOptions as ISoapExOptions } from "soap";
import { RegFactuSistemaFacturacion } from "./definitions/RegFactuSistemaFacturacion";
import { SfRrespuestaRegFactuSistemaFacturacionType } from "./definitions/SfRrespuestaRegFactuSistemaFacturacionType";
import { SfVerifactu } from "./services/SfVerifactu";
import { SfRequerimiento } from "./services/SfRequerimiento";

export interface SistemaFacturacionClient extends SoapClient {
    SfVerifactu: SfVerifactu;
    SfRequerimiento: SfRequerimiento;
    RegFactuSistemaFacturacionAsync(regFactuSistemaFacturacion: RegFactuSistemaFacturacion, options?: ISoapExOptions): Promise<[result: SfRrespuestaRegFactuSistemaFacturacionType, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create SistemaFacturacionClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<SistemaFacturacionClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
