import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor(private http: HttpClient, private loginservice: LoginService) { }

  userid = this.loginservice.getuserid()






  

  getCartcount() {
    return this.http.get("http://localhost:5000/api/cart/counter/" + this.userid)
  }




}
