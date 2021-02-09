import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { DetailPage } from '../detail/detail';
import { MenuUserPage } from '../menu-user/menu-user';

@IonicPage()
@Component({
  selector: 'page-search-work',
  templateUrl: 'search-work.html',
})
export class SearchWorkPage {
  typeArray=[];
  typeProvince=[];
  rowsData=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
    this.loadtw();
    this.loadprovince();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchWorkPage');
  }

  loadtw(){
    let url ='http://172.20.10.4/serviceapp/get_type_w.php/';
    this.http.get(url).subscribe((data: any)=>{
      this.typeArray = data.typeArray;
      console.log(this.typeArray);
    },(error) => {console.log(error) });
  }

  loadprovince(){
    let url ='http://172.20.10.4/serviceapp/get_province.php/';
    this.http.get(url).subscribe((data: any)=>{
      this.typeProvince = data.typeProvince;
      console.log(this.typeProvince);
    },(error) => {console.log(error) });
  }

  getsearch(type_work,price,type,province) {
    let url = 'http://172.20.10.4/serviceapp/get_search.php?provinces='+province + '&type=' + type+ '&price=' + price + '&_id=' + type_work;
    this.http.get(url).subscribe((data: any) => {
      this.rowsData = data.rowsData;
      console.log(this.rowsData);
      console.log(data);
    }, (error) => { console.log(error) });
  } 

  // getsearchOriginal(type_work,price,time,province) {
  //   let url = 'http://10.0.2.192/servicewa/get_search.php?provinces='+province;
  //   this.http.get(url).subscribe((data: any) => {
  //     this.rowsData = data.rowsData;
  //     console.log(this.rowsData);
  //     console.log(data);
  //   }, (error) => { console.log(error) });
  // } 

  Detail(item){
    this.navCtrl.push(DetailPage,item);
  }
  HomeMenu(){
    this.navCtrl.push(MenuUserPage);
  }
  




}// end class
