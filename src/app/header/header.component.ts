import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {jwtDecode} from 'jwt-decode';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { NoteinputComponent } from "../noteinput/noteinput.component";
import { GetnotesComponent } from "../getnotes/getnotes.component";




@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    CommonModule,
    GetnotesComponent
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router){}
  

  label_list=[
    'DSA',
    'ENGLISH',
    'MATHS'
  ]

  ngOnInit() {
    var token=localStorage.getItem("token");

    if (!token || this.isTokenExpired(token)) {
      // If token is not present or expired, redirect to login
      this.router.navigate(['']);
    }if (typeof window !== 'undefined' && window.localStorage) {
      const token = localStorage.getItem("token");
  
      if (!token || this.isTokenExpired(token)) {
        // Redirect to login if token is missing or expired
        this.router.navigate(['']);
      }
    } else {
      console.error('localStorage is not available.');
      this.router.navigate(['']); // Redirect to login in case of server-side rendering
    }
  }

  isTokenExpired(token:string):boolean{
    try{
      const decoded: any = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000); 
      return decoded.exp < currentTime;
    }
    catch (error) {
      console.error('Invalid token:', error);
      return true; // Treat invalid tokens as expired
    }
  }

  UserFirstletter(): String {
    if (typeof window !== 'undefined' && window.localStorage) {
      const username = localStorage.getItem("username");
      const trimmedUsername = username?.trim() ?? ''; // Remove leading/trailing spaces and handle null
      return trimmedUsername.charAt(0).toUpperCase();
    }
    return ''; // Default value if localStorage is not available
  }

}
