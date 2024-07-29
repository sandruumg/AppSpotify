import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchComponent } from "../../components/search/search.component";
import { PlayListBodyComponent } from "../../../../shared/components/play-list-body/play-list-body.component";
import { Observable, of } from 'rxjs';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [CommonModule, SearchComponent, PlayListBodyComponent],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent {
  listResults$: Observable<any> = of([])
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  receiveData(event: string): void {
    //TODO: agarras el termino y sabes que solo se ejecuta cunado tiene 3 caracters
    console.log('🎁 Estoy en el padre jua jua...', event);
    this.listResults$ = this.searchService.searchTracks$(event)

  }
}
