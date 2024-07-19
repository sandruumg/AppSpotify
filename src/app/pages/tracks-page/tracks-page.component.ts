import { Component } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";
import { SectionGenericComponent } from "../../shared/components/section-generic/section-generic.component";
import { TrackModel } from '../../core/models/tracks.model';
import { TrackService } from '../../modules/tracks/services/track.service';
import { Subscription } from 'rxjs';
import { response } from 'express';

@Component({
  selector: 'app-tracks-page',
  standalone: true,
  imports: [SharedModule, SectionGenericComponent],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent {
  tracksTrending: Array<TrackModel> = [  ]
  tracksRandom: Array<TrackModel> = [  ]

  listObervers$: Array<Subscription> = []

  constructor(private trackService:TrackService){ }

  ngOnInit(): void {
    this.loadDataAll() //TODO 📌📌
    this.loadDataRandom() //TODO 📌📌
  }

  async loadDataAll(): Promise<any> {
    this.tracksTrending = await this.trackService.getAllTracks$().toPromise()

  }

  loadDataRandom(): void {
    this.trackService.getAllRandom$()
      .subscribe((response: TrackModel[]) => {
        this.tracksRandom = response
      })
  }

  onDestroy():void{
  }

}
