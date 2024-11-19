import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Zona } from '../core/model/zona';
import { environment } from '../../environments/environment'; 

@Injectable({ providedIn: 'root' })
export class ZonaService {
  private readonly apiZona = `${environment.API_URL}/zona`;

  constructor(private http: HttpClient) {}

  listar(): Observable<Zona[]> {
    return this.http.get<Zona[]>(`${this.apiZona}/listar`);
  }
}
