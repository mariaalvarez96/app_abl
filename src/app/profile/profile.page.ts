import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../entity/user';
import { CurrentUserManager } from '../services/currentUserManager';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { ApiService } from '../services/api';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  constructor(
    private currentUserManager: CurrentUserManager,
    private router: Router,
    private api: ApiService
  ) {
    this.user =
      this.currentUserManager.getCurrentUser() ||
      new User({ name: '', email: '' });
  }

  @ViewChild(IonModal) modal: IonModal | undefined;

  user: User = new User({ name: '', email: '' });
  edition: boolean = false;
  newPassword: string = '';
  repeatPassword: string = '';
  areTheyEqual: boolean = true;

  ngOnInit() {
    this.user =
      this.currentUserManager.getCurrentUser() ||
      new User({ name: '', email: '' });
  }

  onWillDismiss(event: Event) {}
  enableEdit() {
    this.edition = !this.edition;
  }

  saveData() {
    this.api
      .updateUserData(
        this.user.dni,
        this.user.name,
        this.user.email,
        this.user.phone,
        this.user.password
      )
      .subscribe((response: any) => {
        this.enableEdit();
        this.currentUserManager.saveCurrentUser(response);
      });
  }

  onFileSelected(event: any) {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64String = reader.result?.toString().split(',')[1];
      this.api.updateAvatar(this.user.dni, base64String).subscribe(
        (response: any) => {
          this.user = response
          this.currentUserManager.saveCurrentUser(response);
        }
      );
    };
    reader.readAsDataURL(selectedFile);
  }


  cancel() {
    this.modal?.dismiss(null, 'cancel');
  }

  verifyPasswords() {
    this.areTheyEqual = this.newPassword == this.repeatPassword;
  }

  savePassword() {
    this.api
      .updatePassword(
        this.user.dni,
        this.user.name,
        this.user.email,
        this.user.phone,
        this.newPassword
      )
      .subscribe((response: any) => {
        this.currentUserManager.saveCurrentUser(response);
        this.modal?.dismiss(null, 'cancel');
      });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/tabs/home']);
  }
}
