import { Component } from '@angular/core';
import { MainLayoutComponent } from '../shared/main-layout/main-layout.component';
import { HeaderComponent } from '../shared/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainLayoutComponent, HeaderComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

}
