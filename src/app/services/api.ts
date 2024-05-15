import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public readonly BASE_URL = 'http://44.210.179.171:8003';

  constructor(private http: HttpClient) {}

  public createUser(
    dni: string,
    name: string,
    email: string,
    phone: number,
    password: string
  ) {
    return this.http.post(`${this.BASE_URL}/users/new`, {
      dni,
      name,
      email,
      phone,
      password,
    });
  }

  public saveBooking(booking: any) {
    return this.http.post(`${this.BASE_URL}/booking/new`, booking);
  }

  public loginUser(email: string, password: string) {
    return this.http.post(`${this.BASE_URL}/users/login`, {
      email,
      password,
    });
  }

  public updatePassword(
    dni: string,
    name: string,
    email: string,
    phone: number,
    password: string
  ) {
    return this.http.post(`${this.BASE_URL}/users/updatePassword`, {
      dni,
      name,
      email,
      phone,
      password,
    });
  }

  public updateUserData(
    dni: string,
    name: string,
    email: string,
    phone: number,
    password: string
  ) {
    return this.http.post(`${this.BASE_URL}/users/updateUserData`, {
      dni,
      name,
      email,
      phone,
      password,
    });
  }

  public updateAvatar(dni: string, avatar: any) {
    return this.http.post(`${this.BASE_URL}/users/updateAvatar`, {
      dni,
      avatar,
    });
  }
  public getBookingsByUser(dni: any) {
    return this.http.get(`${this.BASE_URL}/booking/${dni}`);
  }

  public deleteBookingById(id: any) {
    return this.http.delete(`${this.BASE_URL}/booking/${id}`); 
  }

  public getAllLessons() {
    return this.http.get(`${this.BASE_URL}/lessons/list`);
  }

  public getAllStudents(dni: any) {
    return this.http.get(`${this.BASE_URL}/students/${dni}`);
  }

  public downloadDoc(fileName: string) {
    return this.http.get(`${this.BASE_URL}/download/${fileName}`, {
      responseType: 'blob' as 'json',
      observe: 'response'
    }).pipe(
      map(response => {
        const headers = response.headers;
        const contentDisposition = headers.get('content-disposition');
        const fileSize = headers.get('content-length');
        return {
          blob: response.body,
          contentDisposition: contentDisposition,
          fileSize: fileSize
        };
      })
    );
  }

  public downloadSupplies(fileName: string) {
    return this.http.get(`${this.BASE_URL}/supplies/${fileName}`, {
      responseType: 'blob' as 'json',
      observe: 'response'
    }).pipe(
      map(response => {
        const headers = response.headers; 
        const contentDisposition = headers.get('content-disposition');
        const fileSize = headers.get('content-length');
        return {
          blob: response.body,
          contentType: contentDisposition,
          fileSize: fileSize
        };
        
      })
    );
  }

  public deleteAvatar(dni: string){
    return this.http.delete(`${this.BASE_URL}/users/deleteAvatar/${dni}`);
  }
}
