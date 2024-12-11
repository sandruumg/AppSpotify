import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';
import { TrackModel } from '../../core/models/tracks.model';
import { stat } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback: EventEmitter<any> = new EventEmitter<any>()

  public audio!:HTMLAudioElement
  public trackInfo$:BehaviorSubject<any> = new BehaviorSubject(undefined)
  public timeElapsed$:BehaviorSubject<string> = new BehaviorSubject('00:00') 
  public timeReminin$:BehaviorSubject<string> = new BehaviorSubject('-00:00') 
  public playerStatus$:BehaviorSubject<string> = new BehaviorSubject('paused') 
  public playerPercentage$:BehaviorSubject<number> = new BehaviorSubject(0) 

  private baseUrl = 'https://api-nm073yv2t-sandras-projects-b3023a25.vercel.app/api/1.0/tracks';

  constructor() { 
    this.audio = new Audio()
    this.trackInfo$.subscribe(responseOK => {
      if (responseOK) {
        this.setAudio(responseOK)
      }
    })
    this.listenAllEvents()
  }

  private listenAllEvents():void{
    this.audio.addEventListener('timeupdate',this.calculeTime, false)
    this.audio.addEventListener('playing',this.setPlayerStatus, false)
    this.audio.addEventListener('play',this.setPlayerStatus, false)
    this.audio.addEventListener('pause',this.setPlayerStatus, false)
    this.audio.addEventListener('ended',this.setPlayerStatus, false)

  }
  private setPlayerStatus = (state:any) =>{
    switch (state.type) {
      case 'play':
        this.playerStatus$.next('play')
        break;
      case 'playing':
        this.playerStatus$.next('playing')
        break;
      case 'ended':
        this.playerStatus$.next('ended')
        break;
      default:
        this.playerStatus$.next('paused')
        break;
    }
  }
  private calculeTime = () => {
    const {duration, currentTime} = this.audio
    this.setTimeElapsed(currentTime)
    this.setTimeReminin(currentTime, duration)
    this.setPercentage(currentTime, duration)

  }

  private setPercentage(currentTime:number, duration:number):void{
    let percentage = (currentTime * 100) / duration
    this.playerPercentage$.next(percentage)
  }

  private setTimeElapsed(currentTime:number):void{
    let seconds = Math.floor(currentTime % 60);
    let minutes = Math.floor((currentTime / 60) % 60);

    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;

    const displayFormat = `${displayMinutes}:${displaySeconds}`;
    this.timeElapsed$.next(displayFormat)
  }

  private setTimeReminin(currentTime: number, duration: number):void{
    let timeLeft = duration - currentTime
    let seconds = Math.floor(timeLeft % 60);
    let minutes = Math.floor((timeLeft / 60) % 60);

    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;

    const displayFormat = `-${displayMinutes}:${displaySeconds}`;
    this.timeReminin$.next(displayFormat)

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

  public togglePlayer():void{
    (this.audio.paused) ? this.audio.play() : this.audio.pause()
  }

  public seekAudio(percentage: number):void{
    const {duration} = this.audio
    const percentageToSecond = (percentage * duration) / 100
    this.audio.currentTime = percentageToSecond
  }
}
