import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CameraComponent } from './camera/camera.component';
import { NotificationComponent } from './notification/notification.component';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { WebcamModule } from 'ngx-webcam';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    CameraComponent,
    NotificationComponent,
    GeolocationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    WebcamModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
