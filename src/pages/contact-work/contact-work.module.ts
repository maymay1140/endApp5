import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactWorkPage } from './contact-work';

@NgModule({
  declarations: [
    ContactWorkPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactWorkPage),
  ],
})
export class ContactWorkPageModule {}
