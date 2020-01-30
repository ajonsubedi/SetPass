import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DataService } from "../../Services/data.service";
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { DetailsPage } from '../../Pages/details/details.page';

@Component({
  selector: 'app-passwords',
  templateUrl: './passwords.page.html',
  styleUrls: ['./passwords.page.scss'],
})
export class PasswordsPage implements OnInit {

  icons:string[] = [
    "Facebook",
    "Instagram",
    "Snapchat",
    "Twitter",
    "Netflix",
    "Google"
  ];
  iconUrl:string;
  currentIcon:string;
  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public modalController: ModalController
    ) { }

  ngOnInit() {
  }


  //open modals
  async addApp(event:string, appName) {
    console.log(appName);
    const modal = await this.modalController.create({
      component: DetailsPage,
      componentProps: {
        'appName': appName
      }
    });
    return await modal.present();
  }

  
  ionViewWillEnter(){
    this.icons.forEach(icon => {
      switch(icon){
        case "Facebook":
          this.iconUrl = "../../../assets/fb.png"
          break;
        case "Instagram":
          this.iconUrl = "../../../assets/insta.png"
          break;
        case "Snapchat":
          this.iconUrl = "../../../assets/sc.png"
          break;
        case "Twitter":
          this.iconUrl = "../../../assets/twitter.png"
          break;
        case "Netflix":
          this.iconUrl = "../../../assets/netflix.png"
          break;
        case "Google":
          this.iconUrl = "../../../assets/google.png"
          break;
      }
    });
  }

}
