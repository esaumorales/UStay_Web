import { Component, OnInit } from '@angular/core';
import { DepartmentCardComponent } from '../department-card/department-card.component';
import { Department, User } from '../../core/index.model';
import { InmuebleService } from '../../services/InmuebleService.service';
import { Inmueble } from '../../core/model/Inmueble';
import { SlideRoomComponent } from '../slide-room/slide-room.component';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [DepartmentCardComponent, SlideRoomComponent],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.css'
})
export class OfferComponent implements OnInit {

  inmuebles: Inmueble[] = [];

  constructor(private inmuebleService: InmuebleService) { }

  ngOnInit(): void {
    this.cargarInmuebles();
    console.log("Hola")
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
  
  carouselItems = ['Slide 1', 'Slide 2', 'Slide 3'];
  currentIndex = 0;

    // Configuración inicial de las posiciones de los puntos
    boxShadows = [
      '9984px 0 0 -2px #ccc',   // Punto izquierdo (más pequeño y gris)
      '9999px 0 0 0px #ff6600', // Punto central (naranja y más grande)
      '10014px 0 0 -2px #ccc'   // Punto derecho (más pequeño y gris)
    ];


  rotateRight() {
    if (this.currentIndex < this.carouselItems.length - 1) {
      this.currentIndex++;
      this.rotateDots('right');
    } else {
      this.currentIndex = 0; // Vuelve al inicio si está en el último slide
      this.resetDots();
    }
  }

  // Método para retroceder hacia la izquierda
  rotateLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.rotateDots('left');
    } else {
      this.currentIndex = this.carouselItems.length - 1; // Va al final si está en el primer slide
      this.resetDots();
    }
  }

  rotateDots(direction: 'left' | 'right') {
    if (direction === 'right') {
      const lastShadow = this.boxShadows.pop();
      if (lastShadow) {
        this.boxShadows.unshift(lastShadow);
      }
    } else {
      const firstShadow = this.boxShadows.shift();
      if (firstShadow) {
        this.boxShadows.push(firstShadow);
      }
    }
    this.updateBoxShadow();
  }
  resetDots() {
    this.boxShadows = [
      '9984px 0 0 -2px #ccc',   // Punto izquierdo (más pequeño y gris)
      '9999px 0 0 0px #ff6600', // Punto central (naranja y más grande)
      '10014px 0 0 -2px #ccc'   // Punto derecho (más pequeño y gris)
    ];
    this.updateBoxShadow();
  }

  // Actualiza el estilo de box-shadow en el elemento de puntos
  updateBoxShadow() {
    const dotCarousel = document.querySelector('.dot-carousel') as HTMLElement;
    if (dotCarousel) {
      dotCarousel.style.boxShadow = this.boxShadows.join(', ');
    }
  }
}
