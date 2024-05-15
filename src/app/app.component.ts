import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(translate: TranslateService) {
    translate.setDefaultLang('es');
    console.log("test");
    translate.get('welcome', {value: 'paco'}).subscribe((res: string) => {
      console.log(res);
    })
  }
}
