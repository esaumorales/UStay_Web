import { Edificio } from "./Edificio";


export interface Inmueble{
    id: number;
    descripcion: string;
    precio: number;
    disponibilidad: boolean;
    n_cuarto: number;
    edificio: Edificio;
    ilove: boolean;
    imagen: string;
    imagen2: string;
}