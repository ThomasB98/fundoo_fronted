import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NoteService {

  noteCreated =new EventEmitter<void>();
  
  constructor(private http:HttpService)  { }

  getNotes(){

    const userId = localStorage.getItem("userId");
    if (!userId) {
      throw new Error("User ID is not available in local storage.");
    }

    const url = `https://localhost:7116/api/Note/user/${userId}`;


    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem("token")}` // Use Authorization header
      })
    };

    // Make the HTTP GET request
    return this.http.getService(url, true, httpOptions);
  }


  // createNote1(reqData:any){
  //   const userId = localStorage.getItem("userId");
  //   if (!userId) {
  //     throw new Error("User ID is not available in local storage.");
  //   }

  //   const url = `https://localhost:7116/api/Note/create`;

  //   let httpOptions = {
  //     headers: new HttpHeaders({
  //       "content-type":"application/json",
  //       Authorization: `Bearer ${localStorage.getItem("token")}` // Use Authorization header
  //     })
  //   };

  //   return this.http.PostServiceReset(url,reqData,true,httpOptions);
  // }

  createNote(reqData:any){
    const  token=localStorage.getItem("token");
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+ token
      })
    }
    return this.http.PostServiceReset('https://localhost:7116/api/Note/create',reqData, true, header).pipe(
      tap((res:any)=>{
        if(res.success){
          this.noteCreated.emit();
        }
      })
    );
  }
}
