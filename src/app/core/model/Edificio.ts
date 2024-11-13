import { Partner } from "./Partner";

export interface Edificio{
    id: number;
    referenciaEdificio?: string;
    direccion?: string;
    n_pisos?: number;
    regla_casa: string;
    img_edificio: string;
    url_map: string;
    partner: Partner;
}