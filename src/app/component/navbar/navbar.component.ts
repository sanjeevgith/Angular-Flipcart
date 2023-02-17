import { Component, OnInit } from '@angular/core';
import { AddtobuyService } from 'src/app/services/addtobuy.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {



  constructor(private addtobuy: AddtobuyService) { }


  counter: any
  ngOnInit(): void {


  }



  search() {
    var searchdata = (<HTMLInputElement>document.getElementById("searchinput")).value;
    console.log(searchdata);
  }





}
