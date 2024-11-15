import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import HomeComponent from '../../home/home.component';
import { OfferComponent } from '../offer/offer.component';
import { Partner } from '../../core/model/Partner';
import { EdificioService } from '../../services/EdificioService';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, OfferComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent implements OnInit {
  
  partners: Partner[] = [];
  partner: any;

  constructor(
    private edificioService: EdificioService
  ) { }

  ngOnInit(): void {
    this.listarPartner
  }

  listarPartner(): void {
    this.edificioService.getAllEdificios().subscribe({
      next: (data) => {
        this.partners = data;
        console.log('Datos de inmuebles:', this.partners);
      },
      error: (error) => console.error('Error al obtener inmuebles:', error)
    });
  }


}
