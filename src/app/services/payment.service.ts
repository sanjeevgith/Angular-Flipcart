import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient,private loginservice:LoginService) { }

  auth_token = this.loginservice.getToken();
  headers = new HttpHeaders().set('token', `bearer ${this.auth_token}`);


  addPayment(data:any) {
    return this.http.post("http://localhost:5000/api/payment", data, {
      headers: this.headers
    })
  }







}
