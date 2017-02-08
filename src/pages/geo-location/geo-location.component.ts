import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Geolocation } from 'ionic-native';

@Component({
  selector: 'page-geo-location',
  templateUrl: 'geo-location.html'
})
export class GeoLocationPage {

  public myPosition: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('IN GEOLOCATION COMPONENT');
  }

  public getPosition(): void {
    Geolocation.getCurrentPosition().then(
      (resp) => {
        this.myPosition = resp.coords.latitude + " " + resp.coords.longitude;
      }
    ).catch(
      (error) => {
        console.log('Error getting location', error);
      }
    );
  }

}
