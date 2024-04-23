import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class ApiService {
    
    public readonly BASE_URL = 'http://localhost:8003';

    constructor(private http: HttpClient) {}

    public createUser(dni:string, name: string,  email:string,tlf: number, password: string) {
        return this.http.post(`${this.BASE_URL}/users/new`, {
            dni,
            name,
            email,
            tlf,                   
            password
        })
              
    }

    public loginUser(email: string, password: string): Observable<any> {
        return this.http.post(`${this.BASE_URL}/users/login`, {
            email,
            password
        });
    }
}