import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api';
import { ToastController } from '@ionic/angular';
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';
import { Capacitor } from '@capacitor/core';
import { FileDocument } from '../entity/fileDocument';

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.scss'],
})
export class SuppliesComponent implements OnInit {
  primaryDocuments: FileDocument[] = [];
  secondaryDocuments: FileDocument[] = [];
  bachDocuments: FileDocument[] = [];
  masterDocuments: FileDocument[] = [];

  constructor(
    private api: ApiService,
    private toastController: ToastController
  ) {

    this.primaryDocuments = [
      new FileDocument('apuntes1primaria', 'Apuntes de repaso de 1º'),
      new FileDocument('apuntes2primaria', 'Apuntes de repaso de 2º'),
      new FileDocument('apuntes3primaria', 'Apuntes de repaso de 3º'),
      new FileDocument('apuntes4primaria', 'Apuntes de repaso de 4º'),
      new FileDocument('apuntes5primaria', 'Apuntes de repaso de 5º'),
      new FileDocument('apuntes6primaria', 'Apuntes de repaso de 6º'),
    ];

    this.secondaryDocuments = [
      new FileDocument('repaso_primero', 'Apuntes de repaso de 1º'),
      new FileDocument('repaso_segundo', 'Apuntes de repaso de 2º'),
      new FileDocument('repaso_tercero', 'Apuntes de repaso de 3º'),
      new FileDocument('repaso_cuarto', 'Apuntes de repaso de 4º'),
    ]

    this.bachDocuments = [
      new FileDocument('repaso_1bachiller', 'Apuntes de repaso de 1º'),
      new FileDocument('repaso_2bachiller', 'Apuntes de repaso de 2º'),
    ]

    this.masterDocuments = [
      new FileDocument('repaso_DAM', 'Apuntes de repaso de 1ºDAM'),
      new FileDocument('repaso_DAW', 'Apuntes de repaso de 1ºDAW'),
      new FileDocument('repaso_ASIR', 'Apuntes de repaso de 1ºASIR'),
      new FileDocument('repaso_AYF', 'Apuntes de repaso de 1ºAYF'),
    ]

  }

  ngOnInit() {
    this.primaryDocuments.map(async (doc) => {
      doc.setSize(await this.getFileSize(doc.name));
    });
    this.secondaryDocuments.map(async (doc) => {
      doc.setSize(await this.getFileSize(doc.name));
    });
    this.bachDocuments.map(async (doc) => {
      doc.setSize(await this.getFileSize(doc.name));
    });
    this.masterDocuments.map(async (doc) => {
      doc.setSize(await this.getFileSize(doc.name));
    });
  }

  async getFileSize(fileName: string): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      this.api.downloadDoc(fileName).then((response: any) => {
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

  async getFileName(filename: string) {
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

  downloadAndOpenFileInBrowser(filename: string) {
    this.api.downloadDoc(filename).then((response: any) => {
      const blobURL = URL.createObjectURL(response.blob);
      const link = document.createElement('a');
      link.href = blobURL;
      link.download = filename + '.pdf';
      link.click();
    });
  }

  async downloadAndSaveFile(filename: string) {
    this.api.downloadDoc(filename).then(async (response: any) => {
      const result = await Filesystem.writeFile({
        path: 'Download/' + filename + '.pdf',
        data: response.blob,
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
}
