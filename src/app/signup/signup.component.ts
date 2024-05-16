import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(
    private Api: ApiService,
    private router: Router,
    private alertController: AlertController
  ) {}

  email: string = '';
  password: string = '';
  name: string = '';
  dni: string = '';
  phone: any;
  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  ngOnInit() {}

  validatePassword(password: string): boolean {
    if (password.length < 6) {
      return false;
    }
    if (!/[a-zA-Z]/.test(password)) {
      return false;
    }
    if (!/\d/.test(password)) {
      return false;
    }
    if (!/[@#$%^&+=.?¿!¡]/.test(password)) {
      return false;
    }
    return true;
  }

  validatePhone(phone: string): boolean {
    if (phone.length < 9) {
      return false;
    }
    if (!/\d/.test(phone)) {
      return false;
    }
    return true;
  }

  async createUser() {
    if (!this.validatePhone(this.phone)) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'El teléfono debe tener 9 dígitos',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }
    if (!this.validatePassword(this.password)) {
      const alert = await this.alertController.create({
        header: 'Error',
        message:
          'La contraseña debe tener al menos 6 caracteres, contener letras, números y al menos un carácter especial.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    this.Api.createUser(
      this.dni,
      this.name,
      this.email,
      this.phone,
      this.password
    ).subscribe(
      (response: any) => {
        localStorage.setItem('currentUser', JSON.stringify(response));
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
