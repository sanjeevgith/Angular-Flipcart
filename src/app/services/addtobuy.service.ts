import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AddtobuyService {

  constructor(private http: HttpClient, private loginservice: LoginService) { }


  auth_token = this.loginservice.getToken();
  headers = new HttpHeaders().set('token', `bearer ${this.auth_token}`);


  getCartProduct() {

    var userid = this.loginservice.getuserid()
    // console.log("userid", userid);
    return this.http.get("http://localhost:5000/api/cart/find/" + userid, {
      headers: this.headers
    });
  }



  deletCart(id: any) {

    return this.http.delete("http://localhost:5000/api/cart/find/" + id, {
      headers: this.headers
    })
  }



}
