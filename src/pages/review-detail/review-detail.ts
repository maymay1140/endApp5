import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Events, IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ReviewPhotoPage } from '../review-photo/review-photo';

@IonicPage()
@Component({
  selector: 'page-review-detail',
  templateUrl: 'review-detail.html',
})
export class ReviewDetailPage {
  item = {overview:''};
  point:any="5";

  constructor(public navCtrl: NavController, public navParams: NavParams
    ,public http: HttpClient,
     private storage: Storage,
     public event: Events,
     public alertCtrl: AlertController) {

      this.event.subscribe('star-rating:changed', (note)=>{
        console.log('คะแนน', note);
        this.point = note;
      })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewDetailPage');
    this.item = this.navParams.data;
    console.log(this.item);
  }

  reviewsSave(point,description,item){

    this.storage.get('id').then((val) => {
    console.log("user_id is", val);
    let jsonData = { point: point, description: description, user_id: val, id_photo:item.id_photo }; //สร้าง obj
    console.log(jsonData);
    let url = 'http://172.20.10.4/serviceapp/review_detail.php'; //ให้ไป post ที่  url
    this.http.post(url, jsonData,).subscribe((data: any) => {
      let alert = this.alertCtrl.create({
        title: 'รีวิวเรียบร้อยแล้ว',
        buttons: ['ok']
      });
      alert.present();
       this.navCtrl.push(ReviewPhotoPage)
      // console.log(data);
    });
  
    //method post รับค่ามา 2 ค่า คือ url เว็บที่ต้องการโพสไป , obj 
    //subscribe ใส่  arrow  function ใส่ค่าเป็น data : any ข้อมูลอะไรก็ได้
  })

}



}// end class
