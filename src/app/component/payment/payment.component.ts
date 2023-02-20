import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {


  typeSelected: string;

  constructor(private spinnerService: NgxSpinnerService, private router: Router) {
    this.typeSelected = 'line-spin-clockwise-fade';
  }


  amountpay = localStorage.getItem("finalprice")

  ngOnInit(): void {
  }


  paypopup() {
    this.spinnerService.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinnerService.hide();
      this.router.navigate(["products"])
    }, 5000);
  }


}
