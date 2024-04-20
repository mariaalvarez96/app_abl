import { Component } from '@angular/core';
import { ApiService } from '../services/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {

  constructor(private Api: ApiService, private router: Router) {
    
  }

  email: string = '';
  password: string = '';
  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  login(email: string, password: string) {
    this.Api.loginUser(email, password).subscribe(
      (response: any) => {
        // Verificar si el inicio de sesión fue exitoso
        console.log(response, response.success);
        // Guardar el usuario en localStorage
        localStorage.setItem('currentUser', JSON.stringify(response));
        // Redirigir a la página de inicio o a donde necesites
        // Por ejemplo:
        this.router.navigate(['/tabs/home']);
      },
      (error) => {
        console.error('Error al iniciar sesión:', error);
      }
    );
  }
}
