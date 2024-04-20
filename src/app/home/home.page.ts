import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
//import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage {
  
  constructor(private platform: Platform) {}

  abrirWhatsApp() {
    let whatsappNumber = "622156052";


  }
}
