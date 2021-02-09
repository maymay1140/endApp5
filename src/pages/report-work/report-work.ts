import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-report-work',
  templateUrl: 'report-work.html',
})
export class ReportWorkPage {
  rowData=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,private storage: Storage) {
    this.LoadData();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportWorkPage');
  }

  LoadData(){
    this.storage.get('id').then((val) => {

      let url = "http://172.20.10.4/serviceapp/report_work.php?id_photo="+val;

      this.http.get(url).subscribe((data: any) => {
        this.rowData = data.rowData;
  
         console.log(data);
        
      }, (error) => { console.log(error) });
    })
  }
  HomeMenu(){
    this.navCtrl.push(HomePage);
  }


}// end class
