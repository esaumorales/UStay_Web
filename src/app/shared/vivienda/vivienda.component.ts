import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { error } from 'console';
import { response } from 'express';
import { Edificio } from '../../core/model/Edificio';
import { Zona } from '../../core/model/zona';
import { EdificioService } from '../../services/EdificioService';
import { ZonaService } from '../../services/ZonaService';

@Component({
  selector: 'app-vivienda',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './vivienda.component.html',
  styleUrls: ['./vivienda.component.css']
})
export class ViviendaComponent implements OnInit {
  
  edificio: Edificio = {
    id: 0,
    referenciaEdificio: '',
    direccion: '',
    npisos: 0,
    regla_casa: '',
    imagen: '',
    urlMap: '',
    zona: { id: 0, nombreZona: '' },
    partner: { id: 0, correo_empresa: '',  direccion: '', telefono_empresa: '', dni: '', img: '', img2: ''}
  };
  zonas: Zona[] = [];
  imagenSeleccionada: File | null = null;
  imagenPrevisualizacion: string | ArrayBuffer | null = null; // Para almacenar la URL de la imagen

  constructor(
    private edificioService: EdificioService,
    private zonaService: ZonaService
  ) {}

  ngOnInit(): void {
    this.cargarZonas();
  }

  cargarZonas(): void {
    this.zonaService.listar().subscribe(
      (zonas: Zona[]) => {
        this.zonas = zonas;
      },
      error => {
        console.error('Error al cargar zonas:', error);
      }
    );
  }

  onFileSelected(event: any) {
    this.imagenSeleccionada = event.target.files[0];
  
    // Generar una URL de previsualización
    if (this.imagenSeleccionada) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagenPrevisualizacion = reader.result;
      };
      reader.readAsDataURL(this.imagenSeleccionada);
    }
  }
  
  guardarEdificio() {
    if (this.imagenSeleccionada) {
      this.edificioService.addEdificio(this.edificio, this.imagenSeleccionada).subscribe( 
        response => {
          console.log('Edificio guardado:', response);
          alert('Edificio guardado con éxito');
        },
        error => {
          console.error('Error al guardar el edificio:', error);
          alert('Error al guardar el edificio');
        }
      );
    } else {
      alert('Por favor, selecciona una imagen');
    }
  }
}
