import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { TrackService } from './services/track.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TracksRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    TrackService // Asegúrate de proveer TrackService aquí si es necesario

  ],
})
export class TracksModule { }
