import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from '../youtube-search/search-result.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './searchresult.component.html'
})
export class SearchresultComponent implements OnInit {
  @Input() result: SearchResult

  constructor() { }

  ngOnInit() {
  }

}
