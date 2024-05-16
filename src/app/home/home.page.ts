import { Component } from '@angular/core';
import { User } from '../entity/user';
import { CurrentUserManager } from '../services/currentUserManager';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: User | null = null;
  isUserLogged: boolean = false;
  constructor(private currentUserManager: CurrentUserManager) {
    this.user = this.currentUserManager.getCurrentUser();
  }

  ionViewDidEnter() {
    this.user = this.currentUserManager.getCurrentUser();
    this.isUserLogged = this.user != null;
  }
}
