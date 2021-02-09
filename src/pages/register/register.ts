import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,public alertCtrl: AlertController) {
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  create(card_id,username,password,type){

    let jsonData = { card_id:card_id, username: username, password: password, type: type }; //สร้าง obj
    // let url = 'http://192.168.1.56/servicewa/register.php'; 
    let url = 'http://172.20.10.4/serviceapp/register.php'; //ให้ไป post ที่  url
    //ให้ไป post ที่  url
    this.http.post(url,jsonData).subscribe((data: any) => {
      // console.log(jsonData);
        if(type==1){
          let alert = this.alertCtrl.create({
            title: 'สมัครสมาชิกช่างภาพเรียบร้อย',
            subTitle: 'การสมัครสมาชิกเป็นช่างภาพจะมีค่าบริการ200บาท โปรดโอนเงินและอัพโหลดหลักฐานการชำระเงินด้วยค่ะ',
            buttons: ['ok']
          });
          alert.present();
          this.navCtrl.push(WelcomePage)
          console.log(data);
        }else if(type==2){
          let alert = this.alertCtrl.create({
            title: 'สมัครสมาชิกเรียบร้อย',
            subTitle: 'สามารถ Login เข้าสู่ระบบแอปค้นหาช่างภาพได้เลยค่ะ',
            buttons: ['ok']
          });
          alert.present();
          this.navCtrl.push(WelcomePage)
          console.log(data);
        }
      
    });
  
}


}// end class
