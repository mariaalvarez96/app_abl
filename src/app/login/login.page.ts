import { Component } from '@angular/core';
import { ApiService } from '../services/api';
import { Router } from '@angular/router';
import { CurrentUserManager } from '../services/currentUserManager';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {

  constructor(
    private Api: ApiService,
    private router: Router,
    private currentUserManager: CurrentUserManager
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
        this.router.navigate(['/tabs/home']);
      },
      (error) => {
        console.error('Error al iniciar sesión:', error);
      }
    );
  }
}
