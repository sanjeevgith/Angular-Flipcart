import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient, private loginservice: LoginService) { }


  auth_token = this.loginservice.getToken();
  headers = new HttpHeaders().set('token', `bearer ${this.auth_token}`);


  getproductcategorywise(cat: any) {
    // console.log(cat);
    return this.http.get("http://localhost:5000/api/products?category=" + cat);
  }




  getlatestproductcategorywise(top: any) {
    // console.log(top);
    //console.log("http://localhost:5000/api/products?new=" + top);
    return this.http.get("http://localhost:5000/api/products?new=" + top);
  }



  addcart(userid: any, product: any) {
    console.log(userid);
    console.log(product);

    var data = {
      "userId": userid,
      "products": [
        {
          "productId": product.productId,
          "quantity": product.quantity,
          "img": product.img,
          "price": product.price,
          "title": product.title
        }
      ]
    }

    console.log(data);

    return this.http.post("http://localhost:5000/api/cart", data, {
      headers: this.headers
    })
  }















}
