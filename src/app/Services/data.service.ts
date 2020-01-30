import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  static instance: DataService;
  private email:string;
  constructor() {
    DataService.instance = this;
    // this.LoadData();
   }

  //  LoadData() {
  //    StorageService.instance.get().then((email) => {
  //      if (email == null) {
  //        this.email = "";
  //      }
  //      else {
  //        this.email = email;
  //      }
  //      StorageService.instance.SaveEmail(this.email);
  //    });
  //  }

  //  setEmail(email: string) {
  //    this.email = email;
  //    StorageService.instance.SaveEmail(email);
  //  }

   
  getEmail() {
    try {
      return this.email;
    }
    catch{
      return '';
    }
  }
}
