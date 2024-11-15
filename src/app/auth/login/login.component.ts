import { AsyncPipe, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from '../../core/model/Usuario';
import { AuthService } from '../../services/AuthService';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, AsyncPipe],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: Usuario = {
    id: 0,
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: ''
  };
  signUpButton!: HTMLElement;
  signInButton!: HTMLElement;
  container!: HTMLElement;

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      console.log('Estamos en el navegador');
    }
  }

  ngOnInit(): void {
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
  }
  iniciarSesion(event: Event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario

    // Verifica las credenciales utilizando AuthService
    this.authService.verifyUser(this.usuario.correo, this.usuario.contrasena).subscribe({
      next: (isAuthenticated) => {
        if (isAuthenticated) {
          // Redirige a la página de inicio si la autenticación es exitosa
          this.router.navigate(['/home']);
          Swal.fire({
            icon: 'success',
            title: 'Inicio de sesión exitoso',
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          // Muestra un mensaje de error si las credenciales no son correctas
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Correo o contraseña incorrectos. Por favor, inténtelo de nuevo.',
          });
        }
      },
      error: (error) => {
        console.error('Error al intentar iniciar sesión:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema al intentar iniciar sesión. Por favor, inténtelo más tarde.',
        });
      }
    });
  }

  Guardar1() {

    if (this.datosIngresados()) {
      this.Guardar();
    } else {
      this.mostrarError();
    }
  }

  mostrarError() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Ingrese todos los datos necesarios",
    });
  }

  showModal() {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Guardado exitosamente",
      showConfirmButton: false,
      timer: 1500,
      customClass: {
        popup: 'my-popup-class',
      }
    });
  }

  Guardar() {
    this.authService.addUsuario(this.usuario).subscribe((data) => {
      this.showModal();
      this.router.navigate(['/auth'])
      console.log(data)
    })
  }

  datosIngresados(): boolean {
    if (
      this.usuario &&
      this.usuario.nombre !== undefined &&
      this.usuario.apellido !== undefined &&
      this.usuario.correo !== undefined &&
      this.usuario.contrasena !== undefined 
    ) {
      return true;
    }
    return false;
  }
}
