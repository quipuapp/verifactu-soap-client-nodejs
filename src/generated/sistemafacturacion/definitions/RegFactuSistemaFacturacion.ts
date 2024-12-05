import { Cabecera } from "./Cabecera";
import { RegistroFactura } from "./RegistroFactura";

/** RegFactuSistemaFacturacion */
export interface RegFactuSistemaFacturacion {
    /** Cabecera */
    Cabecera?: Cabecera;
    /** RegistroFactura[] */
    RegistroFactura?: Array<RegistroFactura>;
}
