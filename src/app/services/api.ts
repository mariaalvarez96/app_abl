import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

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
      responseType: 'blob' as 'json'
    });
  }

  public downloadSupplies(fileName: string) {
    return this.http.get(`${this.BASE_URL}/supplies/${fileName}`, {
      responseType: 'blob' as 'json'
    });
  }
}
