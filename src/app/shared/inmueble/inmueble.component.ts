import { Component, OnInit } from '@angular/core';
import { Inmueble } from '../../core/model/Inmueble';
import { InmuebleService } from '../../services/InmuebleService.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inmueble',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './inmueble.component.html',
  styleUrl: './inmueble.component.css'
})
export class InmuebleComponent implements OnInit {

  inmueble: Inmueble = {
    id: 0,
    descripcion: '',
    precio: 0,
    disponibilidad: false,
    n_cuarto: 0,
    imagen: '',
    imagen2: '',
    edificio: {
      id: 0,
      referenciaEdificio: '',
      direccion: '',
      npisos: 0,
      regla_casa: '',
      imagen: '',
      urlMap: '',
      zona: { id: 0, nombreZona: '' },
      partner: { id: 0, correo_empresa: '', direccion: '', telefono_empresa: '', dni: '', img: '', img2: '' }
    },
    ilove: false,
  };

  imagenSeleccionada: File | null = null;
  imagenPrevisualizacion: string | ArrayBuffer | null = null; // Para almacenar la URL de la imagen
  imagenSeleccionada2: File | null = null;
  imagenPrevisualizacion2: string | ArrayBuffer | null = null; // Para almacenar la URL de la imagen

  ngOnInit(): void {

  }
  constructor(
    private inmuebleService: InmuebleService
  ) { }

  Guardar() {
    console.log(this.inmueble)
    if (this.imagenSeleccionada && this.imagenSeleccionada2) {
      this.inmuebleService.addInmueble(this.inmueble, this.imagenSeleccionada, this.imagenSeleccionada2).subscribe(
        response => {
          console.log('Inmueble guardado:', response);
          alert('Inmueble guardado con éxito');
        },
        error => {
          console.error('Error al guardar el inmueble:', error);
          alert('Error al guardar el inmueble');
        }
      );
    } else {  
      alert('Por favor, selecciona una imagen');
    }
  }

  onFileSelected(event: any) {
    this.imagenSeleccionada = event.target.files[0];
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
    if (this.imagenSeleccionada2) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagenPrevisualizacion2 = reader.result;
      };
      reader.readAsDataURL(this.imagenSeleccionada2);
    }
  }

  changedisponibilyty() {
    if (this.inmueble.disponibilidad == false) {
      this.inmueble.disponibilidad = true
    } else {
      this.inmueble.disponibilidad = false
    }

  }

}