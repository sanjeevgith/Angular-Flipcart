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
  loginresponse: any;
  login() {
    var username = (<HTMLInputElement>document.getElementById("username")).value;
    var password = (<HTMLInputElement>document.getElementById("password")).value;
    // console.log(username, password);
    this.loginservive.getlogin(username, password).subscribe(responseList => {
      this.loginresponse = responseList;
      (<HTMLInputElement>document.getElementById("username")).value = "";
      (<HTMLInputElement>document.getElementById("password")).value = "";
      //console.log(this.loginresponse);
      localStorage.setItem("loginData", this.loginresponse.username)
      // console.log("userid", this.loginresponse._id);

      //send userid to login service
      var userid = this.loginresponse._id
      this.loginservive.sendusername(userid)

      //send token login service
      var token = this.loginresponse.accessToken
      this.loginservive.sendUserToken(token)

      // localStorage.setItem("userid", this.loginresponse.id)
      var name = localStorage.getItem("loginData")
      this.usernameLabel = name
      console.log(name);
    })
  }
  clear() {

  }


  logout() {
    localStorage.clear();
    localStorage.removeItem('token');
    this.usernameLabel = "Login";
    return true;
  }






  closePopup() {
    (<HTMLInputElement>document.getElementById("popupEmail")).classList.toggle("active");
  }








}




