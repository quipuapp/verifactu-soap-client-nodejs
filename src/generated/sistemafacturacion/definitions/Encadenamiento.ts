import { RegistroAnterior } from "./RegistroAnterior";

/** Encadenamiento */
export interface Encadenamiento {
    /** PrimerRegistroCadenaType|string|S */
    PrimerRegistro?: string;
    /** RegistroAnterior */
    RegistroAnterior?: RegistroAnterior;
}
