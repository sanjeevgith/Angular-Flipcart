import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {




  addaddress!: FormGroup
  constructor(private fb: FormBuilder,private router:Router) { }


  compare_list=["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"]

  ngOnInit(): void {
    this.addaddress = this.fb.group({
      roomno: ['', [Validators.required]],
      buildname: ['', [Validators.required]],
      address1: ['', [Validators.required]],
      address2: ['', [Validators.required]],
      landmark: ['', [Validators.required]],
      pincode: ['', [Validators.required]],
      state: ['', [Validators.required]],
      phone: ['', [Validators.required]]
    })
  }



  submit(){
    console.log(this.addaddress.value);
    this.router.navigate(["payment"])
    
  }

  reset() {
    this.addaddress.reset()
  }

}
