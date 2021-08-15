import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _history: string[] = [];

  constructor() { }

  get getHistory() {
    return [...this._history];
  }

  onSearch(query: string = '') {
    if (query.length === 0) {
      return;
    }

    query = query.toLowerCase();
    if ( !this._history.includes(query) ) {
      this._history.unshift(query);
      this._history = this._history.slice(0, 10);
    }

    console.log(this._history);
  }

}
