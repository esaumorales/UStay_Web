import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import HomeComponent from '../../home/home.component';
import { OfferComponent } from '../offer/offer.component';
import { Partner } from '../../core/model/Partner';
import { EdificioService } from '../../services/EdificioService';
import { Inmueble } from '../../core/model/Inmueble';
import { InmuebleService } from '../../services/InmuebleService.service';
import { DepartmentCardComponent } from '../department-card/department-card.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, OfferComponent, DepartmentCardComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent implements OnInit {

  partners: Partner[] = [];
  partner: any;
  inmuebles: Inmueble[] = [];

  constructor(
    private edificioService: EdificioService,
    private inmuebleService: InmuebleService
  ) { }

  ngOnInit(): void {
    this.listarPartner();
    this.cargarInmuebles();
  }

  listarPartner() {
    this.edificioService.getAllEdificios().subscribe({
      next: (data) => {
        this.partners = data;
        console.log('Datos de inmuebles:', this.partners);
      },
      error: (error) => console.error('Error al obtener inmuebles:', error)
    });
  }


  cargarInmuebles(){
    this.inmuebleService.getAllInmuebles().subscribe({
      next: (data) => {
        this.inmuebles = data;
        console.log('Datos de inmuebles:', this.inmuebles);
      },
      error: (error) => console.error('Error al obtener inmuebles:', error)
    });
  }

}