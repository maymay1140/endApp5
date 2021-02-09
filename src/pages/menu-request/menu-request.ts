import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-menu-request',
  templateUrl: 'menu-request.html',
})
export class MenuRequestPage {

  rowData=[];
  rowAccept=[];


  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,private storage: Storage,public alertCtrl: AlertController) {
    this.LoadData();
    this.LoadAccept();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuRequestPage');
  }

  LoadData(){
    this.storage.get('id').then((val) => {

      let url = "http://172.20.10.4/serviceapp/get_work_request.php?id_photo="+val;

      this.http.get(url).subscribe((data: any) => {
        this.rowData = data.rowData;
  
         console.log(data);
        
      }, (error) => { console.log(error) });
    })
  }

  LoadAccept(){
    this.storage.get('id').then((val) => {

      let url = "http://172.20.10.4/serviceapp/get_accept.php?id_photo="+val;

      this.http.get(url).subscribe((data: any) => {
        this.rowAccept = data.rowAccept;
  
         console.log(data);
        
      }, (error) => { console.log(error) });
    })
  }

  Complete(accept){
    let jsonData = { status:3 }; //สร้าง obj
    let url = 'http://172.20.10.4/serviceapp/complete_work.php?id='+accept.id; //ให้ไป post ที่  url
    this.http.post(url,jsonData).subscribe((data: any) => {
        let alert = this.alertCtrl.create({
          title: 'ปิดจ็อบงานเรียบร้อยแล้ว',
          buttons: ['ok']
        });
        alert.present();
        
          this.navCtrl.push(MenuRequestPage)
          console.log(data);
    });
  }

  Accept(item){
    let jsonData = { status:1 }; //สร้าง obj
      let url = 'http://172.20.10.4/serviceapp/accept_work.php?id='+item.id; //ให้ไป post ที่  url
      this.http.post(url,jsonData).subscribe((data: any) => {
        let alert = this.alertCtrl.create({
          title: 'อนุมัติงานเรียบร้อย',
          buttons: ['ok']
        });
        alert.present();
            this.navCtrl.push(MenuRequestPage)
            console.log(data);
      });
  }

  No(item){
    let jsonData = { status:2 }; //สร้าง obj
      let url = 'http://172.20.10.4/serviceapp/No_work.php?id='+item.id; //ให้ไป post ที่  url
      this.http.post(url,jsonData).subscribe((data: any) => {
        let alert = this.alertCtrl.create({
          title: 'ปฏิเสธิงาน',
          buttons: ['ok']
        });
        alert.present();
            this.navCtrl.push(MenuRequestPage)
            console.log(data);
      });
  }
  HomeMenu(){
    this.navCtrl.push(HomePage);
  }





}// end class
