import { Component, OnInit } from '@angular/core';
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
  constructor(private _save:SaveproductsService,private af:AngularFireStorage) { }

  ngOnInit() {
    this.ab = this.af;
    this._save.getData().subscribe(x => this.items = x.map(o => o.payload.doc.data()));
    console.log(this.items);
  }

  get(){
    console.log(this.af.storage.ref('a2du20fhr5e').getDownloadURL());
    console.log(this.ab);
  }

}
