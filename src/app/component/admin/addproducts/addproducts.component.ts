import { Component, OnInit } from '@angular/core';
import { AddproductsService } from '../addproducts.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.scss']
})
export class AddproductsComponent implements OnInit {



  constructor(private addproductservice: AddproductsService) { }

  ngOnInit(): void {

  }




  submit() {

  }






}
