import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  nombreAlumno: string = ''; 
  tipoClase: string = '';
  fechaSeleccionada: string = '';

  guardar() {
    //lógica para guardar la reserva
  }
    
}
