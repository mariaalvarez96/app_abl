import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.scss'],
})
export class ReservarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  nombreAlumno: string = ''; // Variable para almacenar el nombre del alumno
  alumnos: string[] = []; // Arreglo para almacenar los nombres de los alumnos
  tipoClase: string = '';
  fechaSeleccionada: string = '';



  // Método para agregar un alumno a la lista
  agregarAlumno() {
    if (this.nombreAlumno.trim() !== '') {
      this.alumnos.push(this.nombreAlumno);
      this.nombreAlumno = ''; // Limpiamos el campo de texto después de agregar el alumno
    }
  }
  agregarCampo() {
    this.alumnos.push(''); // Agregar un nuevo campo vacío
  }
  // Método para guardar la reserva
  guardar() {
    // Aquí puedes implementar la lógica para guardar la reserva
    console.log('Reserva guardada:', this.alumnos);
  }

}
