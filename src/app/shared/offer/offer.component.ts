import { Component, OnInit } from '@angular/core';
import { DepartmentCardComponent } from '../department-card/department-card.component';
import { Department, User } from '../../core/index.model';
import { InmuebleService } from '../../services/InmuebleService.service';
import { Inmueble } from '../../core/model/Inmueble';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [DepartmentCardComponent],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.css'
})
export class OfferComponent implements OnInit {

  inmuebles: Inmueble[] = [];

  constructor(private inmuebleService: InmuebleService) { }

  ngOnInit(): void {
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

  owners: User[] = [
    { name: 'Moises Morales', urlProfile: '/assets/img/example-deparment/example-deparment-1.webp' },
    { name: 'Alvaro Maguiña' },
    { name: 'Esau Morales' },
  ]
  departments: Department[] = [
    {
      urlImg: '/assets/img/example-deparment/example-deparment-1.webp',
      description: 'Primer departmento que se esta vendiendo',
      owner: this.owners[0],
      price: 50,
      start: 4.5,
      status: 'disponible',
      iLove: true,
    },
    {
      urlImg: '/assets/img/example-deparment/example-deparment-1.webp',
      description: 'Primer departmento que se esta vendiendo',
      owner: this.owners[1],
      price: 50,
      start: 4.5,
      status: 'disponible',
    },
    {
      urlImg: '/assets/img/example-deparment/example-deparment-1.webp',
      description: 'Primer departmento que se esta vendiendo',
      owner: this.owners[2],
      price: 50,
      start: 4.5,
      status: 'disponible',
    },
    {
      urlImg: '/assets/img/example-deparment/example-deparment-1.webp',
      description: 'Primer departmento que se esta vendiendo',
      owner: this.owners[1],
      price: 50,
      start: 4.5,
      status: 'disponible',
    },
    {
      urlImg: '/assets/img/example-deparment/example-deparment-1.webp',
      description: 'Primer departmento que se esta vendiendo',
      owner: this.owners[1],
      price: 50,
      start: 4.5,
      status: 'disponible',
    },
    {
      urlImg: '/assets/img/example-deparment/example-deparment-1.webp',
      description: 'Primer departmento que se esta vendiendo',
      owner: this.owners[2],
      price: 50,
      start: 4.5,
      status: 'disponible',
      iLove: true,
    },
    {
      urlImg: '/assets/img/example-deparment/example-deparment-1.webp',
      description: 'Primer departmento que se esta vendiendo',
      owner: this.owners[2],
      price: 50,
      start: 4.5,
      status: 'disponible',
      iLove: true,
    },
    {
      urlImg: '/assets/img/example-deparment/example-deparment-1.webp',
      description: 'Primer departmento que se esta vendiendo',
      owner: this.owners[0],
      price: 50,
      start: 4.5,
      status: 'disponible',
      iLove: true,
    },
    {
      urlImg: '/assets/img/example-deparment/example-deparment-1.webp',
      description: 'Primer departmento que se esta vendiendo',
      owner: this.owners[0],
      price: 50,
      start: 4.5,
      status: 'disponible',
    },
    {
      urlImg: '/assets/img/example-deparment/example-deparment-1.webp',
      description: 'Primer departmento que se esta vendiendo',
      owner: this.owners[0],
      price: 50,
      start: 4.5,
      status: 'disponible',
    },
    {
      urlImg: '/assets/img/example-deparment/example-deparment-1.webp',
      description: 'Primer departmento que se esta vendiendo',
      owner: this.owners[0],
      price: 50,
      start: 4.5,
      status: 'disponible',
    },
    {
      urlImg: '/assets/img/example-deparment/example-deparment-1.webp',
      description: 'Primer departmento que se esta vendiendo',
      owner: this.owners[0],
      price: 50,
      start: 4.5,
      status: 'disponible',
      iLove: true,
    },
    {
      urlImg: '/assets/img/example-deparment/example-deparment-1.webp',
      description: 'Primer departmento que se esta vendiendo',
      owner: this.owners[0],
      price: 50,
      start: 4.5,
      status: 'disponible',
    },
    {
      urlImg: '/assets/img/example-deparment/example-deparment-1.webp',
      description: 'Primer departmento que se esta vendiendo',
      owner: this.owners[0],
      price: 50,
      start: 4.5,
      status: 'disponible',
    },
    {
      urlImg: '/assets/img/example-deparment/example-deparment-1.webp',
      description: 'Primer departmento que se esta vendiendo',
      owner: this.owners[0],
      price: 50,
      start: 4.5,
      status: 'disponible',
    },
    {
      urlImg: '/assets/img/example-deparment/example-deparment-1.webp',
      description: 'Primer departmento que se esta vendiendo',
      owner: this.owners[0],
      price: 50,
      start: 4.5,
      status: 'disponible',
    },
  ];
  
  intervalId: any;
  selectedIndex: number = 0;

  public nextItem(next: number) {
    this.selectedIndex += next;
    if(this.selectedIndex < 0) {
      this.selectedIndex = this.inmuebles.length - 1;
    }

    if(this.selectedIndex >= this.inmuebles.length) {
      this.selectedIndex = 0;
    }
  }
}
