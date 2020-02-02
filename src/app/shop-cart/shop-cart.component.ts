import { Component, OnInit} from '@angular/core';
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
  ab = null;
  temp = [];
  constructor(private _save:SaveproductsService,private af:AngularFireStorage) { 

  }

  ngOnInit() {

        
    this.ab = this.af;
    this._save.getData().subscribe(x => this.items = x.map(o => o.payload.doc.data()));
    console.log(this.items);
 

  }

  get(){
   for(let it of this.items){
    this.af.ref(it.imgname).getDownloadURL().subscribe(x => it.imgname = x);
   }
  }
  get1(){
    this.get();
    console.log(this.temp);
  }

}
