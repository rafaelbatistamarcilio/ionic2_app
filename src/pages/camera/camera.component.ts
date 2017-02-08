import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from 'ionic-native';

/*
  Generated class for the Camera page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {

  private images: Array<{timestamp: Date, imgData: String}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('IN CAMERA COMPONENT');
    this.images = new Array<{timestamp: Date, imgData: String}>();
  }

  /**
   * take a pic whit the device camera
   */
  public takePic(): void {

    let options: CameraOptions = {
      quality: 100,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 900,
      targetHeight: 900,
      // popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    Camera
      .getPicture(options)
      .then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64:
        this.images.push({timestamp: new Date(), imgData: 'data:image/jpeg;base64,' + imageData });
      }, (err) => {
        console.log(err);
      });
  }

}
