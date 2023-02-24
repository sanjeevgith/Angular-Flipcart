import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-categories',
  templateUrl: './products-categories.component.html',
  styleUrls: ['./products-categories.component.scss']
})
export class ProductsCategoriesComponent implements OnInit {





  constructor(private productsService: ProductsService, private loginservice: LoginService, private router: Router, private route: ActivatedRoute) { }



  compare_list = [2, 3, 4, 5]
  addtocarttext = "Add to cart";
  category: any
  searchdata: any
  ngOnInit(): void {
    this.category = localStorage.getItem("category")

    this.route.params.subscribe(params => {
      var newdata = params['searchdata'];
      console.log("search response", newdata);
      if (newdata != null) {
        this.productsService.getproductcategorywise(newdata).subscribe(responseList => {
          this.finalProducts = responseList
          console.log("search response", this.finalProducts);
        })
      }
      else if (this.category == "true") {
        this.searchTopProducts()
      }
      else if (this.category != null && this.category != undefined) {
        this.finalProducts = []
        this.searchProductsBycategory()
      }
    });


  }


  finalProducts: any
  searchProductsBycategory() {
    this.productsService.getproductcategorywise(this.category).subscribe(responseList => {
      this.finalProducts = responseList
      console.log("my categories", this.finalProducts);
    })
  }


  searchTopProducts() {
    this.productsService.getlatestproductcategorywise(this.category).subscribe(responseList => {
      this.finalProducts = responseList
      console.log("this.finalProducts top 15", this.finalProducts);
    })
  }




  compareChange(event: any) {
    var data = event.target.value;
    console.log(data);
    this.quantityvalue = data
  }


  quantityvalue: any
  finalAddcartResponse: any
  addtocart(data: any) {
    if (this.quantityvalue == undefined && this.quantityvalue == null) {
      this.quantityvalue = 1
    }
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
    var quantV: any
    // this.quantityvalue = (<HTMLInputElement>document.getElementById("quantityselect")).value;
    if (this.quantityvalue == 1) {
      quantV = data.price * 1
    }
    else if (this.quantityvalue == 2) {
      quantV = data.price * 2
    }
    else if (this.quantityvalue == 3) {
      quantV = data.price * 3
    }
    else if (this.quantityvalue == 4) {
      quantV = data.price * 4
    }
    else if (this.quantityvalue == 5) {
      quantV = data.price * 5
    }
    else {

    }

    console.log(this.quantityvalue);

    products.productId = data._id
    products.img = data.img
    products.price = quantV
    products.title = data.title
    products.quantity = this.quantityvalue
    console.log("products", products);

    this.productsService.addcart(userid, products).subscribe(responseList => {
      this.finalAddcartResponse = responseList;
      console.log("Api Response=", this.finalAddcartResponse);
      quantV = []
      this.quantityvalue = 1
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
