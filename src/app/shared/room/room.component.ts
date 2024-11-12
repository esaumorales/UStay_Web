import { Component, Input } from '@angular/core';
import { Inmueble } from '../../core/model/Inmueble';
import { ActivatedRoute } from '@angular/router';
import { InmuebleService } from '../../services/InmuebleService.service';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent {

  inmueble: any;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private inmuebleService: InmuebleService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;  // '+' convierte el valor a número
    this.inmuebleService.getInmueble(id).subscribe({
      next: (data) => {
        this.inmueble = data;
      },
      error: (err) => {
        this.error = 'Error al cargar los detalles del inmueble.';
      }
    });
  }
  
}