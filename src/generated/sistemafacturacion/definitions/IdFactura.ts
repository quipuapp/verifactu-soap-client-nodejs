
/**
 * IDFactura
 * @targetNSAlias `sf`
 * @targetNamespace `https://www2.agenciatributaria.gob.es/static_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/SuministroInformacion.xsd`
 */
export interface IdFactura {
    /** NIFType|string|length */
    IDEmisorFactura?: string;
    /** TextoIDFacturaType|string|minLength,maxLength */
    NumSerieFactura?: string;
    /** fecha|string|length,pattern */
    FechaExpedicionFactura?: string;
}
