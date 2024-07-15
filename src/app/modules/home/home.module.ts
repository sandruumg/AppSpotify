import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
// no sé si este modulo dará error 
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    // no sé si este modulo dará error 
    SharedModule
  ]
})
export class HomeModule { }
