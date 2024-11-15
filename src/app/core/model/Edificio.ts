import { Partner } from "./Partner";
import { Zona } from "./zona";

export interface Edificio{
    id: number;
    referenciaEdificio?: string;
    direccion?: string;
    npisos: number;
    regla_casa: string;
    imagen: string;
    urlMap: string;
    zona:Zona;
    partner: Partner;
}
