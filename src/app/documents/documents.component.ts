import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Capacitor } from '@capacitor/core';
import { ToastController } from '@ionic/angular';
import { FileDocument } from '../entity/fileDocument';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent implements OnInit {
  documents: FileDocument[] = [];
  constructor(
    private api: ApiService,
    private toastController: ToastController
  ) {
    this.documents = [
      new FileDocument(
        'documentacion2025',
        'Documentación a aportar en el curso 2024/2025'
      ),
      new FileDocument(
        'aceptacion_condiciones',
        'Aceptación de condiciones para la contratación de servicios del centro de atención personal'
      ),
      new FileDocument(
        'info_centroestudios',
        'Información del centro de estudios'
      ),
      new FileDocument(
        'insc_aulainfantil_2025',
        'Inscripción al aula infantil para el curso 2024/2025'
      ),
    ];
  }

  ngOnInit() {
    this.documents.map(async (doc) => {
      doc.setSize(await this.getFileSize(doc.name));
    });
  }

  async getFileSize(fileName: string): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      this.api.downloadDoc(fileName).subscribe((response: any) => {
        let fileSizeInMegabytes = this.bytesToMegabytes(response.fileSize);
        resolve(fileSizeInMegabytes);
      });
    });
  }

  bytesToMegabytes(bytes: number): number {
    return parseFloat((bytes / (1024 * 1024)).toFixed(2));
  }

  async checkPermissions(): Promise<boolean> {
    try {
      const permissionStatus = await Filesystem.requestPermissions();
      return permissionStatus.publicStorage === 'granted';
    } catch (error) {
      return false;
    }
  }

  downloadAndOpenFileInBrowser(filename: string) {
    this.api.downloadDoc(filename).subscribe((response: any) => {
      const file = new Blob([response], { type: 'application/pdf' });
      const blobURL = URL.createObjectURL(file);
      const link = document.createElement('a');
      link.href = blobURL;
      link.download = filename + '.pdf';
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
      let toast = this.toastController.create({
        message: 'Archivo descargado correctamente',
        duration: 3600,
        position: 'bottom',
      });
      (await toast).present();
    });
  }

  async getFileName(filename: string) {
    console.log(filename);
    if (Capacitor.getPlatform() !== 'web') {
      const permissions = await this.checkPermissions();
      if (permissions) {
        this.downloadAndSaveFile(filename);
      } else {
        let toast = this.toastController.create({
          message: 'La aplicación no tiene permisos para descargar el archivo',
          duration: 3600,
          position: 'bottom',
        });
        (await toast).present();
      }
    } else {
      this.downloadAndOpenFileInBrowser(filename);
    }
  }
}
