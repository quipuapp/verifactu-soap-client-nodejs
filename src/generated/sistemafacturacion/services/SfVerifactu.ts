import { SistemaVerifactu } from "../ports/SistemaVerifactu";
import { SistemaVerifactuSello } from "../ports/SistemaVerifactuSello";
import { SistemaVerifactuPruebas } from "../ports/SistemaVerifactuPruebas";
import { SistemaVerifactuSelloPruebas } from "../ports/SistemaVerifactuSelloPruebas";
import { SistemaRequerimiento } from "../ports/SistemaRequerimiento";
import { SistemaRequerimientoSello } from "../ports/SistemaRequerimientoSello";
import { SistemaRequerimientoPruebas } from "../ports/SistemaRequerimientoPruebas";
import { SistemaRequerimientoSelloPruebas } from "../ports/SistemaRequerimientoSelloPruebas";

export interface SfVerifactu {
    readonly SistemaVerifactu: SistemaVerifactu;
    readonly SistemaVerifactuSello: SistemaVerifactuSello;
    readonly SistemaVerifactuPruebas: SistemaVerifactuPruebas;
    readonly SistemaVerifactuSelloPruebas: SistemaVerifactuSelloPruebas;
    readonly SistemaRequerimiento: SistemaRequerimiento;
    readonly SistemaRequerimientoSello: SistemaRequerimientoSello;
    readonly SistemaRequerimientoPruebas: SistemaRequerimientoPruebas;
    readonly SistemaRequerimientoSelloPruebas: SistemaRequerimientoSelloPruebas;
}
