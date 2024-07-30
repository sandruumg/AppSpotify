import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('progressBar') progressBar:ElementRef = new ElementRef('')
  listObservers$: Array<Subscription> = []
  state: string = 'paused'
  constructor(public multimediaService:MultimediaService){ }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u=>u.unsubscribe())
    console.log('🔴 BOM!')
  }

  ngOnInit():void{
    const observer1$ = this.multimediaService.playerStatus$.subscribe(status => this.state = status)
    this.listObservers$ = [observer1$]
  }

  handlePosition(event: MouseEvent):void{
    const elNative: HTMLElement = this.progressBar.nativeElement 
    const {clientX} = event
    const {x, width} = elNative.getBoundingClientRect()
    const clicX = clientX - x
    const percentageFromX = (clicX * 100) / width
    console.log(percentageFromX)
    this.multimediaService.seekAudio(percentageFromX)
  }
}
