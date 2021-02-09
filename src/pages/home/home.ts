import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MenuRequestPage } from '../menu-request/menu-request';
import { ViewReviewPage } from '../view-review/view-review';
import { ReportWorkPage } from '../report-work/report-work';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private storage: Storage) {

  }
  MenuRequest(){
    this.navCtrl.push(MenuRequestPage);
  }
  ViewReview(){
    this.navCtrl.push(ViewReviewPage);
  }
  Report(){
    this.navCtrl.push(ReportWorkPage);
  }



}//end class
