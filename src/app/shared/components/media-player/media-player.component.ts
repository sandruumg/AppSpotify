import { Component } from '@angular/core';
import { TrackModel } from '../../../core/models/tracks.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent {
  mockCover : TrackModel = {
    cover: 'https://i.scdn.co/image/ab67616d0000b273bfb94590c914538b193f6931',
    album: 'mp3',
    name: 'Emilia',
    url: 'http://localhost/track.mp3',
    _id: 1
  }
}
