import { Component } from '@angular/core';
import { MainLayoutComponent } from '../shared/main-layout/main-layout.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainLayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

}
