import { CommonModule, NgComponentOutlet } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { TrackModel } from '../../../core/models/tracks.model';
import { ImgBrokenDirective } from '../../directives/img-broken.directive';
import { MultimediaService } from '../../services/multimedia.service';

@Component({
  selector: 'app-card-player',
  standalone: true,
  imports: [CommonModule, ImgBrokenDirective],
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})

export class CardPlayerComponent {
  constructor(private multimediaService:MultimediaService){ }

  @Input() mode:'small' | 'big' = 'small';
  @Input() track:TrackModel = {_id:0, name:'', album:'', url:'', cover: ''};

  sendPlay(track:TrackModel):void{
    this.multimediaService.trackInfo$.next(track)
  }
}

