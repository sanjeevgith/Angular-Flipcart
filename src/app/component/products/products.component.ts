import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {





  constructor(private productservice: ProductsService) { }

  toy = "toy";
  travel = "travel";
  twowheeler = "twowheeler"
  grocery = "grocery"
  fasion = "fasion";
  home = "home"
  topproduct = "true";
  electronics = "electronics"
  mobile = "mobile"


  ngOnInit(): void {

  }







  viewproductsbycategories(category: any) {
    //console.log(category);
    localStorage.setItem("category", category)

  }




















}
