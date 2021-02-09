import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuRequestPage } from './menu-request';

@NgModule({
  declarations: [
    MenuRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuRequestPage),
  ],
})
export class MenuRequestPageModule {}
