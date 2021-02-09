import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchWorkPage } from './search-work';

@NgModule({
  declarations: [
    SearchWorkPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchWorkPage),
  ],
})
export class SearchWorkPageModule {}
