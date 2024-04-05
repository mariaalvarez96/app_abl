import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
//import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})

export class Tab4Page {
  
  constructor(private platform: Platform) {}

  abrirWhatsApp() {
    let whatsappNumber = "622156052";


  }
}
