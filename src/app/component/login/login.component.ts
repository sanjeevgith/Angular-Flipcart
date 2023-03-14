import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {




  constructor(private spinnerService: NgxSpinnerService, private loginservive: LoginService, private router: Router) { }



  ngOnInit(): void {
    var name = localStorage.getItem("loginData")
    if (name) {
      this.usernameLabel = name;
    } else {
      this.usernameLabel = "Login"
    }

  }




  loginPopup() {
    var name = localStorage.getItem("loginData")
    if (name) {
      (<HTMLInputElement>document.getElementById("loginbutton")).style.display = "none";
      (<HTMLInputElement>document.getElementById("logoutbutton")).style.display = "block";
    } else {
      (<HTMLInputElement>document.getElementById("loginbutton")).style.display = "block";
      (<HTMLInputElement>document.getElementById("logoutbutton")).style.display = "none";
    }
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

      localStorage.setItem("admin", this.loginresponse.isAdmin)

      //getusername for labal
      localStorage.setItem("loginData", this.loginresponse.username)

      //send userid to login service
      var userid = this.loginresponse._id
      this.loginservive.sendusername(userid)

      //send token login service
      var token = this.loginresponse.accessToken
      this.loginservive.sendUserToken(token)

      // localStorage.setItem("userid", this.loginresponse.id)
      var name = localStorage.getItem("loginData")
      this.usernameLabel = name
    })
  }


  
  clear() {

  }


  logout() {
    localStorage.clear();
    localStorage.removeItem('token');
    this.usernameLabel = "Login";
    this.router.navigate(['products'])
    return true;
  }






  closePopup() {
    (<HTMLInputElement>document.getElementById("popupEmail")).classList.toggle("active");
  }








}




