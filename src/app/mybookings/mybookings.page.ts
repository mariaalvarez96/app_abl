import { Component, ViewChild } from '@angular/core';
import { ApiService } from '../services/api';
import { CurrentUserManager } from '../services/currentUserManager';
import { AlertController, IonModal } from '@ionic/angular';
import { Booking } from '../entity/booking';
import { Lesson } from '../entity/lesson';

@Component({
  selector: 'app-mybookings',
  templateUrl: 'mybookings.page.html',
  styleUrls: ['mybookings.page.scss']
})

export class MybookingsPage {

  @ViewChild(IonModal) modal: IonModal | undefined;

  bookings: Booking[] = [];
  classes: Lesson[] = [];

  constructor(
    private api: ApiService,
    private currentUser: CurrentUserManager,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.api.getAllClasses().subscribe(
      (res: any) => {
        this.classes = res.map((element: any) => {
          return new Lesson(element);
        })
      }   
    )

    this.api.getBookingsByUser(this.currentUser.getCurrentUser()?.dni).subscribe(
      (response: any) => {
        this.bookings = response.map((element: any) => {
          return new Booking(element);
        });
      }
    );
    
  }

  onWillDismiss(event: Event) {

  }

  cancel() {
    this.modal?.dismiss(null, 'cancel');
  }

  deleteBooking(id: string) {
    this.api.deleteBookingById(id).subscribe(
      (response: any) => {
        let indexToRemove = this.bookings.findIndex(item => item.id === id);
        if (indexToRemove !== -1) {
          this.bookings.splice(indexToRemove, 1);
        }
      }
    )
  }

  async presentAlert(id: string) {
    const alert = await this.alertController.create({
      header: '¿Desea borrar esta reserva?',
      message: 'No podra recuperar esta reserva.',
      buttons: [
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
            this.deleteBooking(id);
          },
        },
      ],
    });

    await alert.present();
  }

}
