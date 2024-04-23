import { Component } from '@angular/core';
import { CurrentUserManager } from '../services/currentUserManager';
import { User } from '../entity/user';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  user: User | null = null;

  constructor(private currentUserManager: CurrentUserManager) {
    this.user = this.currentUserManager.getCurrentUser();
  }

  tabDidChange() {
    this.user = this.currentUserManager.getCurrentUser();
  }
}
