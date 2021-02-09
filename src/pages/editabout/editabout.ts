import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { AboutPage } from '../about/about';


@IonicPage()
@Component({
  selector: 'page-editabout',
  templateUrl: 'editabout.html',
})
export class EditaboutPage {

  rowsProvinces=[];
  rowsAmphures=[];
  rowsTambon=[];
  id =[];
  ida=[];


  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,private storage: Storage,public alertCtrl:AlertController) 
  {
    this.getprovinces();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditaboutPage');
  }

  getprovinces() {
    let url = 'http://172.20.10.4/serviceapp/getprovinces.php';
   
    this.http.get(url).subscribe((data: any) => {
      this.rowsProvinces = data.provinces;
      console.log(this.rowsProvinces);
   
    }, (error) => { console.log(error) });
  
}

show(e) {
  // console.log(e)
  this.rowsProvinces.forEach((element, index) => {
    e.forEach(ele => {
      if (ele == element.id) {
        this.id.push(element.id);
      }
    });
  });
 
}

getamphures() {
  let url = 'http://172.20.10.4/serviceapp/getdistricts.php?province_id='+this.id;
  this.http.get(url).subscribe((data: any) => {
    this.rowsAmphures = data.amphures;
   
    
  }, (error) => { console.log(error) });

} 

showte(a){
 // console.log(e)
  this.rowsAmphures.forEach((element, index) => {
    a.forEach(ele => {
      if (ele == element.id) {
        this.ida.push(element.id);
      }
    });
  });
 console.log(this.ida)
 }

 gettambon() {
  let url = 'http://172.20.10.4/serviceapp/gettambon.php?amphure_id='+this.ida;
  this.http.get(url).subscribe((data: any) => {
    this.rowsTambon = data.tambon;
    console.log(this.rowsTambon);
    console.log(data);
  }, (error) => { console.log(error) });

} 


save(name,surname,phone,email,subdistricts){
  this.storage.get('id').then((val) => {
  let jsonData = { name:name, surname: surname, phone: phone, email: email, provinces:this.id, districts:this.ida, subdistricts:subdistricts }; //สร้าง obj
  
  let url = 'http://172.20.10.4/serviceapp/updateabout.php?id='+val; //ให้ไป post ที่  url
  this.http.post(url,jsonData).subscribe((data: any) => {
        let alert = this.alertCtrl.create({
          title: 'แก้ไขข้อมูลส่วนตัวเรียบร้อย',
          buttons: ['ok']
        });
        alert.present();
        this.navCtrl.push(AboutPage)
        console.log(data);
  });

})

}


}//end class
