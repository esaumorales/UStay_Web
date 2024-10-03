import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent implements OnInit {
  signUpButton!: HTMLElement;
  signInButton!: HTMLElement;
  container!: HTMLElement;

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
  }
}
