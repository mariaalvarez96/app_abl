import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../entity/user';
import { CurrentUserManager } from '../services/currentUserManager';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  
  @ViewChild(IonModal) modal: IonModal | undefined;
  user: User = new User({ name: '', email: '' });
  edition: boolean = false;
  newPassword: string = '';
  repeatPassword: string = '';
  areTheyEqual: boolean = false;

  constructor(private currentUserManager: CurrentUserManager, private router: Router) {
    this.user = this.currentUserManager.getCurrentUser() || new User({ name: '', email: '' });
  }

  ngOnInit() {
    this.user = this.currentUserManager.getCurrentUser() || new User({ name: '', email: '' });
  }

  enableEdit() {
    this.edition = !this.edition;
  }

  saveData() {
    this.enableEdit();
  }

  onWillDismiss(event: Event) {
    
  }

  verifyPasswords() {
    this.areTheyEqual = this.newPassword === this.repeatPassword;
    console.log(this.areTheyEqual)
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/tabs/home']);
  }
}
