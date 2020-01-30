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
  imgName =[];
  constructor(private http:HttpClient,private db:AngularFirestore,private af:AngularFireStorage) {}

   saveData(data,img){
    for(let imgs of img){
      const id = Math.random().toString(36).substring(2);
      this.imgName.push(id);
      this.ref = this.af.ref(id);
      this.task =  this.ref.put(imgs);
      //this.load = this.task.percentageChanges();
      //this.downloadUrl = this.ref.getDownloadURL();
      
      }
     


    for(let index in data){
      this.db.collection('product').add(
        {
          name:data[index].name,
          price:data[index].price,
          modelno: data[index].modelno,
          company: data[index].company,
          imgname: this.imgName[index]
        }
        )
  
    }
    this.imgName = [];
  
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
