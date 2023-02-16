import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }



  postSignup(username: any, email: any, password: any) {
    let data = {
      username: username,
      email: email,
      password: password
    }
    return this.http.post("http://localhost:5000/api/auth/register", data)
  }
}
