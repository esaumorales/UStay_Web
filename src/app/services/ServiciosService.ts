import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({providedIn: 'root'})
export class ServiciosService {
    
    private readonly _http = inject(HttpClient);

    private readonly apiServicios = `${environment.API_URL}/servicios`;

    
    getAllServicios(): Observable<any>{
        return this._http.get(this.apiServicios+`/listar`)
    }

    getServiciosByInmueble(inmuebleId:number): Observable<any>{
        return this._http.get(this.apiServicios+`/inmueble/`+inmuebleId)
    }


}