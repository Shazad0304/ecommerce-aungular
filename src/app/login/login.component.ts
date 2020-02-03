import { Component, OnInit } from '@angular/core';
import { AuthguardService } from '../authguard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public abc = "assets/img/login.jpg";
  constructor(private auth:AuthguardService,private rout: Router) { }

  ngOnInit() {
  }
  check(user,pass){
    if(user.value == 'shazad' && pass.value == 'malik'){
  localStorage.setItem('auth',user.value);
  this.rout.navigate(['addproducts']);
    }
  }
}
