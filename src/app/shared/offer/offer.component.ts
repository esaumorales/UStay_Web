import { Component } from '@angular/core';
import { DepartmentCardComponent } from '../department-card/department-card.component';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [DepartmentCardComponent],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.css'
})
export class OfferComponent {

}
