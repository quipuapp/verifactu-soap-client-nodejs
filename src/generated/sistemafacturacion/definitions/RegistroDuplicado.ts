
/**
 * RegistroDuplicado
 * @targetNSAlias `sf`
 * @targetNamespace `https://www2.agenciatributaria.gob.es/static_files/common/internet/dep/aplicaciones/es/aeat/tike/cont/ws/SuministroInformacion.xsd`
 */
export interface RegistroDuplicado {
    /** TextMax20Type|string|maxLength */
    IdPeticionRegistroDuplicado?: string;
    /** EstadoRegistroSFType|string|Correcta,AceptadaConErrores,Anulada */
    EstadoRegistroDuplicado?: string;
    /** ErrorDetalleType|integer */
    CodigoErrorRegistro?: string;
    /** TextMax500Type|string|maxLength */
    DescripcionErrorRegistro?: string;
}
