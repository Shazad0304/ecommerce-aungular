import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SaveproductsService } from '../saveproducts.service';
import {AngularFireStorage,AngularFireStorageReference,AngularFireUploadTask} from '@angular/fire/storage';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {


  items: Array<any>;
  check = true;
  ab = null;
  temp = [];
  pages = 10;
  constructor(private _save:SaveproductsService,private af:AngularFireStorage,private rout: Router) { 

  }

  ngOnInit() {

        
    this.ab = this.af;
    this._save.getData().subscribe(x => {
      this.items = x.map(o => o.payload.doc.data());
      this.get();
    });


  }

  get(){
   for(let it of this.items){
    
    this.af.ref(it.imgname).getDownloadURL().subscribe(x => it.imgname = x);
   }
  }


nextpage(){
  
  if(this.pages > this.items.length){this.check = false}
  else{
  this.pages = this.pages + 10;
}
}



sort(event){
 
   this.items.reverse();
    this.rout.navigateByUrl('/login', { skipLocationChange: true }).then(() => {
      this.rout.navigate(['shop'])});
    
  

}

}
