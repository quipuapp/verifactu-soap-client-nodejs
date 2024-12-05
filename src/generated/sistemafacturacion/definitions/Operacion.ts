
/**
 * Operacion
 * @targetNSAlias `sf`
 * @targetNamespace `https://www2.agenciatributaria.gob.es/static_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/SuministroInformacion.xsd`
 */
export interface Operacion {
    /** TipoOperacionType|string|Alta,Anulacion */
    TipoOperacion?: string;
    /** SubsanacionType|string|S,N */
    Subsanacion?: string;
    /** RechazoPrevioType|string|N,S,X */
    RechazoPrevio?: string;
    /** SinRegistroPrevioType|string|S,N */
    SinRegistroPrevio?: string;
}
