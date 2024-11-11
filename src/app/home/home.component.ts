import { Component } from '@angular/core';
import { MainLayoutComponent } from '../shared/main-layout/main-layout.component';
import { HeaderComponent } from '../shared/header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainLayoutComponent, HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

}
