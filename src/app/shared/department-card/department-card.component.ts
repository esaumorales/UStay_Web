import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Inmueble } from '../../core/model/Inmueble';
import { Router } from '@angular/router';
import { InmuebleService } from '../../services/InmuebleService.service';


@Component({
  selector: 'app-department-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './department-card.component.html',
  styleUrl: './department-card.component.css'
})
export class DepartmentCardComponent {
  @Input({ required: true }) inmueble!: Inmueble;
  @Input() sequence!: number;
  @Input() hasButtonActions: boolean = false;

  constructor(private router: Router, private inmuebleService: InmuebleService) {}

  goToDetalle(id: number) {
    this.router.navigate(['/home/room', id]);
  }
}
