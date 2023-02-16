import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  constructor(private router: Router, private signupservice: SignupService) { }


  ngOnInit(): void {

  }


  finalresponseList: any
  signup() {
    var username = (<HTMLInputElement>document.getElementById("username")).value;
    var email = (<HTMLInputElement>document.getElementById("email")).value;
    var password = (<HTMLInputElement>document.getElementById("password")).value;
    console.log(username, email, password);

    this.signupservice.postSignup(username, email, password).subscribe(responseList => {
      this.finalresponseList = responseList;

      (<HTMLInputElement>document.getElementById("username")).value = "";
      (<HTMLInputElement>document.getElementById("email")).value = "";
      (<HTMLInputElement>document.getElementById("password")).value = "";

      this.router.navigate(['/products'])

    })
  }


}
