import { Component } from '@angular/core';
import { ApiService } from '../services/api';
import { CurrentUserManager } from '../services/currentUserManager';

@Component({
  selector: 'app-mybookings',
  templateUrl: 'mybookings.page.html',
  styleUrls: ['mybookings.page.scss']
})
export class MybookingsPage {

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
  }

}
