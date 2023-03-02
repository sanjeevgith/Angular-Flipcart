import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient, private loginservice: LoginService) { }

  auth_token = this.loginservice.getToken();
  headers = new HttpHeaders().set('token', `bearer ${this.auth_token}`);

  addaddress(param1: any, param2: any, formvalue: any) {
    // console.log(param1);
    // console.log(param2);
    // console.log(formvalue);
    var data = {
      "userId": param1,
      "amount": param2,
      "address": formvalue
    }
    return this.http.post("http://localhost:5000/api/orders", data, {
      headers: this.headers
    })
  }


}
