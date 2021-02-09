import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ContactWorkPage } from '../contact-work/contact-work';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  rowsDetail=[];
rowsVideo=[];

rowsReview=[];

item = {overview:''};

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
    this.item = this.navParams.data;
    console.log(this.item);
  }




  loadDetail(item) {
    let url = 'http://172.20.10.4/serviceapp/get_detail.php?_id_album='+item.id_ab;
    // let url = 'http://localhost:82/servicewa/get_detail.php?_id_album=' + item.id_ab + '&id_photo=' + item.id;

    this.http.get(url).subscribe((data: any) => {
      this.rowsDetail = data.rowsDetail;
      console.log(url);
      console.log(data);
    }, (error) => { console.log(error) });
  } 

  loadReview(item) {
    let url = 'http://172.20.10.4/serviceapp/get_detail_review.php?id_photo='+item.id;
    // let url = 'http://localhost:82/servicewa/get_detail.php?_id_album=' + item.id_ab + '&id_photo=' + item.id;

    this.http.get(url).subscribe((data: any) => {
      this.rowsReview = data.rowsReview;
      console.log(url);
      console.log(data);
    }, (error) => { console.log(error) });
  } 

loadVideo(item){
console.log(item.id);
console.log(item._id);
let url = 'http://172.20.10.4/serviceapp/get_video.php?user_id='+item.id + '&type_work=' + item._id;

this.http.get(url).subscribe((data: any) => {
  this.rowsVideo = data.rowsVideo;
  console.log(url);
  console.log(data);
}, (error) => { console.log(error) });
  }


  Contact_work(item){
    this.navCtrl.push(ContactWorkPage,item)
    // console.log(item.id);

  }
  
 



 }//end class
