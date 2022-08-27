import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://dummyjson.com/auth/login';
const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
})
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + '?',
      {
        username,
        password,
      },
      httpOptions
    );
  }
}
