import { Component, Input, input } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { CardPlayerComponent } from '../card-player/card-player.component';
import { CommonModule } from '@angular/common';
import { TrackModel } from '../../../core/models/tracks.model';

@Component({
  selector: 'app-section-generic',
  standalone: true,
  imports: [CommonModule,CardPlayerComponent],
  templateUrl: './section-generic.component.html',
  styleUrl: './section-generic.component.css'
})
export class SectionGenericComponent {
  @Input() title: string = ''
  @Input() mode: 'small' | 'big' = 'big'
  @Input() dataTracks: Array<TrackModel> = []



}
