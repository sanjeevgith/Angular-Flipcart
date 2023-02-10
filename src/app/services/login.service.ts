import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }




  getlogin(username: any, password: any) {
    let data = {
      username: username,
      password: password
    }
    // console.log(data);
    return this.http.post("http://localhost:5000/api/auth/login", data)
  }




  sendusername(userid: any) {
    console.log(userid);

    localStorage.setItem("userid", userid)
  }


  getuserid() {
    return localStorage.getItem("userid");
  }


  sendUserToken(token: any) {
    sessionStorage.setItem("token", token)
  }



}
