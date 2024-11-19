import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Partner } from "../core/model/Partner";
import { environment } from "../../environments/environment";

@Injectable({providedIn:'root'})
export class partnerService{
    private readonly _http = inject(HttpClient);

    private readonly apiPartner = `${environment.API_URL}/partner`;

    
    getAllPartners(): Observable<any>{
        return this._http.get(this.apiPartner+`/listar`)
    }

    getPartner(id:number): Observable<any>{
        return this._http.get(this.apiPartner+`/listar/`+id)
    }


    addPartner(partner: Partner, img: File, img2: File): Observable<any> {
        const formData = new FormData();
        
        // Agrega cada campo del edificio al FormData
        formData.append('direccion', partner.direccion || '');
        formData.append('correo_empresa', partner.correo_empresa || '');
        formData.append('telefono_empresa', partner.telefono_empresa?.toString() || '');
        formData.append('dni', partner.dni || '');

        
        // Agrega la imagen al FormData
        formData.append('file', img);
        formData.append('file2', img2);
    
        return this._http.post(`${this.apiPartner}/save`, formData, { responseType: 'text' });
      }
    }
