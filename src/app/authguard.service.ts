import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private rout: Router) { }

  canActivate():boolean{
    if(localStorage.getItem('auth')){
  
      return true;
    }
    else{
      this.rout.navigate(['login'])
      return false;
    }
  }
}
