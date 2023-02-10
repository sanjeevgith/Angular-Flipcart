import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }





  getproductcategorywise(cat: any) {
   // console.log(cat);
    
    return this.http.get("http://localhost:5000/api/products?category=" + cat);
  }


  

  getlatestproductcategorywise(top: any) {
    // console.log(top);
    //console.log("http://localhost:5000/api/products?new=" + top);
    
    return this.http.get("http://localhost:5000/api/products?new=" + top);
  }


}
