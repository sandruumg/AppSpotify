import { Component, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  @Output() callbackData = new EventEmitter<any>();
  
  src:string = '';

  callSearch(value: string): void {
    if (value.length>=3) {
      this.callbackData.emit(value);
      console.log('Searching for:', value);

    }
  }

}
