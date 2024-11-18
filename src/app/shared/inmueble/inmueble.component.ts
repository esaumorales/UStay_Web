import { Component, OnInit } from '@angular/core';
import { Inmueble } from '../../core/model/Inmueble';
import { InmuebleService } from '../../services/InmuebleService.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inmueble',
  standalone: true,
  imports: [FormsModule],
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
  }


  ngOnInit(): void {

  }
  constructor(
    private inmuebleService: InmuebleService
  ) { }

  Guardar(){
    console.log(this.inmueble)
  }

  changedisponibilyty(){
    if(this.inmueble.disponibilidad == false){
      this.inmueble.disponibilidad=true
    }else{
      this.inmueble.disponibilidad=false
    }

  }

}