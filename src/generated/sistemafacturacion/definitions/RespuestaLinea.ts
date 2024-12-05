import { IdFactura } from "./IdFactura";
import { Operacion } from "./Operacion";
import { RegistroDuplicado } from "./RegistroDuplicado";

/**
 * RespuestaLinea
 * @targetNSAlias `sfR`
 * @targetNamespace `https://www2.agenciatributaria.gob.es/static_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/RespuestaSuministro.xsd`
 */
export interface RespuestaLinea {
    /** IDFactura */
    IDFactura?: IdFactura;
    /** Operacion */
    Operacion?: Operacion;
    /** TextMax70Type|string|maxLength */
    RefExterna?: string;
    /** EstadoRegistroType|string|Correcto,AceptadoConErrores,Incorrecto */
    EstadoRegistro?: string;
    /** ErrorDetalleType|integer */
    CodigoErrorRegistro?: string;
    /** TextMax1500Type|string|maxLength */
    DescripcionErrorRegistro?: string;
    /** RegistroDuplicado */
    RegistroDuplicado?: RegistroDuplicado;
}
