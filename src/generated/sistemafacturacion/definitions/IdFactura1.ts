
/**
 * IDFactura
 * @targetNSAlias `sf`
 * @targetNamespace `https://www2.agenciatributaria.gob.es/static_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/SuministroInformacion.xsd`
 */
export interface IdFactura1 {
    /** NIFType|string|length */
    IDEmisorFacturaAnulada?: string;
    /** TextoIDFacturaType|string|minLength,maxLength */
    NumSerieFacturaAnulada?: string;
    /** fecha|string|length,pattern */
    FechaExpedicionFacturaAnulada?: string;
}
