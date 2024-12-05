
/**
 * RegistroAnterior
 * @targetNSAlias `sf`
 * @targetNamespace `https://www2.agenciatributaria.gob.es/static_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/SuministroInformacion.xsd`
 */
export interface RegistroAnterior {
    /** NIFType|string|length */
    IDEmisorFactura?: string;
    /** TextMax60Type|string|maxLength */
    NumSerieFactura?: string;
    /** fecha|string|length,pattern */
    FechaExpedicionFactura?: string;
    /** TextMax64Type|string|maxLength */
    Huella?: string;
}
