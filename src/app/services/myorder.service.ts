import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class MyorderService {

  constructor(private http: HttpClient, private loginservice: LoginService) { }



  auth_token = this.loginservice.getToken();
  headers = new HttpHeaders().set('token', `bearer ${this.auth_token}`);


  getorderdata(userId: any) {
    console.log(userId);
    return this.http.get("http://localhost:5000/api/orders/findorder")
  }



}
