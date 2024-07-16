import { CommonModule, NgComponentOutlet } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { TrackModel } from '../../../core/models/tracks.model';
import { ImgBrokenDirective } from '../../directives/img-broken.directive';

@Component({
  selector: 'app-card-player',
  standalone: true,
  imports: [CommonModule, ImgBrokenDirective],
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})

export class CardPlayerComponent {
  @Input() mode:'small' | 'big' = 'small';
  @Input() track:TrackModel = {_id:0, name:'', album:'', url:'', cover: ''};

}

