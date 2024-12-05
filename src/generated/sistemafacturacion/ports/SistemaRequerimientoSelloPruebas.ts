import { RegFactuSistemaFacturacion } from "../definitions/RegFactuSistemaFacturacion";
import { SfRrespuestaRegFactuSistemaFacturacionType } from "../definitions/SfRrespuestaRegFactuSistemaFacturacionType";

export interface SistemaRequerimientoSelloPruebas {
    RegFactuSistemaFacturacion(regFactuSistemaFacturacion: RegFactuSistemaFacturacion, callback: (err: any, result: SfRrespuestaRegFactuSistemaFacturacionType, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}