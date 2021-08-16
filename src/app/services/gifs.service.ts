import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { GifsHttpResponse } from '../models/gifs-response.model';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _history: string[] = [];

  public results: any[] = [];

  constructor(
    private httClient: HttpClient
  ) { }

  get getHistory() {
    return [...this._history];
  }

  onSearch(query: string = '') {
    if (query.length === 0) {
      return;
    }

    query = query.toLowerCase();
    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.slice(0, 10);

      localStorage.setItem('gifsApp_history', );
    }

    console.log(this._history);
    this.httClient.get<GifsHttpResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${environment.apiKeyGiphy}&q=${query}&limit=10`).subscribe(data => {
      this.results = data.data;
      console.log(data);
    });
  }

}
