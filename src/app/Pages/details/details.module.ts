import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetailsPageRoutingModule } from './details-routing.module';
import { DetailsPage } from './details.page';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { DataService } from 'src/app/Services/data.service';
import { StorageService } from 'src/app/Services/storage.service';
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPageRoutingModule,
    PasswordStrengthMeterModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    Clipboard,
    DataService,
    StorageService
  ],
  declarations: [DetailsPage]
})
export class DetailsModule {}
