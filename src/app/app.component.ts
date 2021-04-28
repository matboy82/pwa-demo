import { Component } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pwa-demo';

  webcamImage!: WebcamImage;

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }
}
