import { Component} from '@angular/core';
import { User } from '../entity/user';
import { CurrentUserManager } from '../services/currentUserManager';
import { ApiService } from '../services/api';
import { ToastController } from '@ionic/angular';
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html', 
  styleUrls: ['./supplies.component.scss'],
})
export class SuppliesComponent {

  user: User|null = null;
  selectedOption: string = '';
  fileSize: number = 0;

  constructor(
    private currentUserManager: CurrentUserManager,
     private api: ApiService,
    private toastController: ToastController
  ) {
    this.user = this.currentUserManager.getCurrentUser();
  }


  ionViewDidEnter() {
    this.user = this.currentUserManager.getCurrentUser();
  }

  async checkPermissions(): Promise<boolean> {
    try {
      const permissionStatus = await Filesystem.requestPermissions();
      return permissionStatus.publicStorage === 'granted';
    } catch (error) {
      console.error('Error al solicitar permisos:', error);
      return false;
    }
  }

  async getFileName(filename: string, event: Event) {
    event.preventDefault();
    if (Capacitor.getPlatform() !== 'web') {
      const permissions = await this.checkPermissions();
      if (permissions) {
        this.downloadAndSaveFile(filename);
      } else {
        alert('Permisos no concedidos');
      }
    } else {
      this.downloadAndOpenFileInBrowser(filename);
    }
  }

  downloadAndOpenFileInBrowser(filename: string) {
    this.api.downloadSupplies(filename).subscribe((response: any) => {
      const file = new Blob([response], { type: 'application/pdf' });
      this.fileSize = response.fileSize;
      const blobURL = URL.createObjectURL(file);
      const link = document.createElement('a');
      link.href = blobURL;
      link.download = filename+'.pdf';
      link.click();
    });
  }

  async downloadAndSaveFile(filename: string) {
    this.api.downloadSupplies(filename).subscribe(async (response: any) => {
      let string = await response.text();
      this.fileSize = response.fileSize;
      const result = await Filesystem.writeFile({
        path: 'Download/' + filename + '.pdf',
        data: string,
        directory: Directory.ExternalStorage,
        encoding: Encoding.UTF8,
      });

      let toast = this.toastController.create({
        message: "Archivo descargado correctamente",
        duration: 3600,
        position: 'bottom'
      });
      (await toast).present();
    });
  }
}
