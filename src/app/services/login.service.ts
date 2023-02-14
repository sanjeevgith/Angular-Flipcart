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


  isLoggedIn()
  {
      let token = localStorage.getItem("token");
      if(token ==undefined || token===''||token==null){
        return false;
      }else{
        return true;
      }
  }


  getuserid() {
    return localStorage.getItem("userid");
  }


  sendUserToken(token: any) {
    localStorage.setItem("token", token)
    return true;
  }



  getToken(){
    return localStorage.getItem('token')
  }



}
