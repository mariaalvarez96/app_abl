import { Component } from '@angular/core';
import { ApiService } from '../services/api';
import { Router } from '@angular/router';
import { CurrentUserManager } from '../services/currentUserManager';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {

  constructor(
    private Api: ApiService,
    private router: Router,
    private currentUserManager: CurrentUserManager,
    private alertController: AlertController
  ) {}

  email: string = '';
  password: string = '';
  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  login(email: string, password: string) {
    this.Api.loginUser(email, password).subscribe(
      (response: any) => {
        this.currentUserManager.saveCurrentUser(response);
        this.email = '';
        this.password = '';
        this.router.navigate(['/tabs/home']);
      },
      async (error) => {
        const alert = await this.alertController.create({
          header: 'Error',
          message: error.error, 
          buttons: ['OK'],
        });
        await alert.present();
      }
    );
  }
}
