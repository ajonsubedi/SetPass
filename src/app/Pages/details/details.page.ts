import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { ToastController } from '@ionic/angular';
import { StorageService } from "../../Services/storage.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  @Input() appName: string;
  iconUrl:string;
  email:any;
  password:any;
  readonly:boolean = true;

  constructor(
    private modalCtrl:ModalController,
    private navParams: NavParams,
    private clipboard: Clipboard,
    private toastController:ToastController,
    private storageService: StorageService
  ) {
    console.log(navParams.get('appName'));
    //DataService.instance.getEmail();
   }
   ionViewWillEnter(){
    this.password = this.storageService.pw;
    this.email = this.storageService.email;
   }

  ngOnInit() {
    switch(this.appName){
      case "Facebook":
        this.iconUrl = "../../../assets/fbXL.png"
        break;
      case "Instagram":
        this.iconUrl = "../../../assets/instaXL.png"
        break;
      case "Snapchat":
        this.iconUrl = "../../../assets/scXL.png"
        break;
      case "Twitter":
        this.iconUrl = "../../../assets/twitterXL.png"
        break;
      case "Netflix":
        this.iconUrl = "../../../assets/netflixXL.png"
        break;
      case "Google":
        this.iconUrl = "../../../assets/googleXL.png"
        break;
    }
   this.storageService.getEmail('email');
   this.storageService.getPass('pass');
  }


  //close modal
  dismiss() {
    this.modalCtrl.dismiss();
  }

  //save data
  save(){
   // this.modalCtrl.dismiss();
    this.storageService.setEmail('email', this.email);
    this.storageService.setPass('pass', this.password);
    console.log("email: " + this.email + "pass: " + this.password);
    return this.email;
  }

  //generate random password
  generatePass(){
    var password:string = "";
    var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890&@#'!$%+-/€£";
    for (let i = 0; i < 64; i++) {
      password += char.charAt(Math.random() * char.length);
    }
    this.password = password;
    console.log(this.password);
  }

  //copy password to clipboard
  copyPass() {
    console.log(this.password);
    this.clipboard.copy(this.password);
    this.verifyPassCopied();
  }
  async verifyPassCopied() {
    const toast = await this.toastController.create({
      message: 'Successfully copied!',
      duration: 2000
    });
    toast.present();
  }

  //edit email
  editEmail(){
    this.readonly = false;
    console.log("edit")
    return this.readonly;
  }
}
