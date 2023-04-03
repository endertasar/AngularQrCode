import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QRPageComponent } from './qrpage/qrpage.component';

const routes: Routes = [{path:'', component:QRPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
