import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Capacitor, CapacitorHttp, HttpOptions } from '@capacitor/core';

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

  public async downloadDoc(fileName: string) {
    let httpOptions = {
      url: `${this.BASE_URL}/download/${fileName}`,
      method: 'GET',
      responseType: 'blob',
      observe: 'response',
    } as HttpOptions;
    let size: number = 0;
    await CapacitorHttp.get(httpOptions).then( async (res) => {
      size = parseFloat(res.headers['Content-Length']);
    });

    return this.http
      .get(`${this.BASE_URL}/download/${fileName}`, {
        responseType: 'blob' as 'json',
        observe: 'response',
      })
      .pipe(
        map((response) => {
          const headers = response.headers;
          const contentDisposition = headers.get('content-disposition');
          if (Capacitor.getPlatform() === 'web') {
            size = parseFloat(headers.get('content-length') ?? '0');
          }
          return {
            blob: response.body,
            contentDisposition: contentDisposition,
            fileSize: size,
          };
        })
    ).toPromise();
  }

  public deleteAvatar(dni: string) {
    return this.http.delete(`${this.BASE_URL}/users/deleteAvatar/${dni}`);
  }
}
