import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface RequestBodyObj {
  email: string;
  password: string;
  returnSecureToken: true;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    
  }
}
