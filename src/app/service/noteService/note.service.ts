import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NoteService {

  noteCreated =new EventEmitter<void>();
  noteUpdated =new EventEmitter<void>();
  noteColoreUpdate=new EventEmitter<void>();
  noteArchive = new EventEmitter<void>();
  noteTrash = new EventEmitter<void>();
  
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

    console.log(header);
    return this.http.PostServiceReset('https://localhost:7116/api/Note/create',reqData, true, header).pipe(
      tap((res:any)=>{
        if(res.success){
          this.noteCreated.emit();
        }
      })
    );
  }

  updateNote(reqData:any){
    const  token=localStorage.getItem("token");
    const url="https://localhost:7116/api/Note/update";
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+ token
      })
    }
    return this.http.putService(url,reqData,true,header).pipe(
      tap(
        (res:any)=>{
          this.noteUpdated.emit();
        }
      )
    );

  }

  archiveNote(noteId: number, isArchived: boolean){
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("User token is not available in local storage.");
    }
    const url = `https://localhost:7116/api/Note/archive/${noteId}?isArchived=${isArchived}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.putService(url, {}, true, httpOptions).pipe(
      tap(
        (res: any) => {
          if (res.success) {
            this.noteArchive.emit(); 
          }
        }
      )
    )
  }

  TrashNote(noteId:number,isDeleted:boolean){

    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("User token is not available in local storage.");
    }
    const url = `https://localhost:7116/api/Note/Trash/${noteId}?isDeleted=${isDeleted}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.putService(url, {}, true, httpOptions).pipe(
      tap(
        (res: any) => {
          if (res.success) {
            this.noteTrash.emit(); 
          }
        }
      )
    )
  }

  colorUpdate(reqData:any){
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("User token is not available in local storage.");
    }
    const url='https://localhost:7116/api/Note/note/colorUpdate';

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.PostServiceReset(url, reqData, true, httpOptions).pipe(
      tap(
        (res: any) => {
          if (res.success) {
            this.noteColoreUpdate.emit(); 
          }
        }
      )
    )
  }
}
