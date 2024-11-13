import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InmuebleService } from '../../services/InmuebleService.service';
import { Servicios } from '../../core/model/Servicios';
import { ServiciosService } from '../../services/ServiciosService';
import { Inmueble } from '../../core/model/Inmueble';
import { DepartmentCardComponent } from '../department-card/department-card.component';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [DepartmentCardComponent],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent implements OnInit{

  inmuebles: Inmueble[] = [];
  inmueble: any;
  servicio: any;
  servicios: Servicios[]=[];
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private inmuebleService: InmuebleService,
    private servicioService: ServiciosService
  ) { }

  ngOnInit(): void {
    this.listar_cuarto();
    this.listar_servicios();
    this.cargarInmuebles();
  }

  cargarInmuebles(): void {
    this.inmuebleService.getAllInmuebles().subscribe({
      next: (data) => {
        this.inmuebles = data;
        console.log('Datos de inmuebles:', this.inmuebles);
      },
      error: (error) => console.error('Error al obtener inmuebles:', error)
    });
  }

  listar_cuarto() {
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

  listar_servicios() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.servicioService.getServiciosByInmueble(id).subscribe({
      next: (data1) => {
        if (data1 && data1.length > 0) {
          this.servicio = data1[0];  // Toma el primer elemento del arreglo
        } else {
          this.error = 'No se encontraron servicios para este inmueble.';
        }
        console.log(this.servicio);
      },
      error: (err) => {
        this.error = 'Error al cargar los servicios del inmueble.';
      }
    });
  }
  


}