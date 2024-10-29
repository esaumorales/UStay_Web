import { Component, Input } from '@angular/core';
import { Department } from '../../core/index.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-department-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './department-card.component.html',
  styleUrl: './department-card.component.css'
})
export class DepartmentCardComponent {
  @Input({ required: true }) department!: Department;
}
