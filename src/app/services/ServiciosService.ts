import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class ServiciosService {
    
    private readonly _http = inject(HttpClient);

    private readonly apiServicios = 'http://localhost:8864/servicios';

    
    getAllServicios(): Observable<any>{
        return this._http.get(this.apiServicios+"/listar")
    }

    getServiciosByInmueble(inmuebleId:number): Observable<any>{
        return this._http.get(this.apiServicios+"/inmueble/"+inmuebleId)
    }


}