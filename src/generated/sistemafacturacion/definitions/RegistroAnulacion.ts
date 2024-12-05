import { IdFactura1 } from "./IdFactura1";
import { Tercero } from "./Tercero";
import { Encadenamiento1 } from "./Encadenamiento1";
import { SistemaInformatico } from "./SistemaInformatico";
import { Signature } from "./Signature";

/**
 * RegistroAnulacion
 * @targetNSAlias `sf`
 * @targetNamespace `https://www2.agenciatributaria.gob.es/static_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/SuministroInformacion.xsd`
 */
export interface RegistroAnulacion {
    /** VersionType|string|1.0 */
    IDVersion?: string;
    /** IDFactura */
    IDFactura?: IdFactura1;
    /** TextMax60Type|string|maxLength */
    RefExterna?: string;
    /** SinRegistroPrevioType|string|S,N */
    SinRegistroPrevio?: string;
    /** RechazoPrevioAnulacionType|string|S,N */
    RechazoPrevio?: string;
    /** GeneradoPorType|string|E,D,T */
    GeneradoPor?: string;
    /** Generador */
    Generador?: Tercero;
    /** Encadenamiento */
    Encadenamiento?: Encadenamiento1;
    /** SistemaInformatico */
    SistemaInformatico?: SistemaInformatico;
    /** dateTime */
    FechaHoraHusoGenRegistro?: Date;
    /** TipoHuellaType|string|01 */
    TipoHuella?: string;
    /** TextMax64Type|string|maxLength */
    Huella?: string;
    /** Signature */
    Signature?: Signature;
}
