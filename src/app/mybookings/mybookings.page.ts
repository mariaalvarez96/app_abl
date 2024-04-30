<<<<<<< HEAD
import { Component, ViewChild } from '@angular/core';
import { ApiService } from '../services/api';
import { CurrentUserManager } from '../services/currentUserManager';
import { IonModal } from '@ionic/angular';

interface Reserva {
  studentName: string;
  idClass: string;
} 
=======
import { Component } from '@angular/core';
import { ApiService } from '../services/api';
import { CurrentUserManager } from '../services/currentUserManager';
>>>>>>> 792fcfc42645651273ed1b35b084100b5a9007d7

@Component({
  selector: 'app-mybookings',
  templateUrl: 'mybookings.page.html',
  styleUrls: ['mybookings.page.scss']
})

export class MybookingsPage {

<<<<<<< HEAD
  @ViewChild(IonModal) modal: IonModal | undefined;

  reservas: Reserva[] = [];

  constructor(private api: ApiService, private currentUser: CurrentUserManager) {}

  ngOnInit() {
    this.api.getBookingsByUser(this.currentUser.getCurrentUser()?.dni).subscribe(
      (response: any) => {
        this.reservas = response.map((element: any) => {
          return {
            idClass: element.idclass,
            studentName: element.studentName,         
          };
        });
      }
    );
  }

  onWillDismiss(event: Event) {

  }

  cancel() {
    this.modal?.dismiss(null, 'cancel');
  }

  deleteBooking(reserva: Reserva) {
    throw new Error('Method not implemented.');
  }

  public alertButtons = [
    {
      text: 'No',
      role: 'cancel',
      handler: () => {
        console.log('Alerta canceleda');
      },
    },
    {
      text: 'Sí',
      role: 'confirm',
      handler: () => {
       
        console.log('Alert confirmed');
      },
    },
  ];

  setResult(ev:any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
=======
  clase: string = '';
  student: string = '';


  constructor(private api: ApiService, private currentUserManager: CurrentUserManager) {}

  ngOnInit(){
    let dni = this.currentUserManager.getCurrentUser()?.dni;
    if (dni !== null) {
      this.api.getBookingsByUser(dni).subscribe((response: any) => {
        console.log(response)
        response.forEach((element: { idClass: string; studentName: string; }) => {
          this.clase = element.idClass;
          this.student = response.studentName;
        });     
    })
    } else {
      alert('Este usuario no tiene reservas.')
    }                  
>>>>>>> 792fcfc42645651273ed1b35b084100b5a9007d7
  }

}
