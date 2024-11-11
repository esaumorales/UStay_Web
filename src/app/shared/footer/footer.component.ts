import { Component } from '@angular/core';
import HomeComponent from '../../home/home.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
