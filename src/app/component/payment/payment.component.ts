import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginService } from 'src/app/services/login.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {


  typeSelected: string;

  payment!: FormGroup

  constructor(private spinnerService: NgxSpinnerService, private router: Router, private fb: FormBuilder, private paymentservice: PaymentService, private loginservice: LoginService) {
    this.typeSelected = 'line-spin-clockwise-fade';
  }


  amountpay = localStorage.getItem("finalprice")
  userId = this.loginservice.getuserid()
  ngOnInit(): void {
    this.payment = this.fb.group({
      userId: ['', Validators.required],
      amount: ['', [Validators.required]],
      cardNumber: ['', [Validators.required]],
      expDate: ['', [Validators.required]],
      cvCode: ['', [Validators.required]],
      couponCode: ['', [Validators.required]],
    })

    this.payment.patchValue({
      amount: this.amountpay
    });
    this.payment.patchValue({
      userId: this.userId
    });

  }


  paypopup() {
    this.spinnerService.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinnerService.hide();
      this.router.navigate(["products"])
    }, 5000);
  }


  finalpaymentresponse: any
  sendcarddata() {
    this.paymentservice.addPayment(this.payment.value).subscribe(responseList => {
      this.finalpaymentresponse = responseList
      console.log(this.finalpaymentresponse);
    })
  }




}
