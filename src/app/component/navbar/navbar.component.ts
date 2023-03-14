import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddtobuyService } from 'src/app/services/addtobuy.service';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {




  constructor(private addtobuy: AddtobuyService, private router: Router, private navbarservice: NavbarService) { }






  counter: any = 0
  counter1: any
  FinalResponseList: any
  ngOnInit(): void {
    this.navbarservice.getCartcount().subscribe(responseList => {
      this.counter = responseList;
      if (this.counter) {
        this.ngOnInit()
      }
    })
  }




  // ngDoCheck():void{
  //   this.navbarservice.getCartcount().subscribe(responseList=>{
  //     this.counter = responseList;
  //   })
  // }



  searchdata: any
  search() {
    this.searchdata = (<HTMLInputElement>document.getElementById("searchinput")).value;
    // console.log(this.searchdata);
    this.router.navigate(["productcategories", this.searchdata]);

  }






}
