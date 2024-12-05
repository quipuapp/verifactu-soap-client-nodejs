import { ObligadoEmision } from "./ObligadoEmision";
import { RemisionVoluntaria } from "./RemisionVoluntaria";
import { RemisionRequerimiento } from "./RemisionRequerimiento";

/**
 * Cabecera
 * @targetNSAlias `sf`
 * @targetNamespace `https://www2.agenciatributaria.gob.es/static_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/SuministroInformacion.xsd`
 */
export interface Cabecera {
    /** ObligadoEmision */
    ObligadoEmision?: ObligadoEmision;
    /** Representante */
    Representante?: ObligadoEmision;
    /** RemisionVoluntaria */
    RemisionVoluntaria?: RemisionVoluntaria;
    /** RemisionRequerimiento */
    RemisionRequerimiento?: RemisionRequerimiento;
}
