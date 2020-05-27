import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserCredentials } from './user-credentials.model';
import { Observable } from 'rxjs';
import { JwtToken } from './jwt-token.model';
import { SERVER_API_URL } from '../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http:HttpClient
  ) { }

  authenticate(userCredentials: UserCredentials): Observable<JwtToken> {
    return this.http.post<JwtToken>(`${SERVER_API_URL}/api/authenticate`, userCredentials);
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}


