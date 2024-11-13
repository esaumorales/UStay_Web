import { Inmueble } from "./Inmueble";

export interface Servicios {
    id: number;
    lavandería: string;
    seguridad: string;
    agua: string;
    pensión: string;
    cable: string;
    luz: string;
    almacén: string;
    wifi: string;
    garaje: string;
    calefacción: string;
    limpieza: string;
    inmueble: Inmueble;
}