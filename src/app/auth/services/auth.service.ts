import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegister } from '../models/iregister';
import { ILogin } from '../models/ilogin';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient : HttpClient) { }
  
registerUser(user: IRegister): Observable<any> {
  return this.httpClient.post('/apiX/users', user);
}

loginUser(user: ILogin): Observable<any> {
  return this.httpClient.post('/apiX/auth', user);
}

}
