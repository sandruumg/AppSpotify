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
  
  listObservers$: Array<Subscription> = []

  constructor(public multimediaService:MultimediaService){ }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u=>u.unsubscribe())
    console.log('🔴 BOM!')
  }

  ngOnInit():void{
    
  }
}
