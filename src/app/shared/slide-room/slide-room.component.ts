import { Component, Input } from '@angular/core';
import { Inmueble } from '../../core/model/Inmueble';
import { InmuebleService } from '../../services/InmuebleService.service';
import { Edificio } from '../../core/model/Edificio';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slide-room',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slide-room.component.html',
  styleUrl: './slide-room.component.css'
})
export class SlideRoomComponent {
  @Input({ required: true }) inmueble!: Inmueble;
  @Input() sequence!: number;
  @Input() hasButtonActions: boolean = false;

  constructor(private router: Router, private inmuebleService: InmuebleService) {}

  edificio: Edificio[]=[];

  goToDetalle(id: number) {
    this.router.navigate(['/home/room', id]);
  }
}
