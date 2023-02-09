import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {




  constructor(private loginservive: LoginService) { }



  ngOnInit(): void {

    var name = localStorage.getItem("loginData")
    if (name) {
      this.usernameLabel = name
    } else {
      this.usernameLabel = "Login"
    }

  }




  loginPopup() {
    (<HTMLInputElement>document.getElementById("popupEmail")).classList.toggle("active");
  }

  usernameLabel: any;
  loginresponse: any
  login() {
    var username = (<HTMLInputElement>document.getElementById("username")).value;
    var password = (<HTMLInputElement>document.getElementById("password")).value;
    // console.log(username, password);
    this.loginservive.getlogin(username, password).subscribe(responseList => {
      this.loginresponse = responseList;
      (<HTMLInputElement>document.getElementById("username")).value = "";
      (<HTMLInputElement>document.getElementById("password")).value = "";
      console.log(this.loginresponse);
      localStorage.setItem("loginData", this.loginresponse.username)
      var name = localStorage.getItem("loginData")
      this.usernameLabel = name
      console.log(name);
    })
  }
  clear() {

  }


  logout() {
    localStorage.clear();
    this.usernameLabel = "Login";
  }






  closeEmail() {
    (<HTMLInputElement>document.getElementById("popupEmail")).classList.toggle("active");
  }








}




