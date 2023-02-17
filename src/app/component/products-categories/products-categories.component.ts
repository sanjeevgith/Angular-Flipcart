import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-categories',
  templateUrl: './products-categories.component.html',
  styleUrls: ['./products-categories.component.scss']
})
export class ProductsCategoriesComponent implements OnInit {





  constructor(private productsService: ProductsService, private loginservice: LoginService,private router:Router) { }



  compare_list = [2, 3, 4, 5]
  addtocarttext = "Add to cart";
  category: any
  ngOnInit(): void {
    this.category = localStorage.getItem("category")
    // console.log(this.category, "this.category");
    if(this.category == null ){
      this.router.navigate(['products'])
    }
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


  compareChange(event: any) {
    var data = event.target.value;
    console.log(data);
    this.quantityvalue = data
  }


  quantityvalue: any
  finalAddcartResponse: any
  addtocart(data: any) {

    var userid = this.loginservice.getuserid()
    console.log("userid", userid);
    console.log("Product", data);

    var products = {
      productId: "",
      quantity: "",
      img: "",
      price: "",
      title: ""
    }
    // this.quantityvalue = (<HTMLInputElement>document.getElementById("quantityselect")).value;
    products.productId = data._id
    products.img = data.img
    products.price = data.price
    products.title = data.title
    products.quantity = this.quantityvalue
    console.log("products", products);

    this.productsService.addcart(userid, products).subscribe(responseList => {
      this.finalAddcartResponse = responseList;
      console.log("Api Response=", this.finalAddcartResponse);
      alert("Product Added to Cart")

      
    })

  }




  buy(id: any) {
    console.log("Product_id_Buy", id);
  }






  //quantity selection
  // quant = 0;
  // decrease() {
  //   --this.quant;     //increment the value by one  x=x+1
  //   console.log(this.quant)
  // }
  // increase() {
  //   ++this.quant;     //increment the value by one  x=x+1
  //   console.log(this.quant)
  // }

  //end quantity












}
