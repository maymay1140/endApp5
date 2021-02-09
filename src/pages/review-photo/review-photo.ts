import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { ReviewDetailPage } from '../review-detail/review-detail';
import { MenuUserPage } from '../menu-user/menu-user';

@IonicPage()
@Component({
  selector: 'page-review-photo',
  templateUrl: 'review-photo.html',
})
export class ReviewPhotoPage {

  rowsComplete=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,private storage: Storage) {
    this.loadComplete();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewPhotoPage');
  }

  loadComplete(){
    this.storage.get('id').then((val) => {

      let url = "http://172.20.10.4/serviceapp/get_complete.php?user_id="+val;

      this.http.get(url).subscribe((data: any) => {
        this.rowsComplete = data.rowsComplete;
  
         console.log(data);
        
      }, (error) => { console.log(error) });
    })
  }

  Review(item){
    this.navCtrl.push(ReviewDetailPage,item);
    
  }

  HomeMenu(){
    this.navCtrl.push(MenuUserPage);
  }



}// end class
