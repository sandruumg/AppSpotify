import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';
import { TrackModel } from '../../core/models/tracks.model';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback: EventEmitter<any> = new EventEmitter<any>()

  public audio!:HTMLAudioElement
  public trackInfo$:BehaviorSubject<any> = new BehaviorSubject(undefined)
  private baseUrl = 'http://localhost:3000';

  constructor() { 
    this.audio = new Audio()
    this.trackInfo$.subscribe(responseOK => {
      if (responseOK) {
        this.setAudio(responseOK)
      }
    })
  }
  public setAudio(track: TrackModel): void {
    console.log('respuesta cancion....', track);
    
    // Completar la URL si es necesario
    if (!track.url.startsWith('http')) {
      track.url = `${this.baseUrl}${track.url}`;
    }
    
    this.audio.src = track.url;
    this.audio.play();
  }
}
