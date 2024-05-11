import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent  implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {}

  getFileName(filename: string){
    this.api.downloadDoc(filename);
  }
}
