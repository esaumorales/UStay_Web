import { HttpClient } from "@angular/common/http";
import { inject, Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Edificio } from "../core/model/Edificio";
import { environment } from "../../environments/environment";

@Injectable({providedIn: 'root'})
export class EdificioService{

    private readonly _http = inject(HttpClient);

    private readonly apiEdifico = `${environment.API_URL}/api/edificio`;

    
    getAllEdificios(): Observable<any>{
        return this._http.get(this.apiEdifico+`/listar`)
    }

    getEdificio(id:number): Observable<any>{
        return this._http.get(this.apiEdifico+`/listar/`+id)
    }


    addEdificio(edificio: Edificio, imagen: File): Observable<any> {
        const formData = new FormData();
        
        // Agrega cada campo del edificio al FormData
        formData.append('referenciaEdificio', edificio.referenciaEdificio || '');
        formData.append('direccion', edificio.direccion || '');
        formData.append('npisos', edificio.npisos?.toString() || '');
        formData.append('reglaCasa', edificio.regla_casa || '');
        formData.append('urlMap', edificio.urlMap || '');
        formData.append('zonaId', edificio.zona.id.toString()); // Usa solo el ID de la zona
        
        // Agrega la imagen al FormData
        formData.append('file', imagen);
    
        return this._http.post(`${this.apiEdifico}/save`, formData, { responseType: 'text' });
      }
    }

