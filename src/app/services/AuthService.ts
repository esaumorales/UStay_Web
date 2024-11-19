import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../core/model/Usuario';
import { environment } from '../../environments/environment';


@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly apiUsuario = `${environment.API_URL}/apiusuario`;

  constructor(private http: HttpClient) {}

  addUsuario(usuario: Usuario): Observable<any> {
    return this.http.post(`${this.apiUsuario}/save`, usuario, { responseType: 'text' });
  }

  verifyUser(correo: string, contrasena: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUsuario}/verify`, { correo, contrasena });
  }
}
