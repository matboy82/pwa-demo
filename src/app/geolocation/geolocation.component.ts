import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss']
})
export class GeolocationComponent implements OnInit {
  
    currentLat: any;
    currentLong: any;
  
    ngOnInit() {
      this.findMe();
    }
  
    findMe() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.showPosition(position);
        });
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    }
  
    showPosition(position: any) {
      this.currentLat = position.coords.latitude;
      this.currentLong = position.coords.longitude;
      console.log('Position: ' + this.currentLat + '/' + this.currentLong);
      alert(this.currentLat+'/'+this.currentLong);
    }
  
  }