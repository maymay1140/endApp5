import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReviewPhotoPage } from './review-photo';

@NgModule({
  declarations: [
    ReviewPhotoPage,
  ],
  imports: [
    IonicPageModule.forChild(ReviewPhotoPage),
  ],
})
export class ReviewPhotoPageModule {}
