import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Inmueble } from "../core/model/Inmueble";

@Injectable({providedIn: 'root'})
export class InmuebleService {
    
    private readonly _http = inject(HttpClient);

    private readonly apiInmueble = 'http://localhost:8864/inmueble';

    
    getAllInmuebles(): Observable<any>{
        return this._http.get(this.apiInmueble+"/listar")
    }

    getInmueble(id:number): Observable<any>{
        return this._http.get(this.apiInmueble+"/listar/"+id)
    }

    addInmueble(inmueble: Inmueble, imagen: File, imagen2: File): Observable<any>{
        const formData = new FormData();

        formData.append('descripcion', inmueble.descripcion || '');
        formData.append('disponibilidad', String(inmueble.disponibilidad) || '');
        formData.append('precio', inmueble.precio.toString() || '');
        formData.append('n_cuarto', inmueble.n_cuarto.toString() ||  '');
        formData.append('ilove', String(inmueble.ilove) || '');
        
        formData.append('file', imagen);
        formData.append('file2', imagen2);
        
        return this._http.post(`${this.apiInmueble}/save`, formData, { responseType: 'text' });
    }
}