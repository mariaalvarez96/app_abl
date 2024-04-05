import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.scss'],
})
export class ReservarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  nombreAlumno: string = ''; 
  tipoClase: string = '';
  fechaSeleccionada: string = '';

  guardar() {
    //lógica para guardar la reserva
  }
    
}
