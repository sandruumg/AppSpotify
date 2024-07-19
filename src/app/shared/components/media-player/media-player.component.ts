import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '../../../core/models/tracks.model';
import { CommonModule } from '@angular/common';
import { MultimediaService } from '../../services/multimedia.service';
import { response } from 'express';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  mockCover : TrackModel = {
    cover: 'https://i.scdn.co/image/ab67616d0000b273bfb94590c914538b193f6931',
    album: 'mp3',
    name: 'Emilia',
    url: 'http://localhost/track.mp3',
    _id: 1
  }

  listObservers$: Array<Subscription> = []

  constructor(private multimediaService:MultimediaService){ }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u=>u.unsubscribe())
    console.log('🔴 BOM!')
  }

  ngOnInit():void{
    // programación reactiva 
    const observer1$:Subscription = this.multimediaService.callback.subscribe(
      (response: TrackModel)=>{
        console.log('Recibiendo cancion....', response)
      }
    )
    this.listObservers$ = [observer1$]
  }
}
