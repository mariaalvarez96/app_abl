import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignUpComponent  implements OnInit {

  constructor(private Api: ApiService, private router: Router) { }

  email: string = '';
  password: string = '';
  name: string = '';
  dni: string = '';
  tlf: any;
  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  ngOnInit() {}

  createUser() {
    this.Api.createUser(this.dni, this.name, this.email,this.tlf, this.password).subscribe(
      (response: any) => {
        console.log(response, response.success);
        localStorage.setItem('currentUser', JSON.stringify(response));
        this.router.navigate(['/tabs/home']);
      }
    )
  }

}
