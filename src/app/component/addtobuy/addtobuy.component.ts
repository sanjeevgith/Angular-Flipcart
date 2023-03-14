import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AddtobuyService } from 'src/app/services/addtobuy.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-addtobuy',
  templateUrl: './addtobuy.component.html',
  styleUrls: ['./addtobuy.component.scss']
})
export class AddtobuyComponent implements OnInit {



  typeSelected: string;

  constructor(private spinnerService: NgxSpinnerService,private addtobuy: AddtobuyService, private router: Router,private loginservice:LoginService) {
    this.typeSelected = 'line-spin-clockwise-fade';
   }


  finaltotal: any = [];
  FinalResponseList: any
  plusedata = 0;
  inputBalanceQuantity: any = []

  getdata() {
    this.spinnerService.show();
    this.plusedata = 0
    this.finaltotal = [];
    this.addtobuy.getCartProduct().subscribe(responseList => {
      this.FinalResponseList = responseList;
      this.spinnerService.hide();
      // console.log("addtoCardDataByUserid", this.FinalResponseList);
      for (let i = 0; i < this.FinalResponseList.length; i++) {
        this.inputBalanceQuantity = 0;
        for (let j = 0; j < this.FinalResponseList[i].products.length; j++) {

          this.inputBalanceQuantity += this.FinalResponseList[i].products[j].price
        }
        // console.log(this.inputBalanceQuantity);
        this.finaltotal.push(this.inputBalanceQuantity)
        // console.log(this.finaltotal);
        this.plusedata += this.finaltotal[i]
        // console.log(this.plusedata);
        var finalprice:any = this.plusedata
        localStorage.setItem("finalprice",finalprice)
      }
    })
  }

  checkout(){
    this.router.navigate(["address"])
  }


  ngOnInit(): void {
    this.getdata();
  }









  finalcartresponse: any
  removeproduct(data: any) {
    // console.log(data);
    this.addtobuy.deletCart(data).subscribe(responseList => {
      this.finalcartresponse = responseList;
      console.log("cart delete response==", this.finalcartresponse);
      this.getdata();

    })
  }






}
