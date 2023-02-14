import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {  Observable } from 'rxjs';
import { LoginService } from "./login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private login:LoginService){}

    intercept(req:HttpRequest<any>,next:HttpHandler): Observable<HttpEvent<any>>{
        
        let newReq=req;
        let token = this.login.getToken()

        console.log("intercepter",token);
        if(token!=null){
            console.log("tokeen is not null");
            
            newReq= newReq.clone({setHeaders:{Authorization:`Bearer ${token}`}})
        }
        return next.handle(newReq)
    }

}