import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class ApiService {
    
    public readonly BASE_URL = 'http://localhost:8003';

    constructor(private http: HttpClient) {}

    public async createUser(dni:string, username: string,  email:string,tlf: number, password: string) {
        try {
            const response = await fetch(`${this.BASE_URL}/users/new`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    dni,
                    username,
                    email,
                    tlf,                   
                    password
                })
            });

            if (!response.ok) {
                console.log("esto está mal")
                throw new Error('Error al crear usuario');
            }
            return response.json(); // Devolver el JSON de la respuesta (si hay alguno)
        } catch (error) {
            console.error('Error al crear usuario:', error);
            throw error; 
        }
    }

    public loginUser(email: string, password: string): Observable<any> {
        return this.http.post(`${this.BASE_URL}/users/login`, {
            email,
            password
        });
    }
}