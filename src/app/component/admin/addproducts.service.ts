import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AddproductsService {

  constructor(private http: HttpClient, private loginservice: LoginService) { }



  auth_token = this.loginservice.getToken();
  headers = new HttpHeaders().set('token', `bearer ${this.auth_token}`);




  addproduct(formdata: any) {
    
    console.log(formdata);
    return this.http.post("http://localhost:5000/api/products", formdata, {
      headers: this.headers
    })
  }
}
