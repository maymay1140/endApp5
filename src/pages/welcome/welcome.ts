import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { AlertController } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { MenuUserPage } from '../menu-user/menu-user';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  username: string;
  password: string;
  loginResult: string;
  data: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private storage: Storage,public http: HttpClient,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  login(username,password){
    
    // let url = 'http://192.168.1.56/servicewa/getmember.php?username=' + username + '&password=' + password;
    let url = 'http://172.20.10.4/serviceapp/getmember.php?username=' + username + '&password=' + password;

   
    this.data = this.http.get(url, username);
    this.data = this.http.get(url, password);

    this.data.subscribe(data => {

      this.storage.set('id', data.id);
      this.storage.get('id').then((val) => {
    
      })

      
      this.storage.set('type', data.type);
      this.storage.get('type').then((val) => {
    
      })


      console.log(data.id);
      if(data.id == null){
        let alert = this.alertCtrl.create({
          title: 'ไม่มี Username นี้ในระบบ',
          subTitle: 'กรุณาเข้าสู่ระบบใหม่อีกครั้ง',
          buttons: ['ok']
        });
        alert.present();
       

      }else if(data.type == '1'){
        let alert = this.alertCtrl.create({
          title: 'Welcome Photographer',
          subTitle: 'ยินดีต้อนรับเข้าสู่แอปช่างภาพ',
          buttons: ['ok']
        });
        alert.present();
        this.navCtrl.push(HomePage);

      }else if(data.type == '2'){
        let alert = this.alertCtrl.create({
          title: 'Welcome Photographer',
          
          subTitle: 'ยินดีต้อนรับเข้าสู่แอปค้นหาช่างภาพ',
          buttons: ['ok']
        });
        alert.present();
        this.navCtrl.push(MenuUserPage);

      }else{
        
        this.loginResult = "Faild";
      }
    });
  }

  register(){
    this.navCtrl.push(RegisterPage)
  }

  info(){
    this.navCtrl.push(InfoPage)
  }
 

}//end class
