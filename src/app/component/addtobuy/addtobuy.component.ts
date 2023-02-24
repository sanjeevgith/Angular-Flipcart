import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddtobuyService } from 'src/app/services/addtobuy.service';

@Component({
  selector: 'app-addtobuy',
  templateUrl: './addtobuy.component.html',
  styleUrls: ['./addtobuy.component.scss']
})
export class AddtobuyComponent implements OnInit {



  constructor(private addtobuy: AddtobuyService, private router: Router) { }


  finaltotal: any = [];
  FinalResponseList: any
  plusedata = 0;
  inputBalanceQuantity: any = []

  getdata() {
    this.plusedata = 0
    this.finaltotal = [];
    this.addtobuy.getCartProduct().subscribe(responseList => {
      this.FinalResponseList = responseList;
      // console.log("addtoCardDataByUserid", this.FinalResponseList);
      for (let i = 0; i < this.FinalResponseList.length; i++) {

        localStorage.setItem("cartitemcount", this.FinalResponseList.length)

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
