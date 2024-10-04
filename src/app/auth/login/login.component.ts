import { AsyncPipe, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

export class USER {
  userId: number;
  userEmail: string;
  userPassword: string;
  userName: string;

  constructor() {
    this.userId = 0;
    this.userEmail = '';
    this.userPassword = '';
    this.userName = '';
  }
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, AsyncPipe],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export default class LoginComponent implements OnInit {
  signUpButton!: HTMLElement;
  signInButton!: HTMLElement;
  container!: HTMLElement;

  userObj: USER = new USER();
  http = inject(HttpClient);
  userList$: Observable<USER[]> = new Observable<USER[]>();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // Verifica si estamos en un entorno del navegador
    if (isPlatformBrowser(this.platformId)) {
      this.signUpButton = document.getElementById('signUp') as HTMLElement;
      this.signInButton = document.getElementById('signIn') as HTMLElement;
      this.container = document.getElementById('container') as HTMLElement;

      this.signUpButton.addEventListener('click', () => {
        this.container.classList.add('right-panel-active');
      });

      this.signInButton.addEventListener('click', () => {
        this.container.classList.remove('right-panel-active');
      });
    }
    this.userList$ = this.http.get<USER[]>('http://localhost:3000/userList');
    this.getUser(); // Llamar a getUser en ngOnInit
  }

  getUser() {
    this.http
      .get<USER[]>('http://localhost:3000/userList')
      .subscribe((res: USER[]) => {
        // Procesar la respuesta aquí
      });
  }
  onSaveUser(){

    this.http.get<USER>("http://localhost:3000/createUser").subscribe((res:USER)=>{
      alert("Usuario Creado")

    })
    // this.http.post<USER>("http://localhost:3000/createUser", this.userObj).subscribe((res:USER)=>{
    //   alert("Usuario Creado")

    // })
  }
}
