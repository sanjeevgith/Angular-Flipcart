import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { MyorderService } from 'src/app/services/myorder.service';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.scss']
})
export class MyorderComponent implements OnInit {



  constructor(private myorderservice: MyorderService, private loginservice: LoginService) { }




  ngOnInit(): void {
    this.getmyorder();
   // this.pageination();
  }


  displaydata: any
  status: any
  finalmyorderdata: any
  getmyorder() {
    var userid = this.loginservice.getuserid()
    this.myorderservice.getorderdata(userid).subscribe(responseList => {
      this.finalmyorderdata = responseList;
      console.log(this.finalmyorderdata);

      // this.status =this.finalmyorderdata[0].status
      // for (let j = 0; j < this.finalmyorderdata.length; j++) {
      //   console.log(this.finalmyorderdata[j].products);
      //   for (let i = 0; i < this.finalmyorderdata[j].products.length; i++) {
      //     this.displaydata = this.finalmyorderdata[j].products
      //   }
      // } 
      // console.log(this.displaydata);
    })
  }








  // p: any
  // collection: any = [];
  // pageination() {
  //   for (let i = 1; i <= 100; i++) {
  //     this.collection.push(`item ${i}`);
  //   }
  // }









}
