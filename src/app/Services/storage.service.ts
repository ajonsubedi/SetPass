import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  static instance: StorageService;
  private static storage: Storage;
  public pw:string;
  public email:string;

  constructor(private storage: Storage) {
    StorageService.instance = this;
    StorageService.storage = storage;
  }

  async setEmail(key: string, value:any):Promise<any> {
    try{
      const result = await this.storage.set(key, value);
      console.log("Opgeslagen email is " + result);
      return true;
    }
    catch(reason){
      console.log(reason);
      return false;
    }
  }

  async getEmail(key:string):Promise<any> {
    try{
      const result = await this.storage.get(key);
      this.email = result;
      console.log('GET email ' + key + ': ' + this.email);
      if(result == null){
        return result;
      }
      return null;
    }
    catch(reason){
      console.log(reason);
      return null;
    }
  }

  

  async setPass(key: string, value:any):Promise<any> {
    try{
      const result = await this.storage.set(key, value);
      console.log("Opgeslagen pass is " + result);
      return true;
    }
    catch(reason){
      console.log(reason);
      return false;
    }
  }

  async getPass(key:string):Promise<any> {
    try{
      const result = await this.storage.get(key);
      this.pw = result;
      console.log('GET pass ' + key + ': ' + this.pw);
      if(result == null){
        return result;
      }
      return null;
    }
    catch(reason){
      console.log(reason);
      return null;
    }
  }
}
