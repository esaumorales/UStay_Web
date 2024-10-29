import { Component } from '@angular/core';
import { MainLayoutComponent } from '../shared/main-layout/main-layout.component';
import { OfferComponent } from '../shared/offer/offer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainLayoutComponent, OfferComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

}
