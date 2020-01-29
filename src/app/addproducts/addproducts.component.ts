import { Component, OnInit } from '@angular/core';
import { SaveproductsService } from '../saveproducts.service';
import {AngularFireStorage,AngularFireStorageReference,AngularFireUploadTask} from '@angular/fire/storage';
import { Observable } from 'rxjs';




@Component({
  providers: [SaveproductsService],
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  load: Observable<number>;
  downloadUrl: Observable<string>;
  constructor(private _save:SaveproductsService,private af:AngularFireStorage) { }

  productss = [];
  productImg = [];
  check = false;

  products = [];
  public fetch = [];
  public sFile: File = null;
  items: Array<any>;
  ngOnInit() {
  }

  add(name,price,model,company){
    if(name.value !=''&&price.value !=''&&model.value !=''&&company.value !='' && this.check){
      this.productss.push({
        name:name.value,
        price: price.value,
        modelno: model.value,
        company: company.value
      });
     
    }
    else{
      alert('All fields are required');
    }

    console.log(this.productss);
  }
  del(i){
    this.productss.splice(i,1);
    this.productImg.splice(i,1);
    console.log(this.productss);
  }
  save(){
    if(this.productss.length <= 0){
        alert('Please add some data');
    }
    else{
    if(confirm('Are you sure to save data')){
    if(this._save.saveData(this.productss,this.productImg) == 'success'){
      alert('Submitted');
      this.productss = [];
      this.productImg = [];
    }
    
    }
  }
  }
  addImg(img){
    if(img != null){
      this.productImg.push(img.target.files[0]);
      this.check = true;
    }
  
  }

  upload(event){
    const id = Math.random().toString(36).substring(2);
    this.ref = this.af.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.load = this.task.percentageChanges();
    
    this.downloadUrl = this.ref.getDownloadURL();
    
  }






  onSave(fname,lname){
    this.products.push({
      fname: fname.value,
      lname : lname.value
    });
    console.log(this.products);
  }
 onSubmit(){
//this._save.saveData(this.products);

 }

 onGet(){
   
  this._save.getData().subscribe(x => this.items = x);
  
 }
updates(key){
  
  this._save.update(key);
}

img(event){
  this.sFile =<File> event.target.files[0];
}

abc(){
  
console.log(this.sFile);
}
} 
