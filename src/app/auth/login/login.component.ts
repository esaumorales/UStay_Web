import { AsyncPipe, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { Observable } from 'rxjs';
import swal from 'sweetalert';
import Swal from 'sweetalert2';

export class USER {
  userId: number;
  userEmail: string;
  userPassword: string;
  userName: string;
  userFirtsName: string;

  constructor() {
    this.userId = 0;
    this.userEmail = '';
    this.userPassword = '';
    this.userName = '';
    this.userFirtsName = '';
  }
}
export class USERSignUp {
  userEmail: string;
  userPassword: string;

  constructor() {
    this.userEmail = '';
    this.userPassword = '';
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
  userSignUp: USERSignUp = new USERSignUp();
  http = inject(HttpClient);
  userList$: Observable<USER[]> = new Observable<USER[]>();


  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router // Segundo "constructor" combinado
  ) {
    // Lógica condicional según el servicio que necesites usar
    if (isPlatformBrowser(this.platformId)) {
      console.log('Estamos en el navegador');
    }
    if (router) {
      console.log('Router disponible', router);
    }
  }

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
  onSaveUser() {
    // Obtener la lista de usuarios existentes
    this.http.get<USER[]>('http://localhost:3000/userList').subscribe((existingUsers: USER[]) => {
      // Determinar el máximo userId existente
      const maxId = existingUsers.length > 0
        ? existingUsers.reduce((max, user) => Math.max(max, user.userId), 0)
        : 0;

      // Asignar el siguiente userId (secuencial)
      this.userObj.userId = maxId + 1;

      // Crear el objeto de usuario a guardar
      const userToSave = {
        userId: this.userObj.userId,
        userEmail: this.userObj.userEmail,
        userPassword: this.userObj.userPassword,
        userName: this.userObj.userName,
        userFirtsName: this.userObj.userFirtsName
      };

      // Hacer la solicitud POST para guardar el nuevo usuario
      this.http
        .post<USER>('http://localhost:3000/userList', userToSave)
        .subscribe((res: USER) => {
          this.registrado()
        }, error => {
          console.error('Error creando usuario:', error);
          alert('Error al crear el usuario. Por favor, inténtelo más tarde.');
        });
    }, error => {
      console.error('Error al obtener usuarios:', error);
    });
  }



  oneLogin() {
    this.http.get<USER[]>('http://localhost:3000/userList')
      .subscribe(users => {
        const isUserPresent = users.find(user =>
          user.userEmail === this.userSignUp.userEmail &&
          user.userPassword === this.userSignUp.userPassword
        );

        if (isUserPresent) {
          localStorage.setItem('loggedUser', JSON.stringify(isUserPresent));
          this.router.navigateByUrl('/home');
          this.ingreso()
        } else {
          this.error();
        }
      }, error => {
        console.error('Error fetching users:', error);
        alert('Error al intentar iniciar sesión. Por favor, inténtelo más tarde.');
      });
  }

ingreso(){
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Ingreso exitoso",
    showConfirmButton: false,
    timer: 1500
  });
  
}

error(){
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Usuario no encontrado!",
    footer: '<a href="#">¿Has olvidado tu contraseña?</a>'
  });
}

registrado(){
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Registrado exitosamente",
    showConfirmButton: false,
    timer: 1500
  });
}


    // this.http.post<USER>("http://localhost:3000/createUser", this.userObj).subscribe((res:USER)=>{
    //   alert("Usuario Creado")

    // })
  }
  // Usando Local Storage
  //   oneRegister() {
  //     debugger;
  //     const localUser = localStorage.getItem('angular17users');
  //     if(localUser != null){
  //       const users = JSON.parse(localUser);
  //       users.push(this.userSignUp);
  //       localStorage.setItem('angular17users', JSON.stringify(users))
  //     } else{
  //       const users = [];
  //       users.push(this.userSignUp);
  //       localStorage.setItem('angular17users', JSON.stringify(users))
  //     }
  //     alert('Usuario Registrado Exitosacmente')
  //   }
