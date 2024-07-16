import { NgModule } from '@angular/core';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { CommonModule } from '@angular/common';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { RouterModule } from '@angular/router';
import { OrderListPipe } from './pipes/order-list.pipe';
import { ImgBrokenDirective } from './directives/img-broken.directive';



@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    RouterModule,
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    OrderListPipe,
    ImgBrokenDirective
  ],
  exports: [
    RouterModule,
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    OrderListPipe,
    ImgBrokenDirective
  ]
})
export class SharedModule { }
