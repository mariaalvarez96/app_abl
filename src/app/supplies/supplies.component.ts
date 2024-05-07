import { Component, OnInit } from '@angular/core';
import { User } from '../entity/user';
import { CurrentUserManager } from '../services/currentUserManager';

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.scss'],
})
export class SuppliesComponent {

  user: User|null = null;
  constructor(
    private currentUserManager: CurrentUserManager
  ) {
    this.user = this.currentUserManager.getCurrentUser();
  }

  ionViewDidEnter() {
    this.user = this.currentUserManager.getCurrentUser();
  }

}
