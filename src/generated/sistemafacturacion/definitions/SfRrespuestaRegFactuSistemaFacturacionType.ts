import { DatosPresentacion } from "./DatosPresentacion";
import { Cabecera } from "./Cabecera";
import { RespuestaLinea } from "./RespuestaLinea";

/** sfR:RespuestaRegFactuSistemaFacturacionType */
export interface SfRrespuestaRegFactuSistemaFacturacionType {
    /** string */
    CSV?: string;
    /** DatosPresentacion */
    DatosPresentacion?: DatosPresentacion;
    /** Cabecera */
    Cabecera?: Cabecera;
    /** Tipo6Type|string|pattern */
    TiempoEsperaEnvio?: string;
    /** EstadoEnvioType|string|Correcto,ParcialmenteCorrecto,Incorrecto */
    EstadoEnvio?: string;
    /** RespuestaLinea[] */
    RespuestaLinea?: Array<RespuestaLinea>;
}
