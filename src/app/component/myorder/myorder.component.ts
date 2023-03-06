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
  }


  displaydata: any
  status: any
  finalmyorderdata: any
  getmyorder() {
    var userid = this.loginservice.getuserid()
    this.myorderservice.getorderdata(userid).subscribe(responseList => {
      this.finalmyorderdata = responseList;
      this.status =this.finalmyorderdata[0].status
      console.log(this.finalmyorderdata[0].products);
      for (let j = 0; j < this.finalmyorderdata.length; j++) {
        for (let i = 0; i < this.finalmyorderdata[j].products.length; i++) {
          this.displaydata = this.finalmyorderdata[j].products
        }
      } 
     // console.log(this.displaydata);
    })
  }




}
