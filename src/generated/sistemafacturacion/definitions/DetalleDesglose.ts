
/**
 * DetalleDesglose
 * @targetNSAlias `sf`
 * @targetNamespace `https://www2.agenciatributaria.gob.es/static_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/SuministroInformacion.xsd`
 */
export interface DetalleDesglose {
    /** ImpuestoType|string|01,02,03,05 */
    Impuesto?: string;
    /** IdOperacionesTrascendenciaTributariaType|string|01,02,03,04,05,06,07,08,09,10,11,14,15,17,18,19,20 */
    ClaveRegimen?: string;
    /** CalificacionOperacionType|string|S1,S2,N1,N2 */
    CalificacionOperacion?: string;
    /** OperacionExentaType|string|E1,E2,E3,E4,E5,E6 */
    OperacionExenta?: string;
    /** Tipo2.2Type|string|pattern */
    TipoImpositivo?: string;
    /** ImporteSgn12.2Type|string|pattern */
    BaseImponibleOimporteNoSujeto?: string;
    /** ImporteSgn12.2Type|string|pattern */
    BaseImponibleACoste?: string;
    /** ImporteSgn12.2Type|string|pattern */
    CuotaRepercutida?: string;
    /** Tipo2.2Type|string|pattern */
    TipoRecargoEquivalencia?: string;
    /** ImporteSgn12.2Type|string|pattern */
    CuotaRecargoEquivalencia?: string;
}
