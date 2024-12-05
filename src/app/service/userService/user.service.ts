import { Injectable } from '@angular/core';

import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpService) { }

  LogIn(reqData:any):Observable<any>{
    let header={
      headers:new HttpHeaders({
        "content-type":"application/json"
      })
    }

    return this.http.PostMethod("https://localhost:7116/api/Auth/Login",reqData,false,{header});
  }
  
  Registertion(reqData:any):Observable<any>{
    let header={
      Headers:new HttpHeaders({
        "content-type":"application/json"
      })
    }

    return this.http.PostMethod("https://localhost:7116/api/User/create",reqData,false,{header});
  }
}
