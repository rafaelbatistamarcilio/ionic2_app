import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BarcodeScanner } from 'ionic-native';

/*
  Generated class for the QrCode page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-qr-code',
  templateUrl: 'qr-code.html'
})
export class QrCodePage {

  public codes: Array<String>;
  public errorCode: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('QR CODE PAGE');
    this.codes = new Array<String>();
  }

  public scan(): void {
    BarcodeScanner
      .scan()
      .then(
        (barcodeData) => {
          this.codes.push("CODIGO: "+barcodeData.text);
        },
        (error) => {
          console.log(error);
          this.errorCode = "ERRO: " + error;
        }
      );
  }
}
