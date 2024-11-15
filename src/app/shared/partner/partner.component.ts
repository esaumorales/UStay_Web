import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Partner } from '../../core/model/Partner';
import { partnerService } from '../../services/PartnerService';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partner',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './partner.component.html',
  styleUrl: './partner.component.css'
})
export class PartnerComponent implements OnInit {

  partner: Partner = {
    id: 0,
    direccion: '',
    correo_empresa: '',
    telefono_empresa: '',
    dni: '',
    img: '',
    img2: '',
  }

  imagenSeleccionada: File | null = null;
  imagenPrevisualizacion: string | ArrayBuffer | null = null; // Para almacenar la URL de la imagen
  imagenSeleccionada2: File | null = null;
  imagenPrevisualizacion2: string | ArrayBuffer | null = null; // Para almacenar la URL de la imagen
  

  constructor(
    private partnerService: partnerService
  ){}

  ngOnInit(): void {

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

  onFileSelected2(event: any) {
    this.imagenSeleccionada2 = event.target.files[0];
  
    // Generar una URL de previsualización
    if (this.imagenSeleccionada2) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagenPrevisualizacion2 = reader.result;
      };
      reader.readAsDataURL(this.imagenSeleccionada2);
    }
  }

  SolicitarPartner() {
    if (this.imagenSeleccionada && this.imagenSeleccionada2) {
      this.partnerService.addPartner(this.partner, this.imagenSeleccionada, this.imagenSeleccionada2).subscribe(
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