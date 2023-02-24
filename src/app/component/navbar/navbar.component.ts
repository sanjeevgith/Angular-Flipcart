import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddtobuyService } from 'src/app/services/addtobuy.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {



  constructor(private addtobuy: AddtobuyService, private router: Router) { }


  counter: any
  ngOnInit(): void {


  }



  search() {
    var searchdata = (<HTMLInputElement>document.getElementById("searchinput")).value;
    console.log(searchdata);
    localStorage.setItem("searchdata", searchdata);
    this.router.navigate(["productcategories"]);

  }





}
