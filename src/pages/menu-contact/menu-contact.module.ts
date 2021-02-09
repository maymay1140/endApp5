import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuContactPage } from './menu-contact';

@NgModule({
  declarations: [
    MenuContactPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuContactPage),
  ],
})
export class MenuContactPageModule {}
