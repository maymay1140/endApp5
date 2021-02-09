import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { StarRatingModule } from 'ionic3-star-rating';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AboutPage } from '../pages/about/about';
import { ContactWorkPage } from '../pages/contact-work/contact-work';
import { DetailPage } from '../pages/detail/detail';
import { EditaboutPage } from '../pages/editabout/editabout';
import { InfoPage } from '../pages/info/info';
import { MenuContactPage } from '../pages/menu-contact/menu-contact';
import { MenuRequestPage } from '../pages/menu-request/menu-request';
import { MenuUserPage } from '../pages/menu-user/menu-user';
import { RegisterPage } from '../pages/register/register';
import { ReportWorkPage } from '../pages/report-work/report-work';
import { ReviewDetailPage } from '../pages/review-detail/review-detail';
import { ReviewGallPage } from '../pages/review-gall/review-gall';
import { ReviewPhotoPage } from '../pages/review-photo/review-photo';
import { SearchWorkPage } from '../pages/search-work/search-work';
import { ViewReviewPage } from '../pages/view-review/view-review';
import { WelcomePage } from '../pages/welcome/welcome';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    ContactWorkPage,
    DetailPage,
    EditaboutPage,
    InfoPage,
    MenuContactPage,
    MenuRequestPage,
    MenuUserPage,
    RegisterPage,
    ReportWorkPage,
    ReviewDetailPage,
    ReviewGallPage,
    ReviewPhotoPage,
    SearchWorkPage,
    ViewReviewPage,
    WelcomePage,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    StarRatingModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    ContactWorkPage,
    DetailPage,
    EditaboutPage,
    InfoPage,
    MenuContactPage,
    MenuRequestPage,
    MenuUserPage,
    RegisterPage,
    ReportWorkPage,
    ReviewDetailPage,
    ReviewGallPage,
    ReviewPhotoPage,
    SearchWorkPage,
    ViewReviewPage,
    WelcomePage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
