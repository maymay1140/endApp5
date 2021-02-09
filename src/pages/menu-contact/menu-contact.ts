import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { MenuUserPage } from '../menu-user/menu-user';


@IonicPage()
@Component({
  selector: 'page-menu-contact',
  templateUrl: 'menu-contact.html',
})
export class MenuContactPage {
  datarequest=[];


  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,private storage: Storage) {
    this.loadrequest();
  }
  


  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuContactPage');
  }

  loadrequest(){
    this.storage.get('id').then((val) => {

      let url = "http://172.20.10.4/serviceapp/get_request.php?user_id="+val;

      this.http.get(url).subscribe((data: any) => {
        this.datarequest = data.datarequest;
  
         console.log(data);
        
      }, (error) => { console.log(error) });
    })
  }

  HomeMenu(){
    this.navCtrl.push(MenuUserPage);
  }


}// end class
