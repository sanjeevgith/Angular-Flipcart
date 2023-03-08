import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

import { AppSettings } from '../appsetting/app.setting';

@Injectable({
  providedIn: 'root'
})
export class MyorderService {

  constructor(private http: HttpClient) { }



  getorderdata(userId: any) {
    console.log(userId);
    console.log(AppSettings.findorderbyuserid + userId);
    
    return this.http.get(AppSettings.findorderbyuserid + userId)
  }











}
