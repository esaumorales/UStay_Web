import { Component, Input } from '@angular/core';
import { Department } from '../../core/index.model';
import { CommonModule } from '@angular/common';
import { Inmueble } from '../../core/model/Inmueble';

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
}
