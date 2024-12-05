
/**
 * DatosPresentacion
 * @targetNSAlias `sf`
 * @targetNamespace `https://www2.agenciatributaria.gob.es/static_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/SuministroInformacion.xsd`
 */
export interface DatosPresentacion {
    /** NIFType|string|length */
    NIFPresentador?: string;
    /** Timestamp|string|length,pattern */
    TimestampPresentacion?: string;
}
