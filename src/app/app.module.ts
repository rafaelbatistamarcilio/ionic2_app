
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from './../pages/home/home.component';
import { CameraPage } from './../pages/camera/camera.component';
import { QrCodePage } from './../pages/qr-code/qr-code.component';
import { GeoLocationPage } from './../pages/geo-location/geo-location.component';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CameraPage,
    QrCodePage,
    GeoLocationPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CameraPage,
    QrCodePage,
    GeoLocationPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
