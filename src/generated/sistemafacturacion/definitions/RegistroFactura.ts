import { RegistroAlta } from "./RegistroAlta";
import { RegistroAnulacion } from "./RegistroAnulacion";

/**
 * RegistroFactura
 * @targetNSAlias `sfLR`
 * @targetNamespace `https://www2.agenciatributaria.gob.es/static_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/SuministroLR.xsd`
 */
export interface RegistroFactura {
    /** RegistroAlta */
    RegistroAlta?: RegistroAlta;
    /** RegistroAnulacion */
    RegistroAnulacion?: RegistroAnulacion;
}
