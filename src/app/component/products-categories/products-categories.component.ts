import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-categories',
  templateUrl: './products-categories.component.html',
  styleUrls: ['./products-categories.component.scss']
})
export class ProductsCategoriesComponent implements OnInit {





  constructor(private productsService: ProductsService) { }



  category: any
  ngOnInit(): void {
    this.category = localStorage.getItem("category")
    console.log(this.category, "this.category");
    this.searchProductsBycategory()
    this.searchTopProducts()
  }



  finalProducts: any
  searchProductsBycategory() {
    this.productsService.getproductcategorywise(this.category).subscribe(responseList => {
      this.finalProducts = responseList
      console.log("this.finalProducts", this.finalProducts);
    })
  }


  searchTopProducts() {
    console.log(this.category);
    if (this.category == "true") {
      this.productsService.getlatestproductcategorywise(this.category).subscribe(responseList => {
        this.finalProducts = responseList
        console.log("this.finalProducts", this.finalProducts);
      })
    }
  }


















}
