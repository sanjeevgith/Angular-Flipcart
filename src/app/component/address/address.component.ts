import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';
import { AddtobuyService } from 'src/app/services/addtobuy.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {




  addaddress!: FormGroup
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private loginservice: LoginService, private addtobuy: AddtobuyService, private adsressservice: AddressService) { }


  compare_list = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"]

  FinalResponseList: any
  userId: any
  amountpay: any
  ngOnInit(): void {

    this.addaddress = this.fb.group({
      roomno:  [' ', [Validators.required]],
      buildname: [' ', [Validators.required]],
      address1: [' ', [Validators.required]],
      address2: [' ', [Validators.required]],
      landmark: [' ', [Validators.required]],
      pincode: [' ', [Validators.required]],
      state: [' ', [Validators.required]],
      phone: [' ', [Validators.required]]
    })
    this.userId = this.loginservice.getuserid()
    this.amountpay = localStorage.getItem("finalprice")
    // console.log(this.userId);
    // console.log(this.amountpay);

  }


  get addaddresscontrols() {
    return this.addaddress.controls
  }

  addfinalresponse: any
  submit() {
    var myusername = (<HTMLInputElement>document.getElementById("roomno")).value;
    console.log(myusername);
    
    if(myusername == null && myusername==''){
      this.adsressservice.addaddress(this.userId, this.amountpay, this.addaddress.value).subscribe(responseList => {
        this.addfinalresponse = responseList;
          this.router.navigate(["payment"])
      })
    }
    else{
      alert("Please Fill All Required Value")
    }
     

    
  }

  reset() {
    this.addaddress.reset()
  }

   



}
