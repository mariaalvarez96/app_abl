import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Capacitor } from '@capacitor/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent implements OnInit {
  constructor(
    private api: ApiService,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async checkPermissions(): Promise<boolean> {
    try {
      const permissionStatus = await Filesystem.requestPermissions();
      return permissionStatus.publicStorage === 'granted';
    } catch (error) {
      console.error('Error al solicitar permisos:', error);
      return false;
    }
  }

  downloadAndOpenFileInBrowser(filename: string) {
    this.api.downloadDoc(filename).subscribe((response: any) => {
      const file = new Blob([response], { type: 'application/pdf' });
      const blobURL = URL.createObjectURL(file);
      const link = document.createElement('a');
      link.href = blobURL;
      link.download = 'archivo.pdf';
      link.click();
    });
  }

  async downloadAndSaveFile(filename: string) {
    this.api.downloadDoc(filename).subscribe(async (response: any) => {
      let string = await response.text();
      const result = await Filesystem.writeFile({
        path: 'Download/' + filename + '.pdf',
        data: string,
        directory: Directory.ExternalStorage,
        encoding: Encoding.UTF8,
      });
      console.log('Archivo guardado:', result);
      this.toastController.create({
        message: "Archivo descargado",
        duration: 600
      });
    });
  }

  async getFileName(filename: string) {
    console.log(filename);
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
}
