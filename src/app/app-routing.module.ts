import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CameraComponent } from './camera/camera.component';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
{ path: 'geolocation', component: GeolocationComponent },
{ path: 'camera', component: CameraComponent },
{ path: 'notification', component: NotificationComponent },
{ path: '', redirectTo: 'app', pathMatch: 'full' },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
