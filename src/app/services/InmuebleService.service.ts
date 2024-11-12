import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

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

    
}