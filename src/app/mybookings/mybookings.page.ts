import { Component, ViewChild } from '@angular/core';
import { ApiService } from '../services/api';
import { CurrentUserManager } from '../services/currentUserManager';
import { IonModal } from '@ionic/angular';

interface Reserva {
  studentName: string;
  idClass: string;
} 

@Component({
  selector: 'app-mybookings',
  templateUrl: 'mybookings.page.html',
  styleUrls: ['mybookings.page.scss']
})

export class MybookingsPage {

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
  }

}
