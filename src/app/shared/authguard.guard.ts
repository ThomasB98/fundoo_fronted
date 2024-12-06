import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router  } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';
@Injectable(
  {
    providedIn: 'root'
  }
)

export class authguardGuard implements CanActivate{

  constructor( private authService:AuthService,private router:Router){

  }
  
  canActivate(): boolean {
    if(this.authService.IsLoggedIn()){
      return true;
    }
    else{
      this.router.navigate(['']);
      return false;
    }
  }

}