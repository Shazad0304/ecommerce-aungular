import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFireStorage,AngularFireStorageReference,AngularFireUploadTask} from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { async } from '@angular/core/testing';



@Injectable({
  providedIn: 'root'
})
export class SaveproductsService {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  load: Observable<number>;
  downloadUrl: Observable<string>;
  
  constructor(private http:HttpClient,private db:AngularFirestore,private af:AngularFireStorage) {}

   saveData(data){

    for(let items of data){
      const id = Math.random().toString(36).substring(2);
        this.ref = this.af.ref(id);
        this.task =  this.ref.put(items.Image);
        this.db.collection('product').add(
        {
          name:items.name,
          price:items.price,
          modelno: items.modelno,
          company: items.company,
          imgname: id
        }
        )
  
    }
  
    return 'success';
   
  }
  



  getData(){
    return this.db.collection('/product').snapshotChanges();
  }

  update(key){
    return this.db.collection('/product').doc(key.payload.doc.id).set({fname: 'shazad'});
    
  }

  del(key){
    return this.db.collection('/product').doc(key.payload.doc.id);
  }
 
 
}
