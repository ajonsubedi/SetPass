import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PasswordsPageRoutingModule } from './passwords-routing.module';
import { PasswordsPage } from './passwords.page';
import { StorageService } from 'src/app/Services/storage.service';
import { DataService } from 'src/app/Services/data.service';
import { DetailsModule } from '../details/details.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordsPageRoutingModule,
    DetailsModule
  ],
  providers: [
    StorageService,
    DataService
  ],
  declarations: [PasswordsPage]
})
export class PasswordsPageModule {}
