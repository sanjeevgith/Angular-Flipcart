import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-categories',
  templateUrl: './products-categories.component.html',
  styleUrls: ['./products-categories.component.scss']
})
export class ProductsCategoriesComponent implements OnInit {





  constructor(private productsService: ProductsService, private loginservice: LoginService) { }



  category: any
  ngOnInit(): void {
    this.category = localStorage.getItem("category")
    // console.log(this.category, "this.category");
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
    // console.log(this.category);
    if (this.category == "true") {
      this.productsService.getlatestproductcategorywise(this.category).subscribe(responseList => {
        this.finalProducts = responseList
        console.log("this.finalProducts top 15", this.finalProducts);
      })
    }
  }




  addtocart(data: any) {
    var userid = this.loginservice.getuserid()
    console.log("userid", userid);


    console.log("Product", data);

  }


  buy(id: any) {
    console.log("Product_id_Buy", id);
  }
















}
