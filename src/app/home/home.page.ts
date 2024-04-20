import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { User } from '../entity/user';
//import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage {
  user: User|null = null;
  constructor(private platform: Platform) {
    let userString: string|null = localStorage.getItem('currentUser');
    console.log(userString);
    if (userString && userString.length > 0) {
      this.user = new User(JSON.parse(userString));
      console.log(this.user);
    }
  }

  abrirWhatsApp() {
    let whatsappNumber = "622156052";


  }
}
