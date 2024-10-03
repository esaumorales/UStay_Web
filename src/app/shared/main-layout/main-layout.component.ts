import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import HomeComponent from '../../home/home.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet,SidebarComponent,HeaderComponent,HomeComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
